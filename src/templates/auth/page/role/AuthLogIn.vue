<template>
  <AuthWrapper>
    <!-- left column -->
    <div></div>

    <!-- Right column -->
    <div
      class="right-column relative overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full h-full flex flex-col items-start gap-4 px-6 py-12 bg-black/30 lg:w-1/2 after:content-[''] after:fixed after:right-0 after:top-0 after:w-1/2 after:h-full backdrop-blur-[50px] after:z-[1] lg:after:w-1/2 max-lg:after:w-full"
    >
      <!-- header-container -->
      <div class="relative z-20 flex justify-between items-start w-full">
        <!-- translation icon & dropdown -->
        <div class="flex flex-col w-1/2 gap-8 sm:gap-6">
           <img
                    class="w-8 h-8 opacity-70"
                    src="https://i.ibb.co.com/mF9x2JG0/svgviewer-png-output-85.webp"
                    alt="globe"
                  />
        </div>

        <a href="">
          <img
            src="https://i.ibb.co/jZQNHC2t/svgviewer-png-output-4.webp"
            class="w-16 h-16"
          />
        </a>
      </div>

      <!-- login-container -->
      <div class="flex flex-col w-full relative gap-6 z-[5]">
        <div class="flex flex-col w-full gap-6">
          <div class="text-2xl font-semibold tracking-wider text-white">
            Log In
          </div>

          <form @submit.prevent="handleLogin" class="flex flex-col gap-8">
            <p class="text-base font-medium leading-6 mb-0 text-white">
              Don't have an account?
              <RouterLink
                href="/sign-up"
                class="text-base font-medium leading-6 text-[#f06]"
                >Sign Up
              </RouterLink>
            </p>

            <!-- input-wrapper (email) -->
            <InputAuthComponent
              v-model="email"
              placeholder="Email"
              id="email"
              show-label
              label-text="Email"
              required
              required-display="italic-text"
              type="email"
            />

            <!-- input-wrapper (password) -->

            <div class="flex flex-col gap-4">
              <InputAuthComponent
                v-model="password"
                placeholder="Password"
                id="password"
                show-label
                label-text="Password"
                required
                required-display="italic-text"
                type="password"
                :right-icon="EyeSlashIcon"
              />

              <a
                href="#"
                class="w-fit opacity-70 text-xs capitalize text-text font-semibold"
                >Forgot Password ?</a
              >
            </div>

            <!-- input-wrapper (remember me) -->
            <InputAuthComponent
              v-model="rememberMe"
              id="checkbox"
              type="checkbox"
              show-label
              label-text="Remember me"
            />

            <!-- login button -->
            <button
              type="submit"
              class="auth-login-button w-full relative [caret-color:transparent] h-12 px-6 py-2 gap-2.5 rounded-[0.625rem] inline-flex items-center justify-center text-text dark:text-text-dark bg-buttonPrimary dark:bg-buttonPrimary-dark border border-buttonPrimaryBorder dark:border-buttonPrimaryBorder-dark font-medium text-[15px] transition-opacity duration-100 ease-in-out hover:bg-gradient-to-b hover:from-[#FF408C] hover:to-[#F00] hover:[box-shadow:0px_0px_20px_0px_rgba(255,150,192,0.8)_inset,_8px_8px_30px_0px_rgba(255,0,102,0.7),_0px_0px_35px_0px_rgba(255,255,221,0.5),_-8px_-8px_30px_0px_rgba(255,0,0,0.7)] dark:hover:bg-[linear-gradient(#a60042_0%,_#cc0000_100%)] dark:hover:bg-[initial] dark:hover:[box-shadow:rgba(114,_0,_46,_0.8)_0px_0px_20px_0px_inset,_rgba(204,_0,_82,_0.7)_8px_8px_30px_0px,_rgba(54,_54,_0,_0.5)_0px_0px_35px_0px,_rgba(204,_0,_0,_0.7)_-8px_-8px_30px_0px]"
            >
              <div class="flex items-center gap-5">
                <span
                  class="font-medium leading-6 text-text dark:text-text-dark text-lg"
                >
                  <span v-if="isLoading">Loading...</span>
                  <span v-else>Log in</span>
                </span>
              </div>
            </button>
           
            <!-- Continue with X button -->
            <button
              class="auth-x-login-button w-full relative [caret-color:transparent] h-12 px-6 py-2 gap-2.5 rounded-[0.625rem] inline-flex justify-center items-center text-text dark:text-text-dark border border-buttonSecondaryBorder bg-buttonSecondary dark:bg-buttonSecondary-dark font-medium text-[15px] transition-opacity duration-100 ease-in-out hover:bg-[linear-gradient(180deg,_rgba(87,_85,_85,_0.50)_0%,_rgba(0,_0,_0,_0.50)_100%)] hover:[box-shadow:0px_0px_20px_0px_rgba(255,150,192,0.8)_inset,_8px_8px_30px_0px_rgba(255,0,102,0.7),_0px_0px_35px_0px_rgba(255,255,221,0.5),_-8px_-8px_30px_0px_rgba(255,0,0,0.7)] dark:hover:bg-[linear-gradient(rgba(65,_70,_73,_0.5)_0%,_rgba(0,_0,_0,_0.5)_100%)] dark:hover:bg-[initial] dark:hover:[box-shadow:rgba(114,_0,_46,_0.8)_0px_0px_20px_0px_inset,_rgba(204,_0,_82,_0.7)_8px_8px_30px_0px,_rgba(54,_54,_0,_0.5)_0px_0px_35px_0px,_rgba(204,_0,_0,_0.7)_-8px_-8px_30px_0px]"
            >
              <div class="flex items-center gap-5">
                <img
                  class="w-8 h-8 fill-white"
                  src="https://i.ibb.co.com/KjN9R5cr/svgviewer-png-output-83.webp"
                  alt="X"
                />
                <span
                  class="leading-6 text-lg font-medium text-text dark:text-text-dark"
                  >Continue with X (twitter)</span
                >
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </AuthWrapper>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import { authHandler } from "@/services/authHandler";
import { useI18n } from "vue-i18n";
import AuthWrapper from "../../../../components/auth/authWrapper/AuthWrapper.vue";
import InputAuthComponent from "@/components/dev/input/InputAuthComponent.vue";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const auth = useAuthStore();
const isLoading = ref(false);
const { t, locale } = useI18n();

// Watch locale changes
watch(
  locale,
  (newLocale, oldLocale) => {
    console.log(`[LOGIN] Locale changed from '${oldLocale}' to '${newLocale}'`);
    console.log(
      `[LOGIN] Welcome Back text after locale change: ${t("auth.login.title")}`
    );
  },
  { immediate: true }
);

onMounted(() => {
  console.log(`[LOGIN] Component mounted, current locale: ${locale.value}`);
  console.log(`[LOGIN] Welcome Back text: ${t("auth.login.title")}`);
});

async function handleLogin() {
  try {
    isLoading.value = true;
    console.log("[LOGIN] Attempting login with:", email.value);
    const { idToken, accessToken, refreshToken } = await authHandler.login(
      email.value,
      password.value
    );

    localStorage.setItem("idToken", idToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    auth.setTokenAndDecode(idToken);
    auth.startTokenRefreshLoop();
    isLoading.value = false;
    if (!auth.currentUser.onboardingPassed) {
      router.push("/sign-up/onboarding");
    } else if (
      auth.currentUser.role === "creator" &&
      !auth.currentUser.kycPassed
    ) {
      router.push("/sign-up/onboarding/kyc");
    } else {
      router.push("/dashboard");
    }
  } catch (err) {
    console.error("[LOGIN] Login failed:", err);
    error.value = "Login failed: " + (err.message || "Unknown error");
  }
}
</script>

<script>
export const assets = {
  critical: ["/css/auth.css"],
  high: [],
  normal: ["/images/auth-bg.jpg"],
};
</script>
