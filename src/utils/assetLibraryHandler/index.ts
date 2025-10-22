// /src/utils/assetsLibraryHandler/index.ts
import rawAssets from "./assets.json";

export type AssetType = "icon" | "image" | "video" | "script" | "font" | "link";
type AssetItem = {
  name: string;
  type: AssetType;
  path: string;
};

const ASSETS: AssetItem[] = (rawAssets as AssetItem[]) || [];
const CACHE = new Map<string, string>();

export function clearAssetCache(): void {
  CACHE.clear();
  console.log('[ASSETS] Cache cleared');
}

function getBase(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin.replace(/\/$/, "");
  }
  return "http://localhost:5173";
}

function getVersion(): string {
  const v: unknown = (typeof window !== "undefined" && (window as any).__ASSET_VERSION__) || "";
  return typeof v === "string" ? v : "";
}

function isExternal(u: string): boolean {
  return /^https?:\/\//i.test(u);
}

function normalizeLeadingSlash(p: string): string {
  return p.startsWith("/") ? p : `/${p}`;
}

function withVersion(url: string, version: string): string {
  if (!version) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}v=${encodeURIComponent(version)}`;
}

export function getAsset(name: string, type: AssetType): string {
  const base = getBase();
  const version = getVersion();
  const key = JSON.stringify({ name, type, base, version });
  
  const hit = CACHE.get(key);
  if (hit) {
    console.log(`[ASSETS] Cache hit for: ${name}.${type} -> ${hit}`);
    return hit;
  }
  
  const entry = ASSETS.find(a => a.name === name && a.type === type);
  console.log(`[ASSETS] Looking for: ${name}.${type}`, { 
    found: !!entry, 
    allAssets: ASSETS.map(a => `${a.name}.${a.type}`) 
  });
  
  if (!entry || !entry.path) {
    console.warn(`[ASSETS] Not found: ${name}.${type}`);
    return "";
  }
  
  const raw = entry.path;
  let result = "";
  
  if (type === "link") {
    result = isExternal(raw) ? raw : `${base}${normalizeLeadingSlash(raw)}`;
  } else {
    result = isExternal(raw) 
      ? withVersion(raw, version) 
      : withVersion(`${base}${normalizeLeadingSlash(raw)}`, version);
  }
  
  CACHE.set(key, result);
  console.log(`[ASSETS] Resolved: ${name}.${type} -> ${result}`);
  return result;
}

export function hasAsset(name: string, type: AssetType): boolean {
  return ASSETS.some(a => a.name === name && a.type === type);
}

export function getAssetOr(name: string, type: AssetType, fallback = ""): string {
  const u = getAsset(name, type);
  return u || fallback;
}

export function assetsConfigReady(): boolean {
  const ready = Array.isArray(ASSETS) && ASSETS.length > 0;
  console.log(`[ASSETS] Config ready: ${ready} (${ASSETS.length} assets)`);
  return ready;
}

export function debugAssets(): void {
  console.log('[ASSETS] Debug info:', {
    base: getBase(),
    version: getVersion(),
    cacheSize: CACHE.size,
    allAssets: ASSETS
  });
}