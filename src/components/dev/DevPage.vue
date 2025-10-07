<template>
     <div class="flex flex-col gap-10 bg-white text-text p-5 max-w-4xl mx-auto dark:bg-black">
      <!-- Main container with gap between sections -->

      <!-- Basic Components Section -->
      <section class="flex flex-col gap-6">
        <h1 class="text-2xl font-semibold font-poppins">Form Components with basic style</h1>

        <div class="flex flex-col gap-6">
        <!-- Gap between form groups -->

          <!-- Text Input with Description -->
          <div class="flex flex-col gap-1.5">
            <label
              for="text-input-desc"
              class="block text-sm font-medium text-text font-poppins dark:text-dark-text"
              >Text input with description</label>
            <div
              class="flex items-center px-3.5 py-2.5 border border-border dark:border-dark-border rounded-input gap-2 focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <input
                type="text"
                id="text-input-desc"
                class="flex-1 text-sm border-none focus:outline-none bg-transparent font-poppins text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text"
                placeholder="Enter some text"
              />
            </div>
            <p class="text-xs text-slate-500 dark:text-dark-dash-text font-poppins">
              This is a helpful description for the input field.
            </p>
          </div>

          <!-- Required Input with Error -->
          <div class="flex flex-col gap-1.5">
            <label
              for="required-input"
              class="block text-sm font-medium font-poppins text-text dark:text-dark-text after:content-['_*'] after:text-error dark:after:text-dark-error"
              >Required Input</label
            >
            <div
              class="flex items-center px-3.5 py-2.5 font-poppins border  border-error dark:border-dark-error rounded-input gap-2 focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <input
                type="text"
                id="required-input"
                class="flex-1 text-sm border-none font-poppins focus:outline-none bg-transparent text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text"
                placeholder="This field is required"
              />
            </div>
            <p class="text-xs text-error dark:text-dark-error font-poppins">
              This field is required.
            </p>
          </div>

          <!-- Success State -->
          <div class="flex flex-col gap-1.5 font-poppins">
            <label
              for="success-input"
              class="block text-sm font-medium text-text font-poppins dark:text-dark-text"
              >Success Input</label
            >
            <div
              class="flex items-center px-3.5 py-2.5 font-poppins border border-success dark:border-dark-success rounded-input gap-2 focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <input
                type="text"
                id="success-input"
                class="flex-1 text-sm border-none focus:outline-none font-poppins bg-transparent text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text"
                placeholder="Success state"
                value="Valid input"
              />
            </div>
            <p class="text-xs text-success dark:text-dark-success font-poppins">
              Valid input value.
            </p>
          </div>

          <!-- Input with Left Icon -->
          <div class="flex flex-col gap-1.5 font-poppins">
            <label
              for="icon-left-input"
              class="block text-sm font-medium text-text font-poppins dark:text-dark-text"
              >Input with Left Icon (Search)</label
            >
            <div
              class="flex items-center px-3.5 py-2.5 border border-border dark:border-dark-border rounded-input gap-2 focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <svg
                class="text-dash-text dark:text-dark-dash-text w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <input
                type="email"
                id="icon-left-input"
                class="flex-1 text-sm border-none focus:outline-none font-poppins bg-transparent text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text"
                placeholder="Search..."
              />
            </div>
          </div>

          <!-- Input with Right Icon -->
          <div class="flex flex-col gap-1.5">
            <label
              for="icon-right-input"
              class="block text-sm font-medium text-text dark:text-dark-text font-poppins"
              >Input with Right Icon</label
            >
            <div
              class="flex items-center px-3.5 py-2.5 border border-border dark:border-dark-border rounded-input gap-2 focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <input
                type="password"
                id="icon-right-input"
                class="flex-1 text-sm border-none focus:outline-none bg-transparent font-poppins text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text"
                placeholder="Enter password"
              />
              <svg
                class="text-dash-text dark:text-dark-dash-text w-4 h-4 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>

          <!-- Input with "Optional" Text -->
          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label
                for="optional-input"
                class="block text-sm font-medium text-text dark:text-dark-text font-poppins"
                >Input with "optional" text</label
              >
              <span
                class="text-xs italic text-slate-500 dark:text-dark-dash-text font-poppins"
                >Optional</span
              >
            </div>
            <div
              class="flex items-center px-3.5 py-2.5 border border-border dark:border-dark-border rounded-input gap-2 focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <input
                type="text"
                id="optional-input"
                class="flex-1 text-sm border-none focus:outline-none bg-transparent font-poppins text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text"
                placeholder="Enter discount code"
              />
            </div>
          </div>

          <!-- Input with Persistent Right Text -->
          <div class="flex flex-col gap-1.5">
            <label
              for="percent-input"
              class="block text-sm font-medium text-text dark:text-dark-text font-poppins"
              >Discount Percentage</label
            >
            <div
              class="flex items-center px-3.5 py-2.5 border border-border dark:border-dark-border rounded-input gap-2 focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <input
                type="number"
                id="percent-input"
                class="flex-1 text-sm border-none focus:outline-none bg-transparent text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text"
                placeholder="0"
              />
              <span
                class="text-sm text-text dark:text-dark-text whitespace-nowrap font-poppins"
                >% off</span
              >
            </div>
          </div>

          <!-- Input with Both Left and Right Persistent Text -->
          <div class="flex flex-col gap-1.5">
            <label
              for="price-input"
              class="block text-sm font-medium text-text dark:text-dark-text font-poppins"
              >Monthly Price</label
            >
            <div
              class="flex items-center px-3.5 py-2.5 border border-border dark:border-dark-border rounded-input gap-2 focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <span class="text-sm font-semibold text-text dark:text-dark-text font-poppins"
                >USD$</span
              >
              <input
                type="number"
                id="price-input"
                class="flex-1 text-sm border-none focus:outline-none bg-transparent text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text"
                placeholder="0"
              />
              <span
                class="text-sm text-slate-500 dark:text-dark-dash-text whitespace-nowrap font-poppins"
                >/mo</span
              >
            </div>
          </div>

          <!-- Textarea -->
          <div class="flex flex-col gap-1.5">
            <label
              for="textarea"
              class="block text-sm font-medium text-text dark:text-dark-text font-poppins"
              >Textarea</label
            >
            <div
              class="px-3.5 py-2.5 border border-border dark:border-dark-border rounded-input focus-within:ring-3 focus-within:ring-primary/20 dark:focus-within:ring-dark-primary/20 bg-white dark:bg-dark-surface"
            >
              <textarea
                id="textarea"
                class="w-full text-sm border-none focus:outline-none bg-transparent font-poppins text-text dark:text-dark-text placeholder-dash-text dark:placeholder-dark-dash-text min-h-[5.5rem]"
                placeholder="Enter multiline text"
              ></textarea>
            </div>
            <span class="text-xs text-dash-text dark:text-dark-dash-text font-poppins"
              >30/200 characters</span
            >
          </div>

          <!-- Textarea with Quills library -->
          <div class="flex flex-col gap-1.5">
            <label
              for="editor"
              class="block text-sm font-medium text-text dark:text-dark-text font-poppins"
              >Textarea with Quills library</label
            >
            <div
              class="border border-border dark:border-dark-border rounded-input bg-white dark:bg-dark-surface"
            >
              <div id="editor" class="font-poppins text-text dark:text-dark-text">
                <p>Hello World!</p>
                <p>Some initial <strong>bold</strong> text</p>
                <p><br /></p>
              </div>
            </div>
            <span class="text-xs text-dash-text font-poppins dark:text-dark-dash-text"
              >30/200 characters</span
            >
          </div>

          <!-- Checkbox -->
          <div class="flex flex-col gap-1.5">
            <label
              class="block text-sm font-medium text-text font-poppins dark:text-dark-text"
              >Checkbox Options</label
            >
            <div class="flex flex-col gap-2">
              <div class="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="checkbox1"
                  class="w-4 min-w-4 h-4 cursor-pointer accent-primary font-poppins dark:accent-dark-primary"
                />
                <label
                  for="checkbox1"
                  class="text-sm cursor-pointer text-text dark:text-dark-text font-poppins"
                  >Show fan's username on your post</label
                >
              </div>
              <div class="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="checkbox2"
                  class="w-4 min-w-4 h-4 cursor-pointer accent-primary font-poppins dark:accent-dark-primary"
                />
                <label
                  for="checkbox2"
                  class="text-sm cursor-pointer text-text dark:text-dark-text font-poppins"
                  >I have verified, preserved and currently hold all
                  identification cards and documents required under Record
                  Keeping Requirements, 18 U.S.C. 2257 and 28 C.F.R. 75, or
                  applicable laws in any other jurisdictions, countries, and
                  territories ("2257 documentation"), for all individuals
                  appearing in the Content.</label
                >
              </div>
              <div class="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="published"
                  class="w-4 min-w-4 h-4 cursor-pointer accent-primary dark:accent-dark-primary font-poppins"
                />
                <label
                  for="published"
                  class="text-sm cursor-pointer flex items-baseline text-text dark:text-dark-text font-poppins"
                >
                  <span>Silver tier</span>
                  <div
                    class="h-[1.125rem] flex justify-center items-center px-1.5 rounded-dash-tag bg-dash-published dark:bg-dark-dash-published ml-2"
                  >
                    <span class="text-xs font-medium font-poppins">Published Tier</span>
                  </div>
                </label>
              </div>
              <div class="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="draft"
                  class="w-4 min-w-4 h-4 cursor-pointer font-poppins accent-primary dark:accent-dark-primary"
                />
                <label
                  for="draft"
                  class="text-sm cursor-pointer flex items-baseline font-poppins text-text dark:text-dark-text"
                >
                  <span>New test tier</span>
                  <div
                    class="h-[1.125rem] flex justify-center items-center px-1.5 rounded-dash-tag bg-dash-draft dark:bg-dark-dash-draft ml-2"
                  >
                    <span class="text-xs font-medium font-poppins">Draft</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Radio Buttons -->
          <div class="flex flex-col gap-1.5">
            <label
              class="block text-sm font-medium text-text font-poppins dark:text-dark-text"
              >Radio Options</label
            >
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <input
                  type="radio"
                  id="radio1"
                  name="radio-group"
                  class="w-4 h-4 cursor-pointer accent-primary font-poppins dark:accent-dark-primary"
                />
                <label
                  for="radio1"
                  class="text-sm cursor-pointer text-text dark:text-dark-text font-poppins"
                  >Choice A</label
                >
              </div>
              <div class="flex items-center gap-2">
                <input
                  type="radio"
                  id="radio2"
                  name="radio-group"
                  class="w-4 h-4 cursor-pointer accent-primary dark:accent-dark-primary font-poppins"
                />
                <label
                  for="radio2"
                  class="text-sm cursor-pointer text-text dark:text-dark-text font-poppins"
                  >Choice B</label
                >
              </div>
              <div class="flex items-center gap-2">
                <input
                  type="radio"
                  id="radio3"
                  name="radio-group"
                  class="w-4 h-4 cursor-pointer accent-primary dark:accent-dark-primary font-poppins"
                />
                <label
                  for="radio3"
                  class="text-sm cursor-pointer text-text dark:text-dark-text font-poppins"
                  >Choice C</label
                >
              </div>
            </div>
          </div>

          <!-- Basic Toggle Switch -->
          <div class="flex flex-col gap-1.5">
            <label
              class="block text-sm font-medium text-text dark:text-dark-text font-poppins"
              >Toggle Switch</label
            >
            <div class="flex items-center gap-2">
              <label class="relative inline-block w-12 h-6">
                <input
                  id="basic-toggle"
                  type="checkbox"
                  class="opacity-0 w-0 h-0 peer"
                />
                <span
                  class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-200 font-poppins dark:bg-dark-border transition-all duration-300 rounded-full peer-checked:bg-primary dark:peer-checked:bg-dark-primary"
                ></span>
                <span
                  class="absolute h-5 w-5 top-0.5 left-0.5 bg-white transition-all duration-300 font-poppins rounded-full shadow peer-checked:translate-x-6"
                ></span>
              </label>
              <label
                for="basic-toggle"
                class="text-sm cursor-pointer text-text dark:text-dark-text font-poppins"
                >Toggle me</label
              >
            </div>
          </div>

          <!-- Select Dropdown with Icon -->
          <div class="flex flex-col gap-2 px-2">
            <label
              for="country-select"
              class="block text-sm font-medium text-dash-text dark:text-dark-dash-text font-poppins"
              >Country</label
            >
            <div class="relative">
              <select
                id="country-select"
                class="w-full p-2.5 text-sm text-dash-text dark:text-dark-dash-text bg-white font-poppins dark:bg-dark-surface border border-dash-border dark:border-dark-dash-border rounded-dash-input focus:outline-none focus:border-primary dark:focus:border-dark-primary appearance-none"
              >
                <option selected disabled>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none "
              >
                <svg
                  class="w-5 h-5 text-dash-text dark:text-dark-dash-text"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Tooltip -->
          <div class="flex flex-col gap-2 px-2">
            <label
              class="block text-sm font-medium text-dash-text dark:text-dark-dash-text font-poppins"
              >Basic Tooltips</label
            >
            <div class="flex flex-col gap-2">
              <!-- Up Tooltip -->
              <div>
                <span
                  class="cursor-pointer relative text-text dark:text-dark-text font-poppins before:content-[''] before:absolute before:z-[1001] before:border-5 before:border-transparent before:border-t-[#333] dark:before:border-t-dark-bg before:border-b-0 before:bottom-full before:left-1/2 before:-translate-x-1/2 before:translate-y-[-0.5em] after:content-[attr(tooltip)] after:absolute after:z-[1000] after:bg-[#333] dark:after:bg-dark-bg after:text-white dark:after:text-dark-text after:text-[0.9em] after:leading-none after:px-[1.5ch] after:py-[1ch] after:rounded-[0.3ch] after:shadow-[0_1em_2em_-0.5em_rgba(0,0,0,0.35)] after:whitespace-nowrap after:overflow-hidden after:text-ellipsis after:min-w-[3em] after:max-w-[21em] after:bottom-[calc(100%_+_5px)] after:left-1/2 after:-translate-x-1/2 after:translate-y-[-0.5em] before:opacity-0 before:pointer-events-none before:select-none before:hidden after:opacity-0 after:pointer-events-none after:select-none after:hidden after:font-sans after:text-center hover:before:block hover:after:block hover:before:animate-tooltips-vert hover:after:animate-tooltips-vert"
                  tooltip="Show tooltip on the top"
                  >Show Up</span
                >
              </div>

              <!-- Left Tooltip -->
              <div>
                <span
                  class="cursor-pointer relative text-text dark:text-dark-text font-poppins before:content-[''] before:absolute before:z-[1001] before:border-5 before:border-transparent before:border-l-[#333] dark:before:border-l-dark-bg before:border-r-0 before:top-1/2 before:left-[-5px] before:-translate-y-1/2 before:-translate-x-[0.5em] after:content-[attr(tooltip)] after:absolute after:z-[1000] after:bg-[#333] dark:after:bg-dark-bg after:text-white dark:after:text-dark-text after:text-[0.9em] after:leading-none after:px-[1.5ch] after:py-[1ch] after:rounded-[0.3ch] after:shadow-[0_1em_2em_-0.5em_rgba(0,0,0,0.35)] after:whitespace-nowrap after:overflow-hidden after:text-ellipsis after:min-w-[3em] after:max-w-[21em] after:top-1/2 after:right-[calc(100%_+_5px)] after:-translate-y-1/2 after:-translate-x-[0.5em] before:opacity-0 before:pointer-events-none before:select-none before:hidden after:opacity-0 after:pointer-events-none after:select-none after:hidden after:font-sans after:text-center hover:before:block hover:after:block hover:before:animate-tooltips-horz hover:after:animate-tooltips-horz"
                  tooltip="Slide tooltip to the left"
                  flow="left"
                  >Show Left</span
                >
              </div>

              <!-- Right Tooltip -->
              <div>
                <span
                  class="cursor-pointer relative text-text dark:text-dark-text font-poppins before:content-[''] before:absolute before:z-[1001] before:border-5 before:border-transparent before:border-r-[#333] dark:before:border-r-dark-bg before:border-l-0 before:top-1/2 before:right-[-5px] before:-translate-y-1/2 before:translate-x-[0.5em] after:content-[attr(tooltip)] after:absolute after:z-[1000] after:bg-[#333] dark:after:bg-dark-bg after:text-white dark:after:text-dark-text after:text-[0.9em] after:leading-none after:px-[1.5ch] after:py-[1ch] after:rounded-[0.3ch] after:shadow-[0_1em_2em_-0.5em_rgba(0,0,0,0.35)] after:whitespace-nowrap after:overflow-hidden after:text-ellipsis after:min-w-[3em] after:max-w-[21em] after:top-1/2 after:left-[calc(100%_+_5px)] after:-translate-y-1/2 after:translate-x-[0.5em] before:opacity-0 before:pointer-events-none before:select-none before:hidden after:opacity-0 after:pointer-events-none after:select-none after:hidden after:font-sans after:text-center hover:before:block hover:after:block hover:before:animate-tooltips-horz hover:after:animate-tooltips-horz"
                  tooltip="Slide tooltip to the right"
                  flow="right"
                  >Show Right</span
                >
              </div>

              <!-- Down Tooltip -->
              <div>
                <span
                  class="cursor-pointer relative text-text font-poppins dark:text-dark-text before:content-[''] before:absolute before:z-[1001] before:border-5 before:border-transparent before:border-b-[#333] dark:before:border-b-dark-bg before:border-t-0 before:top-full before:left-1/2 before:-translate-x-1/2 before:translate-y-[0.5em] after:content-[attr(tooltip)] after:absolute after:z-[1000] after:bg-[#333] dark:after:bg-dark-bg after:text-white dark:after:text-dark-text after:text-[0.9em] after:leading-none after:px-[1.5ch] after:py-[1ch] after:rounded-[0.3ch] after:shadow-[0_1em_2em_-0.5em_rgba(0,0,0,0.35)] after:whitespace-nowrap after:overflow-hidden after:text-ellipsis after:min-w-[3em] after:max-w-[21em] after:top-[calc(100%_+_5px)] after:left-1/2 after:-translate-x-1/2 after:translate-y-[0.5em] before:opacity-0 before:pointer-events-none before:select-none before:hidden after:opacity-0 after:pointer-events-none after:select-none after:hidden after:font-sans after:text-center hover:before:block hover:after:block hover:before:animate-tooltips-vert hover:after:animate-tooltips-vert"
                  tooltip="Show tooltip on the bottom"
                  flow="down"
                  >Show Down</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- End of basic components gap container -->
      </section>

      <!-- Dashboard Components Section -->
      <section class="flex flex-col gap-6 bg-gray-50 px-5 dark:bg-black font-poppins">
        <h1 class="text-2xl font-semibold">
          Form components with Dashboard Style
        </h1>

        <div class="flex flex-col gap-6">
          <!-- Gap between form groups -->

          <!-- Text Input with Description (dashboard) -->
          <div class="flex flex-col">
            <label
              for="dash-text-input-desc"
              class="block text-sm font-medium text-dash-gray-900 dark:text-dark-dash-text font-poppins"
              >Username</label
            >
            <div
              class="flex items-center px-3 py-2 h-10 border-b border-dash-gray-300 dark:border-dark-dash-border rounded-dash-input shadow-dash-input dark:shadow-dark-dash-input bg-white/50 dark:bg-dark-dash-bg-light gap-2"
            >
              <input
                type="text"
                id="dash-text-input-desc"
                class="flex-1 text-base font-normal text-dash-gray-900 dark:text-dark-dash-text font-poppins bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                placeholder="Enter username..."
              />
            </div>
            <p class="text-sm text-dash-gray-600 dark:text-dark-dash-text font-poppins">
              Usernames cannot be changed after your first month, but special
              circumstances may allow for exceptions. Please contact us if you
              need assistance with changing your username.
            </p>
          </div>

          <!-- Required Input with Error (dashboard) -->
          <div class="flex flex-col">
            <label
              for="dash-text-input-desc"
              class="block text-sm font-medium text-dash-gray-900 dark:text-dark-dash-text font-poppins"
              >Username</label
            >
            <div
              class="flex items-center px-3 py-2 h-10 border-b border-dash-gray-300 dark:border-dark-dash-border rounded-dash-input shadow-dash-input dark:shadow-dark-dash-input bg-white/50 dark:bg-dark-dash-bg-light gap-2"
            >
              <input
                type="text"
                id="dash-text-input-desc"
                class="flex-1 text-base font-normal text-dash-gray-900 dark:text-dark-dash-text font-poppins bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                placeholder="Enter username..."
              />
            </div>
            <p class="text-sm text-dash-gray-600 dark:text-dark-dash-text font-poppins">
              Usernames cannot be changed after your first, but special
              circumstances may allow for exceptions. Please contact us if you
              need assistance with changing your username.
            </p>

            <!-- required-error-text -->
            <span
              class="inline-flex items-center text-xs leading-loose text-dash-warning font-poppins dark:text-dark-dash-warning"
              >This field is required.</span
            >

            <!-- errors-container -->
            <div
              class="flex flex-col items-start self-stretch gap-1 px-2 pt-1 pb-2"
            >
              <ul class="flex flex-col gap-1">
                <li
                  class="flex w-full gap-[.4375rem] text-dash-warning dark:text-dark-dash-warning"
                >
                  <svg
                    class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-dash-warning dark:text-dark-dash-warning"
                    data-icon="alert-hexagon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="icon">
                      <path
                        id="Icon"
                        d="M8 5.33323V7.99989M8 10.6666H8.00667M2 5.29419V10.7056C2 10.934 2 11.0482 2.03366 11.1501C2.06343 11.2402 2.11211 11.3229 2.17642 11.3927C2.24912 11.4716 2.34897 11.5271 2.54865 11.638L7.48198 14.3788C7.67105 14.4838 7.76558 14.5363 7.8657 14.5569C7.95431 14.5751 8.04569 14.5751 8.1343 14.5569C8.23441 14.5363 8.32895 14.4838 8.51802 14.3788L13.4514 11.638C13.651 11.5271 13.7509 11.4716 13.8236 11.3927C13.8879 11.3229 13.9366 11.2402 13.9663 11.1501C14 11.0482 14 10.934 14 10.7056V5.29419C14 5.06576 14 4.95155 13.9663 4.84968C13.9366 4.75956 13.8879 4.67684 13.8236 4.60705C13.7509 4.52816 13.651 4.47269 13.4514 4.36176L8.51802 1.62101C8.32895 1.51598 8.23441 1.46346 8.1343 1.44287C8.04569 1.42464 7.95431 1.42464 7.8657 1.44287C7.76558 1.46346 7.67105 1.51598 7.48198 1.62101L2.54865 4.36176C2.34896 4.47269 2.24912 4.52816 2.17642 4.60705C2.11211 4.67684 2.06343 4.75956 2.03366 4.84968C2 4.95155 2 5.06576 2 5.29419Z"
                        stroke="currentColor"
                        stroke-opacity="0.9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <span
                    class="text-sm text-dash-warning dark:text-dark-dash-warning font-poppins"
                    >Must be between 3 and 100 characters long.</span
                  >
                </li>

                <li
                  class="flex w-full gap-[.4375rem] text-dash-warning dark:text-dark-dash-warning"
                >
                  <svg
                    class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-dash-warning dark:text-dark-dash-warning"
                    data-icon="alert-hexagon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="icon">
                      <path
                        id="Icon"
                        d="M8 5.33323V7.99989M8 10.6666H8.00667M2 5.29419V10.7056C2 10.934 2 11.0482 2.03366 11.1501C2.06343 11.2402 2.11211 11.3229 2.17642 11.3927C2.24912 11.4716 2.34897 11.5271 2.54865 11.638L7.48198 14.3788C7.67105 14.4838 7.76558 14.5363 7.8657 14.5569C7.95431 14.5751 8.04569 14.5751 8.1343 14.5569C8.23441 14.5363 8.32895 14.4838 8.51802 14.3788L13.4514 11.638C13.651 11.5271 13.7509 11.4716 13.8236 11.3927C13.8879 11.3229 13.9366 11.2402 13.9663 11.1501C14 11.0482 14 10.934 14 10.7056V5.29419C14 5.06576 14 4.95155 13.9663 4.84968C13.9366 4.75956 13.8879 4.67684 13.8236 4.60705C13.7509 4.52816 13.651 4.47269 13.4514 4.36176L8.51802 1.62101C8.32895 1.51598 8.23441 1.46346 8.1343 1.44287C8.04569 1.42464 7.95431 1.42464 7.8657 1.44287C7.76558 1.46346 7.67105 1.51598 7.48198 1.62101L2.54865 4.36176C2.34896 4.47269 2.24912 4.52816 2.17642 4.60705C2.11211 4.67684 2.06343 4.75956 2.03366 4.84968C2 4.95155 2 5.06576 2 5.29419Z"
                        stroke="currentColor"
                        stroke-opacity="0.9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <span
                    class="text-sm text-dash-warning dark:text-dark-dash-warning font-poppins"
                    >Can contain any letters from a-z, any numbers from
                    0-9.</span
                  >
                </li>

                <li
                  class="flex w-full gap-[.4375rem] text-dash-warning dark:text-dark-dash-warning"
                >
                  <svg
                    class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-dash-warning dark:text-dark-dash-warning"
                    data-icon="alert-hexagon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="icon">
                      <path
                        id="Icon"
                        d="M8 5.33323V7.99989M8 10.6666H8.00667M2 5.29419V10.7056C2 10.934 2 11.0482 2.03366 11.1501C2.06343 11.2402 2.11211 11.3229 2.17642 11.3927C2.24912 11.4716 2.34897 11.5271 2.54865 11.638L7.48198 14.3788C7.67105 14.4838 7.76558 14.5363 7.8657 14.5569C7.95431 14.5751 8.04569 14.5751 8.1343 14.5569C8.23441 14.5363 8.32895 14.4838 8.51802 14.3788L13.4514 11.638C13.651 11.5271 13.7509 11.4716 13.8236 11.3927C13.8879 11.3229 13.9366 11.2402 13.9663 11.1501C14 11.0482 14 10.934 14 10.7056V5.29419C14 5.06576 14 4.95155 13.9663 4.84968C13.9366 4.75956 13.8879 4.67684 13.8236 4.60705C13.7509 4.52816 13.651 4.47269 13.4514 4.36176L8.51802 1.62101C8.32895 1.51598 8.23441 1.46346 8.1343 1.44287C8.04569 1.42464 7.95431 1.42464 7.8657 1.44287C7.76558 1.46346 7.67105 1.51598 7.48198 1.62101L2.54865 4.36176C2.34896 4.47269 2.24912 4.52816 2.17642 4.60705C2.11211 4.67684 2.06343 4.75956 2.03366 4.84968C2 4.95155 2 5.06576 2 5.29419Z"
                        stroke="currentColor"
                        stroke-opacity="0.9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <span
                    class="text-sm text-dash-warning dark:text-dark-dash-warning font-poppins"
                    >Cannot contain space.</span
                  >
                </li>
              </ul>
              <p
                class="flex w-full gap-[.4375rem] text-dash-warningLight dark:text-dark-dash-warningLight"
              >
                <svg
                  class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-dash-warningLight dark:text-dark-dash-warningLight"
                  data-icon="alert-hexagon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon">
                    <path
                      id="Icon"
                      d="M8 5.33323V7.99989M8 10.6666H8.00667M2 5.29419V10.7056C2 10.934 2 11.0482 2.03366 11.1501C2.06343 11.2402 2.11211 11.3229 2.17642 11.3927C2.24912 11.4716 2.34897 11.5271 2.54865 11.638L7.48198 14.3788C7.67105 14.4838 7.76558 14.5363 7.8657 14.5569C7.95431 14.5751 8.04569 14.5751 8.1343 14.5569C8.23441 14.5363 8.32895 14.4838 8.51802 14.3788L13.4514 11.638C13.651 11.5271 13.7509 11.4716 13.8236 11.3927C13.8879 11.3229 13.9366 11.2402 13.9663 11.1501C14 11.0482 14 10.934 14 10.7056V5.29419C14 5.06576 14 4.95155 13.9663 4.84968C13.9366 4.75956 13.8879 4.67684 13.8236 4.60705C13.7509 4.52816 13.651 4.47269 13.4514 4.36176L8.51802 1.62101C8.32895 1.51598 8.23441 1.46346 8.1343 1.44287C8.04569 1.42464 7.95431 1.42464 7.8657 1.44287C7.76558 1.46346 7.67105 1.51598 7.48198 1.62101L2.54865 4.36176C2.34896 4.47269 2.24912 4.52816 2.17642 4.60705C2.11211 4.67684 2.06343 4.75956 2.03366 4.84968C2 4.95155 2 5.06576 2 5.29419Z"
                      stroke="currentColor"
                      stroke-opacity="0.9"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <span
                  class="text-sm text-dash-warningLight font-poppins dark:text-dark-dash-warningLight"
                  >Sorry, username "minimay" is taken</span
                >
              </p>
            </div>
          </div>

          <!-- Required Input with Success (dashboard) -->
          <div class="flex flex-col">
            <label
              for="dash-text-input-desc"
              class="block text-sm font-medium text-dash-gray-900 font-poppins dark:text-dark-dash-text"
              >Username</label
            >
            <div
              class="flex items-center px-3 py-2 h-10 border-b border-dash-gray-300 font-poppins dark:border-dark-dash-border rounded-dash-input shadow-dash-input dark:shadow-dark-dash-input bg-white/50 dark:bg-dark-dash-bg-light gap-2"
            >
              <input
                type="text"
                id="dash-text-input-desc"
                class="flex-1 text-base font-normal text-dash-gray-900 dark:text-dark-dash-text font-poppins bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                placeholder="Enter username..."
              />
            </div>
            <p class="text-sm text-dash-gray-600 dark:text-dark-dash-text font-poppins">
              Usernames cannot be changed after your first month, but special
              circumstances may allow for exceptions. Please contact us if you
              need assistance with changing your username.
            </p>

            <!-- success-container -->
            <div
              class="flex flex-col items-start self-stretch gap-1 px-2 pt-1 pb-2"
            >
              <ul class="flex flex-col gap-1">
                <li
                  class="flex w-full gap-[.4375rem] text-dash-success dark:text-dark-dash-success"
                >
                  <svg
                    class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-dash-successLight dark:text-dark-dash-successLight"
                    data-icon="check-thinner"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="check">
                      <path
                        id="Icon"
                        d="M13.3333 4L6 11.3333L2.66666 8"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <span
                    class="text-sm text-dash-success dark:text-dark-dash-success font-poppins"
                    >Must be between 3 and 100 characters long.</span
                  >
                </li>
                <li
                  class="flex w-full gap-[.4375rem] text-dash-success dark:text-dark-dash-success"
                >
                  <svg
                    class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-dash-successLight dark:text-dark-dash-successLight"
                    data-icon="check-thinner"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="check">
                      <path
                        id="Icon"
                        d="M13.3333 4L6 11.3333L2.66666 8"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <span
                    class="text-sm text-dash-success dark:text-dark-dash-success font-poppins"
                    >Can contain any letters from a-z, any numbers from
                    0-9.</span
                  >
                </li>
                <li
                  class="flex w-full gap-[.4375rem] text-dash-success dark:text-dark-dash-success"
                >
                  <svg
                    class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-dash-successLight dark:text-dark-dash-successLight"
                    data-icon="check-thinner"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="check">
                      <path
                        id="Icon"
                        d="M13.3333 4L6 11.3333L2.66666 8"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <span
                    class="text-sm text-dash-success dark:text-dark-dash-success font-poppins"
                    >Cannot contain space.</span
                  >
                </li>
              </ul>
              <p
                class="flex w-full gap-[.4375rem] text-dash-success dark:text-dark-dash-success"
              >
                <svg
                  class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-dash-success dark:text-dark-dash-success"
                  data-icon="check-circle-success"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    transform="rotate(90 10 10)"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M14 7.5L8.5 13L6 10.5"
                    stroke="black"
                    stroke-width="1.6666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span
                  class="text-sm text-dash-success dark:text-dark-dash-success font-poppins"
                  >Good news! Username "notminimay" is available!</span
                >
              </p>
            </div>
          </div>

          <!-- Input with Left Icon (Search) (dashboard) -->
          <div
            class="flex flex-col gap-[0.375rem] justify-start items-start w-full"
          >
            <div class="flex flex-col gap-[0.375rem]">
              <label
                for="dash-icon-left-input"
                class="m-0 text-sm font-bold text-dash-gray-900 dark:text-dark-dash-text font-poppins"
                >Co-performer (Optional)</label
              >
              <p
                class="text-base opacity-70 text-dash-gray-900 dark:text-dark-dash-text font-poppins"
              >
                If this media includes other performers, please tag them below.
              </p>
            </div>

            <div
              class="flex items-center px-3.5 py-2.5 h-11 border-b border-dash-gray-300 dark:border-dark-dash-border rounded-dash-input rounded-b-none shadow-dash-input dark:shadow-dark-dash-input bg-white/30 dark:bg-dark-dash-bg-light gap-2 w-full"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g id="search-sm">
                  <path
                    id="Icon"
                    d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <input
                type="email"
                id="dash-icon-left-input"
                class="flex-1 text-base font-normal text-dash-gray-900 dark:text-dark-dash-text font-poppins bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                placeholder="Search with User ID..."
              />
            </div>
          </div>

          <!-- Input with Right Icon Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <label
              for="dash-icon-right-input"
              class="text-sm font-medium font-poppins text-dash-gray-900 dark:text-dark-dash-text relative"
              >Beneficiary Account</label
            >
            <div
              class="flex items-center px-3 py-2 h-10 border-b border-dash-gray-300 dark:border-dark-dash-border rounded-dash-input shadow-dash-input dark:shadow-dark-dash-input bg-white/50 dark:bg-dark-dash-bg-light"
            >
              <input
                type="text"
                id="dash-icon-right-input"
                class="flex-1 text-base font-normal font-poppins text-dash-gray-900 dark:text-dark-dash-text bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                placeholder="Account number in local or IBAN format"
              />
              <svg
                class="text-dash-text w-4 h-4 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.56006 9.43549C8.56006 7.45731 10.1773 5.86975 12.1523 5.86975C14.1274 5.86975 15.7446 7.45731 15.7446 9.43549C15.7446 11.0892 14.6144 12.4699 13.0898 12.8784V13.8159C13.0898 14.3337 12.6701 14.7534 12.1523 14.7534C11.6346 14.7534 11.2148 14.3337 11.2148 13.8159V12.0637C11.2148 11.546 11.6346 11.1262 12.1523 11.1262C13.1097 11.1262 13.8696 10.3604 13.8696 9.43549C13.8696 8.51058 13.1097 7.74475 12.1523 7.74475C11.195 7.74475 10.4351 8.51058 10.4351 9.43549C10.4351 9.95326 10.0153 10.373 9.49756 10.373C8.97979 10.373 8.56006 9.95326 8.56006 9.43549Z"
                  fill="#667085"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1615 18.2228C12.8946 18.2228 13.489 17.6285 13.489 16.8954C13.489 16.1623 12.8946 15.568 12.1615 15.568C11.4283 15.568 10.834 16.1623 10.834 16.8954C10.834 17.6285 11.4283 18.2228 12.1615 18.2228Z"
                  fill="#667085"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z"
                  fill="#667085"
                />
              </svg>
            </div>
          </div>

          <!-- Input with "Optional" Text Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <div class="flex justify-between items-center gap-2">
              <label
                for="dash-icon-right-input"
                class="text-sm font-medium text-dash-gray-900 font-poppins dark:text-dark-dash-text relative"
                >Country</label
              >
              <span
                class="text-xs leading-[1.25rem] font-normal font-poppins text-dash-gray-500 dark:text-dark-dash-text"
                >Optional</span
              >
            </div>
            <div
              class="flex items-center px-3 py-2 h-10 border-b border-dash-gray-300 dark:border-dark-dash-border rounded-dash-input shadow-dash-input dark:shadow-dark-dash-input bg-white/50 dark:bg-dark-dash-bg-light"
            >
              <input
                type="text"
                id="dash-icon-right-input"
                class="flex-1 text-base font-normal text-dash-gray-900 font-poppins dark:text-dark-dash-text bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                placeholder=""
                value="test"
              />
            </div>
          </div>

          <!-- Input with Persistent Right Text Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <label
              for="dash-price-input"
              class="block text-sm font-medium text-dash-gray-900 font-poppins dark:text-dark-dash-text"
              >Merch Discount</label
            >
            <div
              class="flex items-center px-3.5 py-2.5 h-11 border-b border-dash-gray-300 dark:border-dark-dash-border rounded-dash-input shadow-dash-input dark:shadow-dark-dash-input bg-white/30 dark:bg-dark-dash-bg-light relative"
            >
              <input
                type="text"
                id="dash-icon-right-input"
                class="flex-1 text-base font-normal text-dash-gray-900 font-poppins dark:text-dark-dash-text bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                value="0"
              />
              <span
                class="text-base font-medium px-3 text-dash-gray-700 font-poppins dark:text-dark-dash-text whitespace-nowrap"
                >% off</span
              >
            </div>
          </div>

          <!-- Input with Both Left and Right Persistent Text Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <label
              for="dash-price-input"
              class="text-lg font-medium text-dash-gray-900 dark:text-dark-dash-text font-poppins relative"
              >Original Price</label
            >
            <div
              class="flex items-center px-3.5 py-2.5 h-11 border-b border-dash-gray-300 dark:border-dark-dash-border rounded-dash-input shadow-dash-input dark:shadow-dark-dash-input bg-white/30 dark:bg-dark-dash-bg-light relative gap-2"
            >
              <span
                class="text-base font-bold text-dash-gray-700 dark:text-dark-dash-text font-poppins whitespace-nowrap"
                >USD$</span
              >
              <input
                type="number"
                id="dash-price-input"
                class="flex-1 text-base font-normal text-dash-gray-900 dark:text-dark-dash-text font-poppins bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                value="0"
              />
              <span
                class="text-base font-medium px-3 text-dash-gray-700 dark:text-dark-dash-text font-poppins whitespace-nowrap"
                >Tokens/mo</span
              >
            </div>
            <p class="text-sm text-dash-gray-600 dark:text-dark-dash-text font-poppins">
              Price must be between USD$ 1 to 1000.
            </p>
          </div>

          <!-- Textarea Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <label
              for="dash-textarea"
              class="block text-sm font-medium text-dash-gray-900 dark:text-dark-dash-text font-poppins"
              >Dashboard Textarea</label
            >
            <div
              class="px-3.5 py-2.5 h-[5.5rem] border-b border-dash-gray-300 dark:border-dark-dash-border rounded-dash-input rounded-b-none shadow-dash-input dark:shadow-dark-dash-input bg-white/50 dark:bg-dark-dash-bg-light"
            >
              <textarea
                id="dash-textarea"
                rows="3"
                class="w-full text-base font-normal text-dash-gray-900 dark:text-dark-dash-text font-poppins bg-transparent border-none focus:outline-none placeholder-dash-gray-500 dark:placeholder-dark-dash-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
                placeholder="Thank you for your tip!"
              ></textarea>
            </div>
            <span class="text-sm text-dash-gray-900 dark:text-dark-dash-text font-poppins"
              >0/200 characters</span
            >
          </div>

          <!-- Checkbox Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <label
              class="block text-sm font-medium text-dash-gray-900 dark:text-dark-dash-text font-poppins"
              >Checkbox Options</label
            >
            <div class="flex flex-col gap-4">
              <div class="flex flex-1 items-center gap-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox-dash-1"
                  class="appearance-none bg-white dark:bg-dark-surface border border-dash-gray-300 font-poppins dark:border-dark-dash-border rounded-input w-4 min-w-4 h-4 mr-2 ml-[0.188rem] checked:accent-dash-success checked:bg-dash-success dark:checked:bg-dark-dash-success checked:border-dash-success dark:checked:border-dark-dash-success checked:relative checked:after:content-[''] checked:after:absolute checked:after:left-[0.3rem] checked:after:top-[0.15rem] checked:after:w-1 checked:after:h-2 checked:after:border checked:after:border-solid checked:after:border-t-0 checked:after:border-l-0 checked:after:border-black dark:checked:after:border-white checked:after:border-w-0 checked:after:border-b-2 checked:after:border-r-2 checked:after:rotate-45 checked:after:box-border cursor-pointer"
                />
                <label
                  for="checkbox-dash-1"
                  class="text-dash-gray-900 dark:text-dark-dash-text leading-5 text-sm whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                >
                  <span
                    class="text-dash-gray-900 dark:text-dark-dash-text leading-5 text-sm font-poppins"
                    >Free Plan</span
                  >
                  <span class="inline-flex items-center gap-2">
                    <div
                      class="text-dash-gray-900 dark:text-dark-dash-text text-right font-medium text-xs font-poppins leading-[1.125rem] inline-flex px-1.5 justify-center items-center gap-2.5 rounded-dash-tag bg-dash-published dark:bg-dark-dash-published"
                    >
                      Published Tier
                    </div>
                  </span>
                </label>
              </div>

              <div class="flex flex-1 items-center gap-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox-dash-2"
                  class="appearance-none bg-white dark:bg-dark-surface font-poppins border border-dash-gray-300 dark:border-dark-dash-border rounded-input w-4 min-w-4 h-4 mr-2 ml-[0.188rem] checked:accent-dash-success checked:bg-dash-success dark:checked:bg-dark-dash-success checked:border-dash-success dark:checked:border-dark-dash-success checked:relative checked:after:content-[''] checked:after:absolute checked:after:left-[0.3rem] checked:after:top-[0.15rem] checked:after:w-1 checked:after:h-2 checked:after:border checked:after:border-solid checked:after:border-t-0 checked:after:border-l-0 checked:after:border-black dark:checked:after:border-white checked:after:border-w-0 checked:after:border-b-2 checked:after:border-r-2 checked:after:rotate-45 checked:after:box-border cursor-pointer"
                />
                <label
                  for="checkbox-dash-2"
                  class="text-dash-gray-900 dark:text-dark-dash-text leading-5 font-poppins text-sm whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                >
                  <span
                    class="text-dash-gray-900 dark:text-dark-dash-text leading-5 text-sm font-poppins"
                    >Free Plan</span
                  >
                  <span class="inline-flex items-center gap-2">
                    <div
                      class="text-dash-gray-900 dark:text-dark-dash-text text-right font-poppins font-medium text-xs leading-[1.125rem] inline-flex px-1.5 justify-center items-center gap-2.5 rounded-dash-tag bg-dash-draft dark:bg-dark-dash-draft"
                    >
                      Draft
                    </div>
                  </span>
                </label>
              </div>

              <div class="flex flex-1 gap-2">
                <div
                  class="flex justify-center items-center w-6 min-w-6 h-6 pt-[0.3rem] font-poppins"
                >
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox-dash-3"
                    class="appearance-none bg-white dark:bg-dark-surface border border-dash-gray-300 font-poppins dark:border-dark-dash-border rounded-input w-4 min-w-4 h-4 mr-2 ml-[0.188rem] checked:accent-dash-success checked:bg-dash-success dark:checked:bg-dark-dash-success checked:border-dash-success dark:checked:border-dark-dash-success checked:relative checked:after:content-[''] checked:after:absolute checked:after:left-[0.3rem] checked:after:top-[0.15rem] checked:after:w-1 checked:after:h-2 checked:after:border checked:after:border-solid checked:after:border-t-0 checked:after:border-l-0 checked:after:border-black dark:checked:after:border-white checked:after:border-w-0 checked:after:border-b-2 checked:after:border-r-2 checked:after:rotate-45 checked:after:box-border cursor-pointer"
                  />
                </div>
                <label
                  for="checkbox-dash-3"
                  class="text-dash-gray-900 dark:text-dark-dash-text leading-5 text-sm cursor-pointer font-poppins"
                  >I have verified, preserved and currently hold all
                  identification cards and documents required under Record
                  Keeping Requirements, 18 U.S.C. 2257 and 28 C.F.R. 75, or
                  applicable laws in any other jurisdictions, countries, and
                  territories ("2257 documentation"), for all individuals
                  appearing in the Content.</label
                >
              </div>
            </div>
          </div>

          <!-- Radio Buttons Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <label
              class="block text-sm font-medium text-dash-gray-700 dark:text-dark-dash-text font-poppins"
              >Subscription Tier</label
            >

            <div class="flex flex-col gap-2">
              <!-- Option A -->
              <div class="flex items-center gap-2 relative">
                <input
                  type="radio"
                  id="dash-radio1"
                  name="dash-radio-group"
                  class="sr-only peer font-poppins"
                />
                <label
                  for="dash-radio1"
                  class="relative pl-8 cursor-pointer font-poppins text-[0.938rem] font-medium leading-6 text-dash-gray-900 dark:text-dark-dash-text peer-checked:before:bg-dash-gray-900 dark:peer-checked:before:bg-dark-dash-text peer-checked:after:content-[''] peer-checked:after:w-[0.375rem] peer-checked:after:h-[0.375rem] peer-checked:after:bg-dash-success dark:peer-checked:after:bg-dark-dash-success peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:left-[0.4375rem] peer-checked:after:top-1/2 peer-checked:after:-translate-y-1/2 before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:border-dash-gray-300 dark:before:border-dark-dash-border before:bg-white dark:before:bg-dark-surface before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:box-border"
                >
                  Choice A
                </label>
              </div>

              <!-- Option B -->
              <div class="flex items-center gap-2 relative">
                <input
                  type="radio"
                  id="dash-radio2"
                  name="dash-radio-group"
                  class="sr-only peer"
                />
                <label
                  for="dash-radio2"
                  class="relative pl-8 cursor-pointer text-[0.938rem] font-poppins font-medium leading-6 text-dash-gray-900 dark:text-dark-dash-text peer-checked:before:bg-dash-gray-900 dark:peer-checked:before:bg-dark-dash-text peer-checked:after:content-[''] peer-checked:after:w-[0.375rem] peer-checked:after:h-[0.375rem] peer-checked:after:bg-dash-success dark:peer-checked:after:bg-dark-dash-success peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:left-[0.4375rem] peer-checked:after:top-1/2 peer-checked:after:-translate-y-1/2 before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:border-dash-gray-300 dark:before:border-dark-dash-border before:bg-white dark:before:bg-dark-surface before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:box-border"
                >
                  Choice B
                </label>
              </div>

              <!-- Option C -->
              <div class="flex items-center gap-2 relative">
                <input
                  type="radio"
                  id="dash-radio3"
                  name="dash-radio-group font-poppins"
                  class="sr-only peer"
                />
                <label
                  for="dash-radio3"
                  class="relative pl-8 cursor-pointer font-poppins text-[0.938rem] font-medium leading-6 text-dash-gray-900 dark:text-dark-dash-text peer-checked:before:bg-dash-gray-900 dark:peer-checked:before:bg-dark-dash-text peer-checked:after:content-[''] peer-checked:after:w-[0.375rem] peer-checked:after:h-[0.375rem] peer-checked:after:bg-dash-success dark:peer-checked:after:bg-dark-dash-success peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:left-[0.4375rem] peer-checked:after:top-1/2 peer-checked:after:-translate-y-1/2 before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:border-dash-gray-300 dark:before:border-dark-dash-border before:bg-white dark:before:bg-dark-surface before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:box-border"
                >
                  Choice C
                </label>
              </div>
            </div>
          </div>

          <!-- Toggle Switch Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <label
              class="block text-sm font-medium text-dash-gray-900 font-poppins dark:text-dark-dash-text"
              >Dark Mode</label
            >
            <div class="flex items-center gap-2">
              <label class="relative inline-block w-8 h-4">
                <input
                  type="checkbox"
                  class="opacity-0 w-0 h-0 peer font-poppins"
                  id="dash-toggle-switch"
                />
                <span
                  class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-dash-gray-400 dark:bg-dash-gray-600 transition-all duration-100 ease-in-out rounded-[0.75rem] peer-checked:bg-dash-gray-900 dark:peer-checked:bg-dark-dash-text"
                ></span>
                <span
                  class="absolute w-3 h-3 top-1/2 left-[0.125rem] bg-white dark:bg-dark-surface transition-all duration-100 ease-in-out rounded-full shadow-dash-toggle dark:shadow-dark-dash-toggle transform -translate-y-1/2 peer-checked:translate-x-[1rem]"
                ></span>
              </label>
              <label
                for="dash-toggle-switch"
                class="text-base font-medium text-dash-gray-900 font-poppins dark:text-dark-dash-text cursor-pointer"
                >Toggle dark mode</label
              >
            </div>
          </div>

          <!-- Warning Dashboard -->
          <div
            data-dashboard-alert="warning"
            class="flex flex-col gap-[0.375rem] flex-1 self-stretch"
          >
            <div
              class="flex items-start w-full pl-[0.188rem] border-b border-dash-gray-200 dark:border-dark-dash-border relative"
            >
              <div
                data-dashboard-border
                class="absolute left-0 top-0 w-[0.188rem] h-full block bg-dash-warning dark:bg-dark-dash-warning"
              ></div>
              <div
                data-dashboard-content-container
                class="w-full flex items-start gap-4 flex-auto min-w-0 min-h-0 py-3 px-2 relative [background:linear-gradient(90deg,rgba(255,255,255,0)_0,rgba(255,255,255,0.9)_100%),linear-gradient(0deg,rgba(255,68,5,0.1)_0,rgba(255,68,5,0.1)_100%),rgba(255,255,255,0.9)] dark:[background:linear-gradient(90deg,rgba(26,32,44,0)_0,rgba(26,32,44,0.9)_100%),linear-gradient(0deg,rgba(201,51,0,0.1)_0,rgba(201,51,0,0.1)_100%),rgba(26,32,44,0.9)]"
              >
                <div
                  data-dashboard-icon-container
                  class="w-10 h-10 min-w-10 rounded-lg flex justify-center items-center bg-dash-bg-warning dark:bg-dark-dash-bg-warning"
                >
                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 17.5C13 17.7652 12.8946 18.0196 12.7071 18.2071C12.5196 18.3946 12.2652 18.5 12 18.5C11.7348 18.5 11.4804 18.3946 11.2929 18.2071C11.1054 18.0196 11 17.7652 11 17.5C11 17.2348 11.1054 16.9804 11.2929 16.7929C11.4804 16.6054 11.7348 16.5 12 16.5C12.2652 16.5 12.5196 16.6054 12.7071 16.7929C12.8946 16.9804 13 17.2348 13 17.5ZM12.75 9.25C12.75 9.05109 12.671 8.86032 12.5303 8.71967C12.3897 8.57902 12.1989 8.5 12 8.5C11.8011 8.5 11.6103 8.57902 11.4697 8.71967C11.329 8.86032 11.25 9.05109 11.25 9.25V13.75C11.25 13.9489 11.329 14.1397 11.4697 14.2803C11.6103 14.421 11.8011 14.5 12 14.5C12.1989 14.5 12.3897 14.421 12.5303 14.2803C12.671 14.1397 12.75 13.9489 12.75 13.75V9.25Z"
                      fill="#FF4405"
                    />
                    <path
                      d="M9.83597 3.24399C10.799 1.57899 13.201 1.57899 14.164 3.24399L23.131 18.748C24.094 20.415 22.891 22.5 20.966 22.5H3.03397C1.10797 22.5 -0.0940274 20.415 0.868973 18.748L9.83597 3.24399ZM12.866 3.99499C12.7778 3.84349 12.6514 3.71777 12.4995 3.63039C12.3475 3.54301 12.1753 3.49702 12 3.49702C11.8247 3.49702 11.6525 3.54301 11.5005 3.63039C11.3485 3.71777 11.2221 3.84349 11.134 3.99499L2.16797 19.499C2.0806 19.6511 2.0347 19.8235 2.03488 19.999C2.03505 20.1744 2.08129 20.3468 2.16897 20.4987C2.25665 20.6507 2.38269 20.777 2.53449 20.8649C2.68629 20.9529 2.85853 20.9995 3.03397 21H20.966C21.1413 20.9994 21.3133 20.9528 21.465 20.8649C21.6167 20.777 21.7426 20.6508 21.8303 20.499C21.9179 20.3472 21.9642 20.175 21.9645 19.9997C21.9648 19.8244 21.9191 19.6521 21.832 19.5L12.866 3.99499Z"
                      fill="#FF4405"
                    />
                  </svg>
                </div>
                <p
                  data-dashboard-content-text
                  class="flex-1 text-sm text-dash-gray-900 dark:text-dark-dash-text font-poppins leading-5 [text-shadow:0_0_10px_rgba(0,0,0,0.10)] dark:[text-shadow:0_0_10px_rgba(255,255,255,0.10)]"
                >
                  WARNING: Uploading (or attempting to upload) content that
                  violates any laws or criminal laws (ex: child pornography or
                  non-consensual content), our Child Sexual Abuse Material
                  Policy or Anti-Sexual Exploitation Policies, will result in
                  related accounts to be immediately terminated and reported to
                  law enforcement authorities.
                </p>
              </div>
            </div>
          </div>

          <!-- tab-menu dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <ul
              class="w-max flex flex-row items-center overflow-hidden overflow-x-auto whitespace-nowrap p-1 border-none rounded-dash-tab shadow-dash-tab dark:shadow-dark-dash-tab bg-dash-tab-bg dark:bg-dark-dash-tab-bg"
            >
              <!-- Active tab -->
              <li
                class="flex justify-center items-center gap-2 whitespace-nowrap rounded-dash-tab bg-dash-tab-active dark:bg-dark-dash-tab-active"
              >
                <a
                  class="w-full inline-flex items-center gap-2 py-2 px-4 no-underline group"
                  href=""
                >
                  <span
                    class="text-sm font-medium leading-5 text-white dark:text-black font-poppins dark:group-hover:text-black"
                    >Subscriptions</span
                  >
                  <small
                    class="h-6 text-[0.625rem] font-medium leading-none text-dash-tab-inactive font-poppins dark:text-dark-dash-tab-inactive tracking-[0.016rem]"
                    >1k</small
                  >
                </a>
              </li>

              <li
                class="flex justify-center items-center gap-2 whitespace-nowrap rounded-dash-tab hover:bg-dash-tab-active dark:hover:bg-dark-dash-tab-active transition-colors"
              >
                <a
                  class="w-full inline-flex items-center gap-2 py-2 px-4 no-underline group"
                  href=""
                >
                  <span
                    class="text-sm font-medium leading-5 text-dash-gray-900 dark:text-dark-dash-text font-poppins group-hover:text-white dark:group-hover:text-black"
                    >Pay to View</span
                  >
                  <small
                    class="h-6 text-[0.625rem] font-medium leading-none text-dash-tab-inactive font-poppins dark:text-dark-dash-tab-inactive tracking-[0.016rem]"
                    >99+</small
                  >
                </a>
              </li>

              <li
                class="flex justify-center items-center gap-2 whitespace-nowrap rounded-dash-tab hover:bg-dash-tab-active dark:hover:bg-dark-dash-tab-active transition-colors"
              >
                <a
                  class="w-full inline-flex items-center gap-2 py-2 px-4 no-underline group"
                  href=""
                >
                  <span
                    class="text-sm font-medium leading-5 text-dash-gray-900 dark:text-dark-dash-text font-poppins group-hover:text-white dark:group-hover:text-black"
                    >Merch</span
                  >
                </a>
              </li>

              <li
                class="flex justify-center items-center gap-2 whitespace-nowrap rounded-dash-tab hover:bg-dash-tab-active dark:hover:bg-dark-dash-tab-active transition-colors"
              >
                <a
                  class="w-full inline-flex items-center gap-2 py-2 px-4 no-underline group"
                  href=""
                >
                  <span
                    class="text-sm font-medium leading-5 text-dash-gray-900 dark:text-dark-dash-text font-poppins group-hover:text-white dark:group-hover:text-black"
                    >Custom Request</span
                  >
                </a>
              </li>

              <li
                class="flex justify-center items-center gap-2 whitespace-nowrap rounded-dash-tab hover:bg-dash-tab-active dark:hover:bg-dark-dash-tab-active transition-colors"
              >
                <a
                  class="w-full inline-flex items-center gap-2 py-2 px-4 no-underline group"
                  href=""
                >
                  <span
                    class="text-sm font-medium leading-5 text-dash-gray-900 dark:text-dark-dash-text font-poppins group-hover:text-white dark:group-hover:text-black"
                    >Wishtender</span
                  >
                  <small
                    class="h-6 text-[0.625rem] font-medium leading-none text-dash-tab-inactive font-poppins dark:text-dark-dash-tab-inactive tracking-[0.016rem]"
                    >600+</small
                  >
                </a>
              </li>
            </ul>
          </div>

          <!-- Select Dropdown with Icon Dashboard -->
          <div class="flex flex-col gap-[0.375rem] flex-1 self-stretch">
            <label
              for="dash-country-select"
              class="block text-sm font-medium text-dash-text font-poppins"
              >Dashboard dropdown</label
            >
            <div class="relative w-full">
              <div class="dash-select cursor-pointer">
                <div
                  class="dash-select__trigger flex items-center justify-between w-full px-3 py-2 border-b border-dash-border rounded-dash-input shadow-dash-input bg-white/50"
                >
                  <span class="text-sm font-normal text-[#0c111d] font-poppins"
                    >English</span
                  >
                  <svg
                    class="select-arrow w-4 h-4 transition-transform duration-300 ease-in-out transform"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#98A2B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div
                  class="dash-options-container absolute w-full opacity-0 invisible pointer-events-none transition-all duration-300 z-10 top-[calc(100%+0.5rem)] bg-white shadow-none border-none"
                >
                  <div
                    class="dash-options rounded-[2px] bg-[#ececec] backdrop-blur-[25px] max-h-[200px] overflow-y-auto"
                  >
                    <div class="dash-option selected bg-white/50">
                      <span
                        class="flex gap-[0.625rem] py-3 px-[0.75rem] text-sm font-poppins font-medium leading-5 text-[#0c111d] capitalize border-b border-[#eaecf0] bg-white"
                        >English</span
                      >
                    </div>
                    <div class="dash-option bg-white/50 hover:bg-white/70">
                      <span
                        class="flex gap-[0.625rem] py-3 px-[0.75rem] text-sm font-normal font-poppins leading-5 text-[#0c111d] capitalize"
                        >Chinese</span
                      >
                    </div>
                    <div class="dash-option bg-white/50 hover:bg-white/70">
                      <span
                        class="flex gap-[0.625rem] py-3 px-[0.75rem] text-sm font-poppins font-normal leading-5 text-[#0c111d] capitalize"
                        >Japanese</span
                      >
                    </div>
                    <div class="dash-option bg-white/50 hover:bg-white/70">
                      <span
                        class="flex gap-[0.625rem] py-3 px-[0.75rem] text-sm font-normal font-poppins leading-5 text-[#0c111d] capitalize"
                        >Korean</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <select
                class="dash-real-select hidden"
                name="dash-country-select font-poppins"
                required
              >
                <option value="">Please select a pet</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="hamster">Hamster</option>
              </select>
            </div>
          </div>

          <!-- heading-dashboards -->
          <div class="flex flex-col gap-6">
            <h1
              class="text-4xl font-semibold leading-[2.75rem] font-poppins tracking-[-0.045rem] text-dash-gray-900 dark:text-dark-dash-text m-0"
            >
              Welcome back, Minimay! (Page Heading)
            </h1>

            <div class="section-heading__container flex items-center gap-2">
              <div class="w-6 h-6 flex justify-center items-center">
                <img
                  src="https://i.ibb.co.com/1G8tw4x3/svgviewer-png-output.webp"
                  alt="dashboard_bar_chart"
                />
              </div>

              <h2
                class="text-xl font-medium leading-[1.875rem] font-poppins text-dash-gray-900 dark:text-dark-dash-text m-0"
              >
                Overview/Insight (Section Heading)
              </h2>
            </div>

            <section class="flex flex-col gap-2">
              <h2
                class="text-xl leading-[1.875rem] font-semibold font-poppins text-dash-gray-900 dark:text-dark-dash-text"
              >
                Beneficiary Information (title-subtitle)
              </h2>
              <p class="text-sm text-dash-gray-700 dark:text-dark-dash-text font-poppins">
                Beneficiary is the account holder who will receive the payment.
              </p>
            </section>

            <h3
              class="text-base font-medium leading-6 text-dash-gray-700 dark:text-dark-dash-text m-0 font-poppins"
            >
              Subscribers (Content Heading)
            </h3>
          </div>

          <!-- Toast Dashboard -->
          <div class="flex flex-col gap-6 flex-1 self-stretch">
            <!-- Notice Toast -->
            <div data-dashboard-toast="notice" class="w-full">
              <div
                class="w-full border-b border-dash-gray-200 dark:border-dark-dash-border flex relative"
              >
                <div
                  class="toast-border w-[0.188rem] absolute h-full block left-0 top-0 bg-dash-toast-notice dark:bg-dark-dash-toast-notice"
                ></div>
                <div
                  class="dashboard-toast-inner-wrapper flex gap-4 py-3 px-2 flex-1 min-w-0 min-h-0 [background:linear-gradient(90deg,rgba(255,255,255,0)_0,rgba(255,255,255,0.9)_100%),linear-gradient(0deg,rgba(34,204,238,0.15)_0,rgba(34,204,238,0.15)_100%),rgba(255,255,255,0.9)] dark:[background:linear-gradient(90deg,rgba(26,32,44,0)_0,rgba(26,32,44,0.9)_100%),linear-gradient(0deg,rgba(34,204,238,0.15)_0,rgba(34,204,238,0.15)_100%),rgba(26,32,44,0.9)]"
                >
                  <div
                    class="dashboard-toast-inner-container relative w-full flex items-start gap-5"
                  >
                    <div
                      class="dashboard-toast-close-icon absolute top-0 right-0 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="w-6 h-6"
                      >
                        <path
                          d="M17 7L7 17M7 7L17 17"
                          stroke="#D0D5DD"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <div class="relative">
                      <div
                        class="toast-icon-container w-10 h-10 flex justify-center items-center rounded-lg bg-dash-bg-notice dark:bg-dark-dash-bg-notice"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          class="w-7 h-7"
                        >
                          <g id="icon">
                            <path
                              id="Icon"
                              d="M25.6663 24.5V22.1667C25.6663 19.9922 24.1791 18.1651 22.1663 17.647M18.083 3.83922C19.7932 4.5315 20.9997 6.2082 20.9997 8.16667C20.9997 10.1251 19.7932 11.8018 18.083 12.4941M19.833 24.5C19.833 22.3256 19.833 21.2384 19.4778 20.3808C19.0041 19.2373 18.0957 18.3289 16.9522 17.8552C16.0946 17.5 15.0074 17.5 12.833 17.5H9.33301C7.15861 17.5 6.07142 17.5 5.21382 17.8552C4.07035 18.3289 3.16188 19.2373 2.68824 20.3808C2.33301 21.2384 2.33301 22.3256 2.33301 24.5M15.7497 8.16667C15.7497 10.744 13.6603 12.8333 11.083 12.8333C8.50568 12.8333 6.41634 10.744 6.41634 8.16667C6.41634 5.58934 8.50568 3.5 11.083 3.5C13.6603 3.5 15.7497 5.58934 15.7497 8.16667Z"
                              stroke="#22CCEE"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>

                    <div
                      class="flex flex-col flex-1 min-w-0 min-h-0 pr-[1.125rem] md:pr-0"
                    >
                      <div class="flex flex-col gap-2 pb-2">
                        <div
                          class="flex justify-between items-center pt-1 pr-1"
                        >
                          <span
                            class="toast-heading text-sm font-semibold text-dash-toast-notice font-poppins dark:text-dark-dash-toast-notice"
                            >You have 3 active subscriber in this tier</span
                          >
                        </div>
                      </div>
                      <div class="flex justify-between items-center gap-4">
                        <span
                          class="text-dash-gray-900 dark:text-dark-dash-text text-sm flex-1 font-poppins [text-shadow:0_0_10px_rgba(0,0,0,0.10)] dark:[text-shadow:0_0_10px_rgba(255,255,255,0.10)]"
                          >Changing detail of this plan might affect current
                          subscriber's subscription fee and benefits.</span
                        >
                        <a href="#" class="flex gap-0.5 items-center">
                          <span
                            class="toast-link text-xs font-medium whitespace-nowrap text-dash-toast-notice font-poppins dark:text-dark-dash-toast-notice-text"
                            >Learn more</span
                          >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Alert Toast -->
            <div data-dashboard-toast="alert" class="w-full">
              <div
                class="w-full border-b border-dash-gray-200 dark:border-dark-dash-border flex relative"
              >
                <div
                  class="toast-border w-[0.188rem] absolute h-full block left-0 top-0 bg-dash-toast-alert dark:bg-dark-dash-toast-alert"
                ></div>
                <div
                  class="dashboard-toast-inner-wrapper flex gap-4 py-3 px-2 flex-1 min-w-0 min-h-0 [background:linear-gradient(90deg,rgba(255,255,255,0)_0,rgba(255,255,255,0.9)_100%),linear-gradient(0deg,rgba(253,176,34,0.15)_0,rgba(253,176,34,0.15)_100%),rgba(255,255,255,0.9)] dark:[background:linear-gradient(90deg,rgba(26,32,44,0)_0,rgba(26,32,44,0.9)_100%),linear-gradient(0deg,rgba(253,176,34,0.15)_0,rgba(253,176,34,0.15)_100%),rgba(26,32,44,0.9)]"
                >
                  <div
                    class="dashboard-toast-inner-container relative w-full flex items-start gap-5"
                  >
                    <div
                      class="flex flex-col flex-1 min-w-0 min-h-0 pr-[1.125rem] md:pr-0"
                    >
                      <div class="flex flex-col gap-2 pb-2">
                        <div
                          class="flex justify-between items-center pt-1 pr-1"
                        >
                          <span
                            class="toast-heading text-sm font-semibold font-poppins text-dash-toast-alert dark:text-dark-dash-toast-alert"
                            >You have 3 active subscriber in this tier</span
                          >
                        </div>
                      </div>
                      <div class="flex justify-between items-center gap-4">
                        <span
                          class="text-dash-gray-900 dark:text-dark-dash-text font-poppins text-sm flex-1 [text-shadow:0_0_10px_rgba(0,0,0,0.10)] dark:[text-shadow:0_0_10px_rgba(255,255,255,0.10)]"
                          >Changing detail of this plan might affect current
                          subscriber's subscription fee and benefits.</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tooltip Dashboard (right) -->
          <div class="flex items-center gap-2">
            <span
              class="text-lg font-medium leading-7 text-dash-gray-900 dark:text-dark-dash-text font-poppins"
              >Free Tokens (Tooltip) right</span
            >

            <div class="flex items-center justify-center">
              <div
                data-tooltip
                data-tooltip-pos="right"
                class="relative inline-flex overflow-hidden hover:overflow-visible hover:cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-4 h-4 pointer-events-none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.56006 9.43549C8.56006 7.45731 10.1773 5.86975 12.1523 5.86975C14.1274 5.86975 15.7446 7.45731 15.7446 9.43549C15.7446 11.0892 14.6144 12.4699 13.0898 12.8784V13.8159C13.0898 14.3337 12.6701 14.7534 12.1523 14.7534C11.6346 14.7534 11.2148 14.3337 11.2148 13.8159V12.0637C11.2148 11.546 11.6346 11.1262 12.1523 11.1262C13.1097 11.1262 13.8696 10.3604 13.8696 9.43549C13.8696 8.51058 13.1097 7.74475 12.1523 7.74475C11.195 7.74475 10.4351 8.51058 10.4351 9.43549C10.4351 9.95326 10.0153 10.373 9.49756 10.373C8.97979 10.373 8.56006 9.95326 8.56006 9.43549Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1615 18.2228C12.8946 18.2228 13.489 17.6285 13.489 16.8954C13.489 16.1623 12.8946 15.568 12.1615 15.568C11.4283 15.568 10.834 16.1623 10.834 16.8954C10.834 17.6285 11.4283 18.2228 12.1615 18.2228Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z"
                    fill="#667085"
                  />
                </svg>

                <!-- Tooltip -->
                <div
                  class="absolute left-full top-1/2 -translate-y-1/2 ml-2.5 w-[17.5rem] max-w-[17.5rem] p-2 px-3 text-xs font-medium leading-[1.125rem] bg-[#2C313D] dark:bg-dark-dash-tooltip-bg text-white rounded-lg shadow-dash-tooltip dark:shadow-dark-dash-tooltip backdrop-blur-[25px] opacity-0 invisible pointer-events-none transition-all duration-150 ease-in-out z-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:border-5 before:border-solid before:border-transparent before:border-r-dash-tooltip-bg dark:before:border-r-dark-dash-tooltip-bg"
                >
                  <ul class="list-none relative">
                    <li
                      class="font-poppins relative pl-4 before:content-[''] before:absolute before:left-1 before:top-[0.438rem] before:w-1 before:h-1 before:rounded-full before:bg-white"
                    >
                      Set percentage discount for all the merch in your shop
                      (e.g. type '10' in the input field if you want 10% off)
                    </li>
                    <li
                      class="relative pl-4 font-poppins before:content-[''] before:absolute before:left-1 before:top-[0.438rem] before:w-1 before:h-1 before:rounded-full before:bg-white"
                    >
                      Leave blank to disable any benefits below.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Tooltip Dashboard (left) -->
          <div class="flex items-center gap-2">
            <span
              class="text-lg font-medium leading-7 font-poppins text-dash-gray-900 dark:text-dark-dash-text"
              >Free Tokens (Tooltip) left</span
            >

            <div class="flex items-center justify-center">
              <div
                data-tooltip
                data-tooltip-pos="left"
                class="relative inline-flex overflow-hidden hover:overflow-visible hover:cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-4 h-4 pointer-events-none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.56006 9.43549C8.56006 7.45731 10.1773 5.86975 12.1523 5.86975C14.1274 5.86975 15.7446 7.45731 15.7446 9.43549C15.7446 11.0892 14.6144 12.4699 13.0898 12.8784V13.8159C13.0898 14.3337 12.6701 14.7534 12.1523 14.7534C11.6346 14.7534 11.2148 14.3337 11.2148 13.8159V12.0637C11.2148 11.546 11.6346 11.1262 12.1523 11.1262C13.1097 11.1262 13.8696 10.3604 13.8696 9.43549C13.8696 8.51058 13.1097 7.74475 12.1523 7.74475C11.195 7.74475 10.4351 8.51058 10.4351 9.43549C10.4351 9.95326 10.0153 10.373 9.49756 10.373C8.97979 10.373 8.56006 9.95326 8.56006 9.43549Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1615 18.2228C12.8946 18.2228 13.489 17.6285 13.489 16.8954C13.489 16.1623 12.8946 15.568 12.1615 15.568C11.4283 15.568 10.834 16.1623 10.834 16.8954C10.834 17.6285 11.4283 18.2228 12.1615 18.2228Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z"
                    fill="#667085"
                  />
                </svg>

                <!-- Tooltip -->
                <div
                  class="absolute right-full top-1/2 -translate-y-1/2 mr-2.5 w-[17.5rem] max-w-[17.5rem] p-2 px-3 text-xs font-medium leading-[1.125rem] bg-[#2C313D] dark:bg-dark-dash-tooltip-bg text-white rounded-lg shadow-dash-tooltip dark:shadow-dark-dash-tooltip backdrop-blur-[25px] opacity-0 invisible pointer-events-none transition-all duration-150 ease-in-out z-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto before:content-[''] before:absolute before:left-full before:top-1/2 before:-translate-y-1/2 before:border-5 before:border-solid before:border-transparent before:border-l-dash-tooltip-bg dark:before:border-l-dark-dash-tooltip-bg"
                >
                  <ul class="list-none relative">
                    <li
                      class="relative pl-4 font-poppins before:content-[''] before:absolute before:left-1 before:top-[0.438rem] before:w-1 before:h-1 before:rounded-full before:bg-white"
                    >
                      Set percentage discount for all the merch in your shop
                      (e.g. type '10' in the input field if you want 10% off)
                    </li>
                    <li
                      class="font-poppins relative pl-4 before:content-[''] before:absolute before:left-1 before:top-[0.438rem] before:w-1 before:h-1 before:rounded-full before:bg-white"
                    >
                      Leave blank to disable any benefits below.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Tooltip Dashboard (top) -->
          <div class="flex items-center gap-2">
            <span
              class="font-poppins text-lg font-medium leading-7 text-dash-gray-900 dark:text-dark-dash-text"
              >Free Tokens (Tooltip) top</span
            >

            <div class="flex items-center justify-center">
              <div
                data-tooltip
                data-tooltip-pos="top"
                class="relative inline-flex overflow-hidden hover:overflow-visible hover:cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-4 h-4 pointer-events-none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.56006 9.43549C8.56006 7.45731 10.1773 5.86975 12.1523 5.86975C14.1274 5.86975 15.7446 7.45731 15.7446 9.43549C15.7446 11.0892 14.6144 12.4699 13.0898 12.8784V13.8159C13.0898 14.3337 12.6701 14.7534 12.1523 14.7534C11.6346 14.7534 11.2148 14.3337 11.2148 13.8159V12.0637C11.2148 11.546 11.6346 11.1262 12.1523 11.1262C13.1097 11.1262 13.8696 10.3604 13.8696 9.43549C13.8696 8.51058 13.1097 7.74475 12.1523 7.74475C11.195 7.74475 10.4351 8.51058 10.4351 9.43549C10.4351 9.95326 10.0153 10.373 9.49756 10.373C8.97979 10.373 8.56006 9.95326 8.56006 9.43549Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1615 18.2228C12.8946 18.2228 13.489 17.6285 13.489 16.8954C13.489 16.1623 12.8946 15.568 12.1615 15.568C11.4283 15.568 10.834 16.1623 10.834 16.8954C10.834 17.6285 11.4283 18.2228 12.1615 18.2228Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z"
                    fill="#667085"
                  />
                </svg>

                <!-- Tooltip -->
                <div
                  class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-[17.5rem] max-w-[17.5rem] p-2 px-3 text-xs font-medium leading-[1.125rem] bg-[#2C313D] dark:bg-dark-dash-tooltip-bg text-white rounded-lg shadow-dash-tooltip dark:shadow-dark-dash-tooltip backdrop-blur-[25px] opacity-0 invisible pointer-events-none transition-all duration-150 ease-in-out z-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-5 before:border-solid before:border-transparent before:border-t-dash-tooltip-bg dark:before:border-t-dark-dash-tooltip-bg"
                >
                  <ul class="list-none relative">
                    <li
                      class="font-poppins relative pl-4 before:content-[''] before:absolute before:left-1 before:top-[0.438rem] before:w-1 before:h-1 before:rounded-full before:bg-white"
                    >
                      Set percentage discount for all the merch in your shop
                      (e.g. type '10' in the input field if you want 10% off)
                    </li>
                    <li
                      class="font-poppins relative pl-4 before:content-[''] before:absolute before:left-1 before:top-[0.438rem] before:w-1 before:h-1 before:rounded-full before:bg-white"
                    >
                      Leave blank to disable any benefits below.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Tooltip Dashboard (bottom) -->
          <div class="flex items-center gap-2">
            <span
              class="text-lg font-poppins font-medium leading-7 text-dash-gray-900 dark:text-dark-dash-text"
              >Free Tokens (Tooltip) bottom</span
            >

            <div class="flex items-center justify-center">
              <div
                data-tooltip
                data-tooltip-pos="bottom"
                class="relative inline-flex overflow-hidden hover:overflow-visible hover:cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-4 h-4 pointer-events-none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.56006 9.43549C8.56006 7.45731 10.1773 5.86975 12.1523 5.86975C14.1274 5.86975 15.7446 7.45731 15.7446 9.43549C15.7446 11.0892 14.6144 12.4699 13.0898 12.8784V13.8159C13.0898 14.3337 12.6701 14.7534 12.1523 14.7534C11.6346 14.7534 11.2148 14.3337 11.2148 13.8159V12.0637C11.2148 11.546 11.6346 11.1262 12.1523 11.1262C13.1097 11.1262 13.8696 10.3604 13.8696 9.43549C13.8696 8.51058 13.1097 7.74475 12.1523 7.74475C11.195 7.74475 10.4351 8.51058 10.4351 9.43549C10.4351 9.95326 10.0153 10.373 9.49756 10.373C8.97979 10.373 8.56006 9.95326 8.56006 9.43549Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1615 18.2228C12.8946 18.2228 13.489 17.6285 13.489 16.8954C13.489 16.1623 12.8946 15.568 12.1615 15.568C11.4283 15.568 10.834 16.1623 10.834 16.8954C10.834 17.6285 11.4283 18.2228 12.1615 18.2228Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z"
                    fill="#667085"
                  />
                </svg>

                <!-- Tooltip -->
                <div
                  class="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[17.5rem] max-w-[17.5rem] p-2 px-3 text-xs font-medium leading-[1.125rem] bg-[#2C313D] dark:bg-dark-dash-tooltip-bg text-white rounded-lg shadow-dash-tooltip dark:shadow-dark-dash-tooltip backdrop-blur-[25px] opacity-0 invisible pointer-events-none transition-all duration-150 ease-in-out z-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-5 before:border-solid before:border-transparent before:border-b-dash-tooltip-bg dark:before:border-b-dark-dash-tooltip-bg"
                >
                  <ul class="list-none relative">
                    <li
                      class="relative pl-4 font-poppins before:content-[''] before:absolute before:left-1 before:top-[0.438rem] before:w-1 before:h-1 before:rounded-full before:bg-white"
                    >
                      Set percentage discount for all the merch in your shop
                      (e.g. type '10' in the input field if you want 10% off)
                    </li>
                    <li
                      class="relative font-poppins pl-4 before:content-[''] before:absolute before:left-1 before:top-[0.438rem] before:w-1 before:h-1 before:rounded-full before:bg-white"
                    >
                      Leave blank to disable any benefits below.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Tooltip without bullet points -->
          <div class="flex items-center gap-1">
            <span class="text-xs text-dash-gray-900 font-poppins dark:text-dark-dash-text"
              >Next payout date</span
            >

            <div class="flex items-center justify-center">
              <div
                data-token-tooltip
                data-tooltip-pos="bottom"
                class="relative inline-flex overflow-hidden hover:overflow-visible hover:cursor-pointer group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-4 h-4 pointer-events-none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.56006 9.43549C8.56006 7.45731 10.1773 5.86975 12.1523 5.86975C14.1274 5.86975 15.7446 7.45731 15.7446 9.43549C15.7446 11.0892 14.6144 12.4699 13.0898 12.8784V13.8159C13.0898 14.3337 12.6701 14.7534 12.1523 14.7534C11.6346 14.7534 11.2148 14.3337 11.2148 13.8159V12.0637C11.2148 11.546 11.6346 11.1262 12.1523 11.1262C13.1097 11.1262 13.8696 10.3604 13.8696 9.43549C13.8696 8.51058 13.1097 7.74475 12.1523 7.74475C11.195 7.74475 10.4351 8.51058 10.4351 9.43549C10.4351 9.95326 10.0153 10.373 9.49756 10.373C8.97979 10.373 8.56006 9.95326 8.56006 9.43549Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1615 18.2228C12.8946 18.2228 13.489 17.6285 13.489 16.8954C13.489 16.1623 12.8946 15.568 12.1615 15.568C11.4283 15.568 10.834 16.1623 10.834 16.8954C10.834 17.6285 11.4283 18.2228 12.1615 18.2228Z"
                    fill="#667085"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z"
                    fill="#667085"
                  />
                </svg>

                <!-- Tooltip -->
                <div
                  class="font-poppins absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[19rem] max-w-[19rem] p-2 px-3 text-xs font-medium leading-normal bg-[#2C313D] dark:bg-dark-dash-tooltip-bg text-white rounded-lg shadow-dash-tooltip dark:shadow-dark-dash-tooltip backdrop-blur-[25px] opacity-0 invisible pointer-events-none transition-all duration-150 ease-in-out z-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-5 before:border-solid before:border-transparent before:border-b-dash-tooltip-bg dark:before:border-b-dark-dash-tooltip-bg"
                >
                  Payout date happens monthly on the 28th. Earnings made in the
                  previous month will be transferred to your available balance
                  for withdrawal.
                </div>
              </div>
            </div>

            <span class="text-xs text-dash-gray-900 dark:text-dark-dash-text"
              >:</span
            >
            <span
              class="text-xs font-poppins leading-normal text-dash-gray-900 dark:text-dark-dash-text"
              >28:07:25</span
            >
          </div>

          <!-- Buttons Dashboard -->
          <div class="flex flex-col gap-6 flex-1 self-stretch">
            <!-- link-your-x-account button -->
            <button
              data-green-skew-right-bottom-button
              class="group w-max pl-2 bg-[#07f468] gap-2.5 pr-2.5 h-10 relative flex justify-center items-center appearance-button transition-opacity duration-100 ease-in-out normal-case overflow-visible outline-none border-none hover:bg-black hover:after:bg-black before:content-[''] before:block before:w-full before:h-full before:absolute before:top-0 before:right-0 before:z-[1] before:shadow-[4px_4px_0_0_#000] before:transition-all before:ease-in-out before:duration-0 after:content-[''] after:block after:w-4 after:h-full after:absolute after:top-0 after:-right-[0.43rem] after:z-[1] after:shadow-[4px_4px_0_0_#000] after:skew-x-[20deg] after:translate-x-0 after:transition-all after:ease-in-out after:duration-0 after:bg-[#07f468]"
            >
              <div class="flex items-center justify-center gap-2.5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-6 h-6"
                >
                  <g id="social media icon/X">
                    <g id="Vector">
                      <mask id="path-1-inside-1_8797_16211" fill="white">
                        <path
                          d="M13.7142 10.6226L20.4163 3H18.8287L13.0068 9.61729L8.36042 3H3L10.0278 13.0075L3 21H4.58761L10.7316 14.0104L15.6396 21H21.0001M5.16061 4.17142H7.59962L18.8275 19.8861H16.3878"
                        />
                      </mask>
                      <path
                        d="M13.7142 10.6226L20.4163 3H18.8287L13.0068 9.61729L8.36042 3H3L10.0278 13.0075L3 21H4.58761L10.7316 14.0104L15.6396 21H21.0001M5.16061 4.17142H7.59962L18.8275 19.8861H16.3878"
                        fill="black"
                        class="group-hover:fill-dash-success"
                      />
                      <path
                        d="M20.4163 3L21.1673 3.6603L22.627 2H20.4163V3ZM18.8287 3V2H18.3765L18.0779 2.33946L18.8287 3ZM13.0068 9.61729L12.1884 10.1919L12.9185 11.2316L13.7576 10.2778L13.0068 9.61729ZM8.36042 3L9.17882 2.42535L8.88015 2H8.36042V3ZM3 3V2H1.07579L2.18164 3.5747L3 3ZM10.0278 13.0075L10.7788 13.6678L11.2985 13.0768L10.8462 12.4328L10.0278 13.0075ZM3 21L2.24902 20.3397L0.7891 22H3V21ZM4.58761 21V22H5.04L5.33868 21.6602L4.58761 21ZM10.7316 14.0104L11.55 13.4358L10.8196 12.3956L9.98055 13.3502L10.7316 14.0104ZM15.6396 21L14.8213 21.5747L15.1199 22H15.6396V21ZM7.59962 4.17142L8.41327 3.59008L8.11415 3.17142H7.59962V4.17142ZM18.8275 19.8861V20.8861H20.7709L19.6411 19.3048L18.8275 19.8861ZM14.4652 11.2829L21.1673 3.6603L19.6653 2.3397L12.9632 9.96235L14.4652 11.2829ZM20.4163 2H18.8287V4H20.4163V2ZM18.0779 2.33946L12.256 8.95675L13.7576 10.2778L19.5794 3.66054L18.0779 2.33946ZM13.8252 9.04264L9.17882 2.42535L7.54202 3.57465L12.1884 10.1919L13.8252 9.04264ZM8.36042 2H3V4H8.36042V2ZM2.18164 3.5747L9.20946 13.5822L10.8462 12.4328L3.81836 2.4253L2.18164 3.5747ZM9.27685 12.3471L2.24902 20.3397L3.75098 21.6603L10.7788 13.6678L9.27685 12.3471ZM3 22H4.58761V20H3V22ZM5.33868 21.6602L11.4827 14.6706L9.98055 13.3502L3.83653 20.3398L5.33868 21.6602ZM9.91324 14.5851L14.8213 21.5747L16.458 20.4253L11.55 13.4358L9.91324 14.5851ZM15.6396 22H21.0001V20H15.6396V22ZM5.16061 5.17142H7.59962V3.17142H5.16061V5.17142ZM6.78596 4.75277L18.0138 20.4675L19.6411 19.3048L8.41327 3.59008L6.78596 4.75277ZM18.8275 18.8861H16.3878V20.8861H18.8275V18.8861Z"
                        fill="black"
                        mask="url(#path-1-inside-1_8797_16211)"
                        class="group-hover:fill-dash-success"
                      />
                    </g>
                  </g>
                </svg>
                <span
                  class="py-1 break-words font-poppins leading-7 text-lg text-black font-medium flex group-hover:text-dash-success"
                  >Link your X account</span
                >
              </div>
            </button>

            <!-- save & cancel button -->
            <div class="flex items-center gap-2">
              <button
                data-dashbaord-cancel-button
                class="py-1 px-2 min-w-[6.25rem] text-lg font-medium flex justify-center items-center hover:bg-white"
              >
                <span
                  class="text-[#0c111d] break-words leading-7 text-lg font-medium font-poppins uppercase"
                  >Cancel</span
                >
              </button>
              <button
                data-dashbaord-save-button
                class="group py-1 px-2 gap-2.5 min-w-[5.3125rem] bg-black flex justify-center items-center hover:bg-dash-success"
              >
                <span
                  class="text-[#07f468] break-words leading-7 text-lg font-medium uppercase font-poppins group-hover:text-black"
                  >Save</span
                >
              </button>
            </div>

            <!-- view-profile & go-live button -->
            <div class="flex items-center self-stretch">
              <!-- Left Section -->
              <div class="flex-1 self-stretch flex items-center">
                <!-- Dotted Button -->
                <div
                  data-profile-dotted-button
                  class="bg-black shadow-[4px_4px_0_0_#fb5ba2] h-10 w-10 relative flex justify-center items-center cursor-pointer transition-all duration-150 ease-in-out hover:bg-[#07f468] hover:shadow-[4px_4px_0_0_#000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="pointer-events-none transition-all duration-150 ease-in-out h-6 w-6"
                  >
                    <g id="dots-vertical">
                      <g id="Icon">
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          stroke="#FB5BA2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                          stroke="#FB5BA2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                          stroke="#FB5BA2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                </div>

                <!-- View Profile Button -->
                <a
                  data-profile-view-button
                  href="#"
                  class="group flex-1 h-10 relative flex justify-center self-stretch items-center no-underline"
                >
                  <div
                    data-main
                    class="w-full gap-2.5 h-10 px-2 py-1 flex justify-center self-stretch items-center bg-black shadow-[4px_4px_0_0_#fb5ba2] transition-all duration-150 ease-in-out group-hover:bg-[#07f468] group-hover:shadow-[4px_4px_0_0_#000]"
                  >
                    <span
                      data-text
                      class="font-medium text-lg leading-7 text-white font-poppins transition-all duration-150 ease-in-out group-hover:text-black"
                      >View Profile</span
                    >
                  </div>
                  <div
                    data-skew
                    class="relative -skew-x-[20deg] -translate-x-[0.438rem] h-10 p-1 w-4 flex justify-center items-center bg-black shadow-[4px_4px_0_0_#fb5ba2] transition-all duration-150 ease-in-out group-hover:bg-[#07f468] group-hover:shadow-[4px_4px_0_0_#000]"
                  ></div>
                </a>
              </div>

              <!-- Right Section -->
              <div class="flex-1 self-stretch flex items-center">
                <!-- Go Live Button -->
                <a
                  data-go-live-button
                  href="#"
                  class="no-underline cursor-default h-10 flex-1 relative flex justify-center items-center self-center"
                >
                  <div
                    data-skew
                    class="[filter:grayscale(100%)] shadow-[4px_4px_0_0_#636363] bg-[#9f9f9f] -skew-x-[20deg] translate-x-[0.563rem] h-10 p-1 w-4 flex justify-center items-center transition-all duration-150 ease-in-out"
                  ></div>
                  <div
                    data-main
                    class="[filter:grayscale(100%)] shadow-[4px_4px_0_0_#636363] bg-[#9f9f9f] relative transition-all duration-150 ease-in-out cursor-default flex-1 gap-2.5 h-10 p-1 flex justify-center items-center self-stretch"
                  >
                    <span
                      class="transition-all duration-150 ease-in-out leading-7 font-poppins text-lg text-black font-medium"
                      >Go Live</span
                    >
                    <svg
                      data-icon
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="w-6 h-6 [filter:brightness(0)_saturate(100%)_invert(55%)_sepia(10%)_saturate(5098%)_hue-rotate(296deg)_brightness(98%)_contrast(101%)] transition-all duration-150 ease-in-out"
                    >
                      <g clip-path="url(#clip0_1177_37360)">
                        <path
                          d="M9.77811 6.63604C9.22582 6.63604 8.77811 6.18832 8.77811 5.63604C8.77811 5.08376 9.22583 4.63604 9.77811 4.63604L18.2634 4.63605C18.5395 4.63605 18.7895 4.74798 18.9705 4.92895C19.0664 5.02482 19.1387 5.13532 19.1875 5.25327C19.2364 5.37117 19.2634 5.50046 19.2634 5.63605L19.2634 14.1213C19.2634 14.6736 18.8157 15.1213 18.2634 15.1213C17.7111 15.1213 17.2634 14.6736 17.2634 14.1213L17.2634 8.05026L6.24256 19.0711C5.85204 19.4616 5.21887 19.4616 4.82835 19.0711C4.43782 18.6806 4.43782 18.0474 4.82835 17.6569L15.8492 6.63605L9.77811 6.63604Z"
                          fill="#303437"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1177_37360">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <!-- save & publish button -->
            <button
              data-save-button
              class="w-max bg-[rgba(52,64,84,0.05)] border-0 py-1 px-2 text-[#0c111d] gap-2 leading-7 text-lg whitespace-nowrap uppercase font-medium flex justify-center items-center flex-1 min-w-0 min-h-0 cursor-pointer hover-save-button"
            >
              <div class="flex justify-center items-center gap-2.5">
                <svg
                  data-button-icon
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  class="h-6 w-6 block"
                >
                  <g id="upload-cloud-01">
                    <path
                      id="Icon"
                      d="M4.5 16.2422C3.29401 15.435 2.5 14.0602 2.5 12.5C2.5 10.1564 4.29151 8.23129 6.57974 8.01937C7.04781 5.17213 9.52024 3 12.5 3C15.4798 3 17.9522 5.17213 18.4203 8.01937C20.7085 8.23129 22.5 10.1564 22.5 12.5C22.5 14.0602 21.706 15.435 20.5 16.2422M8.5 16L12.5 12M12.5 12L16.5 16M12.5 12V21"
                      stroke="#98a2b3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <span
                  class="text-[#98a2b3] break-words text-lg leading-7 whitespace-nowrap font-poppins uppercase font-medium hover-save-text"
                  >SAVE &amp; PUBLISH</span
                >
              </div>
            </button>
          </div>

          <!-- Free/Paid Tier -->
          <div
            class="rounded-[.313rem] border border-[#d0d5dd] bg-[#f9fafb] flex items-center"
          >
            <span
              class="px-2 py-2 md:px-4 gap-2 flex justify-center items-center flex-1 min-w-0 min-h-0"
            >
              <span class="flex justify-center items-center">
                <div
                  data-tooltip
                  data-tooltip-pos="top"
                  class="relative inline-flex overflow-hidden hover:overflow-visible hover:cursor-pointer group"
                >
                  <!-- Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="w-4 h-4 pointer-events-none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.56006 9.43549C8.56006 7.45731 10.1773 5.86975 12.1523 5.86975C14.1274 5.86975 15.7446 7.45731 15.7446 9.43549C15.7446 11.0892 14.6144 12.4699 13.0898 12.8784V13.8159C13.0898 14.3337 12.6701 14.7534 12.1523 14.7534C11.6346 14.7534 11.2148 14.3337 11.2148 13.8159V12.0637C11.2148 11.546 11.6346 11.1262 12.1523 11.1262C13.1097 11.1262 13.8696 10.3604 13.8696 9.43549C13.8696 8.51058 13.1097 7.74475 12.1523 7.74475C11.195 7.74475 10.4351 8.51058 10.4351 9.43549C10.4351 9.95326 10.0153 10.373 9.49756 10.373C8.97979 10.373 8.56006 9.95326 8.56006 9.43549Z"
                      fill="#667085"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1615 18.2228C12.8946 18.2228 13.489 17.6285 13.489 16.8954C13.489 16.1623 12.8946 15.568 12.1615 15.568C11.4283 15.568 10.834 16.1623 10.834 16.8954C10.834 17.6285 11.4283 18.2228 12.1615 18.2228Z"
                      fill="#667085"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.22183 4.22182C6.21136 2.23232 8.96273 1 12 1C15.0373 1 17.7886 2.23231 19.7782 4.22182L19.0711 4.92893L19.7782 4.22183C21.7677 6.21136 23 8.96273 23 12C23 15.0373 21.7677 17.7886 19.7782 19.7782C17.7886 21.7677 15.0373 23 12 23C8.96273 23 6.21136 21.7677 4.22183 19.7782L4.92893 19.0711L4.22182 19.7782C2.23231 17.7886 1 15.0373 1 12C1 8.96273 2.23232 6.21136 4.22182 4.22183L4.22183 4.22182ZM12 3C9.51447 3 7.26584 4.00626 5.63603 5.63604C4.00625 7.26585 3 9.51447 3 12C3 14.4855 4.00627 16.7342 5.63604 18.3639C7.26584 19.9937 9.51447 21 12 21C14.4855 21 16.7342 19.9937 18.3639 18.3639C19.9937 16.7342 21 14.4855 21 12C21 9.51447 19.9937 7.26584 18.3639 5.63604C16.7342 4.00627 14.4855 3 12 3Z"
                      fill="#667085"
                    />
                  </svg>

                  <!-- Tooltip -->
                  <div
                    class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-[17.5rem] max-w-[17.5rem] p-2 px-3 text-xs font-medium leading-[1.125rem] bg-[rgba(16,24,40,0.7)] text-white rounded-lg shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1),0_2px_4px_-2px_rgba(16,24,40,0.06)] backdrop-blur-[25px] opacity-0 invisible pointer-events-none transition-all duration-150 ease-in-out z-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-5 before:border-solid before:border-transparent before:border-t-[rgba(16,24,40,0.7)]"
                  >
                    <span class="text-xs leading-normal font-medium text-white font-poppins"
                      >Cannot make this a free tier because there is already a
                      free tier in your subscription settings</span
                    >
                  </div>
                </div>
              </span>
              <span class="text-sm leading-5 text-[#98a2b3] font-medium font-poppins"
                >Free tier</span
              >
            </span>

            <span
              class="rounded-r-[.313rem] rounded-l-none px-2 py-2 md:px-4 bg-[#0c111d] gap-2 flex justify-center items-center flex-1 min-w-0 min-h-0 cursor-pointer"
            >
              <span class="text-sm leading-5 text-white font-semibold font-poppins"
                >Paid tier</span
              >
            </span>
          </div>

          <!-- Leave/Cancel popup -->
          <div
            class="shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] max-h-[8.5rem] rounded-[0.313rem] p-4 max-w-[30.938rem] backdrop-blur-[50px] gap-6 pointer-events-auto overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-white/90 w-1/2 h-full flex flex-col"
          >
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <p class="text-[15px] font-normal text-black leading-[1.3] font-poppins">
                  Are you sure you want to leave? Your changes will not be saved
                </p>
              </div>

              <div class="flex items-center gap-2">
                <button
                  class="py-2 border-none outline-none cursor-pointer bg-transparent min-w-[6.25rem] flex justify-center items-center hover:bg-white hover:text-[#bc1b06]"
                >
                  <div>
                    <span
                      class="text-[#ff4405] break-words leading-6 text-base font-medium font-poppins"
                      >Cancel</span
                    >
                  </div>
                </button>

                <button
                  class="px-[0.563rem] py-2 border-none outline-none cursor-pointer bg-[#ff4405] min-w-[6.25rem] whitespace-nowrap text-center flex justify-center items-center hover:bg-[#ff692e]"
                >
                  <div>
                    <span
                      class="text-white break-words leading-6 text-base font-medium font-poppins"
                      >Leave</span
                    >
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- media-uploader -->
          <div
            class="cursor-pointer border-2 border-transparent bg-dash-gray-50 dark:bg-dark-dash-bg-light rounded-xl p-2 h-[12.1875rem] w-full flex flex-col items-center justify-center hover:border-dash-gray-900 dark:hover:border-dark-dash-text hover:bg-dash-gray-100 dark:hover:bg-dark-dash-bg-lighter group"
          >
            <div
              class="gap-1 w-full flex flex-col justify-center self-stretch border-2 border-dashed border-transparent"
            >
              <div class="flex flex-col items-center justify-center gap-3">
                <div
                  class="shadow-dash-input dark:shadow-dark-dash-input rounded-lg h-10 w-10 relative flex justify-center items-center"
                >
                  <input
                    type="file"
                    class="appearance-none z-[5] opacity-0 absolute w-full h-full cursor-pointer"
                  />
                  <span
                    class="cursor-pointer shadow-dash-input dark:shadow-dark-dash-input bg-dash-success dark:bg-dark-dash-success rounded-lg h-10 w-10 flex justify-center items-center group-hover:bg-black dark:group-hover:bg-dark-dash-text"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      class="w-5 h-5 cursor-pointer"
                    >
                      <g id="upload-cloud-02">
                        <path
                          id="Icon"
                          d="M6.6665 13.3333L9.99984 10M9.99984 10L13.3332 13.3333M9.99984 10V17.5M16.6665 13.9524C17.6844 13.1117 18.3332 11.8399 18.3332 10.4167C18.3332 7.88536 16.2811 5.83333 13.7498 5.83333C13.5677 5.83333 13.3974 5.73833 13.3049 5.58145C12.2182 3.73736 10.2119 2.5 7.9165 2.5C4.46472 2.5 1.6665 5.29822 1.6665 8.75C1.6665 10.4718 2.36271 12.0309 3.48896 13.1613"
                          stroke="black"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="group-hover:stroke-[#07f468]"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <h4
                  class="text-dash-gray-600 dark:text-dark-dash-text text-sm leading-5 text-center font-poppins font-normal"
                >
                  <span
                    class="text-dash-gray-900 dark:text-dark-dash-text font-semibold font-poppins"
                    >Click to upload
                  </span>
                  or drag and drop files here
                </h4>
              </div>
              <div>
                <p
                  class="text-dash-gray-600 dark:text-dark-dash-text text-xs leading-[1.125rem] text-center font-poppins mb-0"
                >
                  PNG, JPG, JPEG (Max: 15 MB)
                </p>
              </div>
            </div>
          </div>

          <!-- Draft subscription view card -->
          <div
            class="max-w-[24rem] min-h-[39.6875rem] rounded-[0.125rem] border-[1.5px] border-[#07F468] bg-[linear-gradient(0deg,rgba(7,244,104,0.5),rgba(7,244,104,0.5)),linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),radial-gradient(79%_79%_at_50%_50%,rgba(0,0,0,0)_17.51%,rgba(0,0,0,0.7)_100%)] bg-cover bg-center bg-no-repeat"
          >
            <div
              class="min-h-[39.6875rem] rounded-[0.125rem] bg-black/40 backdrop-blur-[5px] flex flex-col gap-4 pt-8 px-6 pb-[4.25rem] relative"
            >
              <span class="flex items-center">
                <div
                  class="w-full z-[5] relative overflow-hidden hover:overflow-visible hover:cursor-pointer group"
                >
                  <h2
                    class="overflow-hidden line-clamp-2 text-[1.875rem] text-[#efeff3] font-semibold leading-[2.375rem] font-poppins"
                  >
                    Gold Tier
                  </h2>
                  <div
                    class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[17.5rem] max-w-[17.5rem] p-2 px-3 text-xs font-medium font-poppins leading-[1.125rem] bg-[rgba(16,24,40,0.7)] text-white rounded-lg shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1),0_2px_4px_-2px_rgba(16,24,40,0.06)] backdrop-blur-[25px] opacity-0 invisible pointer-events-none transition-all duration-150 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto"
                  >
                    Gold Tier
                  </div>
                </div>
              </span>

              <!-- Stats row -->
              <div class="flex items-center gap-[0.625rem]">
                <!-- Videos count -->
                <div class="flex items-center gap-[0.063rem]">
                  <span class="tracking-[0.005rem] text-base text-white block font-poppins"
                    >3</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="w-5 h-5"
                  >
                    <path
                      d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
                      stroke="#FDFDFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
                      stroke="#FDFDFC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div
                  class="h-[0.188rem] w-[0.188rem] bg-white block rounded-full"
                ></div>

                <!-- Photos count -->
                <div class="flex items-center gap-[0.063rem]">
                  <span class="tracking-[0.005rem] text-base text-white block font-poppins"
                    >6</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    class="w-5 h-5"
                  >
                    <path
                      d="M13.8052 10.6582C13.8052 11.4914 13.4742 12.2906 12.885 12.8798C12.2958 13.469 11.4967 13.8 10.6634 13.8H3.33615C2.50289 13.8 1.70376 13.469 1.11455 12.8798C0.525348 12.2906 0.194336 11.4914 0.194336 10.6582V3.34182C0.194336 2.50856 0.525348 1.70942 1.11455 1.12022C1.70376 0.531013 2.50289 0.199997 3.33615 0.199997H10.6634C11.4967 0.199997 12.2958 0.531013 12.885 1.12022C13.4742 1.70942 13.8052 2.50856 13.8052 3.34182V10.6582ZM7.55615 9.21999C8.46161 8.20545 9.41979 7.62364 10.6034 8.74182C11.2568 9.36122 11.8465 9.95576 12.3725 10.5255C12.4768 10.6382 12.5307 10.6176 12.5343 10.4636C12.5816 8.53394 12.5895 5.72606 12.558 3.85818C12.5362 2.53091 12.158 1.47091 10.5889 1.45637C8.30888 1.43697 5.92525 1.43879 3.43797 1.46182C1.85979 1.47636 1.4507 2.45273 1.41252 3.87455C1.37737 5.26121 1.39373 7.48363 1.46161 8.72363C1.46888 8.85333 1.51555 8.86909 1.60161 8.77091C2.0707 8.22545 2.56525 7.72 3.13615 7.26182C3.76525 6.75818 4.54888 6.80545 5.16525 7.31454C5.82464 7.86 6.47979 8.49515 7.1307 9.21999Z"
                      fill="white"
                    />
                    <path
                      d="M10.4888 4.53273C10.4888 4.80228 10.3817 5.06079 10.1911 5.2514C10.0005 5.442 9.74198 5.54909 9.47242 5.54909C9.20286 5.54909 8.94435 5.442 8.75374 5.2514C8.56314 5.06079 8.45605 4.80228 8.45605 4.53273C8.45605 4.26317 8.56314 4.00465 8.75374 3.81404C8.94435 3.62344 9.20286 3.51636 9.47242 3.51636C9.74198 3.51636 10.0005 3.62344 10.1911 3.81404C10.3817 4.00465 10.4888 4.26317 10.4888 4.53273Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div
                  class="h-[0.188rem] w-[0.188rem] bg-white block rounded-full"
                ></div>

                <!-- Other count -->
                <div class="flex items-center gap-[0.063rem]">
                  <span class="tracking-[0.005rem] text-base text-white block font-poppins"
                    >2</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    class="w-5 h-5"
                  >
                    <path
                      d="M13.7838 10.6259C13.7838 11.4591 13.4528 12.2583 12.8635 12.8475C12.2743 13.4367 11.4752 13.7677 10.6419 13.7677H3.31467C2.48141 13.7677 1.68227 13.4367 1.09307 12.8475C0.503864 12.2583 0.172852 11.4591 0.172852 10.6259V3.30952C0.172852 2.47626 0.503864 1.67712 1.09307 1.08792C1.68227 0.49871 2.48141 0.167694 3.31467 0.167694H10.6419C11.4752 0.167694 12.2743 0.49871 12.8635 1.08792C13.4528 1.67712 13.7838 2.47626 13.7838 3.30952V10.6259ZM7.53467 8.2786C8.44012 7.26406 9.39831 6.68225 10.5819 7.80043C11.2353 8.41982 11.825 9.01437 12.351 9.58406C12.4553 9.69679 12.5092 9.67618 12.5129 9.52224C12.5601 7.59255 12.568 5.69375 12.5365 3.82588C12.5147 2.4986 12.1365 1.43861 10.5674 1.42406C8.2874 1.40467 5.90376 1.40648 3.41649 1.42951C1.83831 1.44406 1.42922 2.42043 1.39103 3.84224C1.35588 5.22891 1.37225 6.54224 1.44012 7.78224C1.4474 7.91194 1.49406 7.9277 1.58012 7.82952C2.04922 7.28406 2.54376 6.77861 3.11467 6.32043C3.74376 5.81679 4.5274 5.86406 5.14376 6.37315C5.80315 6.9186 6.45831 7.55375 7.10921 8.2786Z"
                      fill="white"
                    />
                    <path
                      d="M15.431 12.9295C14.5595 14.8398 13.0274 15.8041 10.8347 15.8222C9.08314 15.8368 7.30253 15.8356 5.49284 15.8186C4.52799 15.8101 3.71041 15.4798 3.04011 14.8277C3.02833 14.8163 3.01966 14.8021 3.0149 14.7864C3.01014 14.7707 3.00945 14.7541 3.01291 14.7381C3.01637 14.7221 3.02386 14.7072 3.03466 14.6949C3.04546 14.6826 3.05923 14.6732 3.07466 14.6677C3.24193 14.6095 3.41647 14.5804 3.59829 14.5804C5.78132 14.5841 8.02314 14.5822 10.3237 14.575C10.871 14.5731 11.4056 14.5895 11.9365 14.4495C13.1474 14.1307 13.9577 13.4168 14.3674 12.3077C14.5565 11.7962 14.6407 10.9047 14.6201 9.63314C14.5862 7.41859 14.585 5.34223 14.6165 3.40405C14.6177 3.3095 14.6292 3.21254 14.651 3.11314C14.6565 3.08563 14.6696 3.06023 14.6889 3.03984C14.7081 3.01946 14.7327 3.00491 14.7599 2.99789C14.7871 2.99086 14.8156 2.99164 14.8424 3.00013C14.8691 3.00862 14.8929 3.02447 14.911 3.04587C15.4977 3.72466 15.7977 4.57011 15.811 5.58224C15.8316 7.23557 15.8334 9.03738 15.8165 10.9877C15.8092 11.7331 15.6807 12.3804 15.431 12.9295Z"
                      fill="white"
                    />
                    <path
                      d="M10.4673 4.50042C10.4673 4.76998 10.3602 5.02849 10.1696 5.2191C9.97901 5.4097 9.72049 5.51679 9.45093 5.51679C9.18138 5.51679 8.92286 5.4097 8.73226 5.2191C8.54165 5.02849 8.43457 4.76998 8.43457 4.50042C8.43457 4.23087 8.54165 3.97234 8.73226 3.78174C8.92286 3.59113 9.18138 3.48405 9.45093 3.48405C9.72049 3.48405 9.97901 3.59113 10.1696 3.78174C10.3602 3.97234 10.4673 4.23087 10.4673 4.50042Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <!-- Price -->
              <div class="flex items-end gap-1">
                <span class="relative">
                  <span
                    class="text-xl text-white font-semibold leading-[1.875rem] font-poppins"
                    >USD$</span
                  >
                  <span
                    class="text-white tracking-[-0.06rem] leading-[3.75rem] uppercase font-poppins font-semibold text-[3rem]"
                    >1</span
                  >
                </span>
              </div>

              <!-- Description -->
              <div class="flex flex-col pt-1 gap-1">
                <div class="flex flex-col">
                  <div class="flex flex-col gap-1">
                    <span
                      class="line-clamp-7 text-sm text-[#edeff3] font-normal leading-[1.42] font-poppins [text-shadow:0_4px_8px_rgba(16,24,40,0.1),0_2px_4px_rgba(16,24,40,0.06)]"
                    >
                      This is the gold tier. Better perks than the silver tier
                      and definitely the free subscriptions. Golden plan.
                      sadfasd
                    </span>
                  </div>
                </div>
              </div>

              <!-- Benefits list -->
              <div class="flex flex-col gap-2">
                <!-- Benefit 1 -->
                <div class="flex items-center gap-[0.938rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    class="w-3 h-3"
                  >
                    <path
                      d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="text-white font-semibold text-base leading-6 font-poppins">
                    <span class="text-[#07f468] text-base font-semibold font-poppins"
                      >5 free tokens
                    </span>
                    per month
                  </span>
                </div>

                <!-- Benefit 2 -->
                <div class="flex items-center gap-[0.938rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    class="w-3 h-3"
                  >
                    <path
                      d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="text-white font-semibold text-base leading-6 font-poppins">
                    <span class="text-[#07f468] text-base font-semibold font-poppins"
                      >11 % off
                    </span>
                    on all Merchandise
                  </span>
                </div>

                <!-- Benefit 3 -->
                <div class="flex items-center gap-[0.938rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    class="w-3 h-3"
                  >
                    <path
                      d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="text-white font-semibold text-base leading-6 font-poppins">
                    <span class="text-[#07f468] text-base font-semibold font-poppins"
                      >11 % off
                    </span>
                    on all Pay to View videos
                  </span>
                </div>

                <!-- Benefit 4 -->
                <div class="flex items-center gap-[0.938rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    class="w-3 h-3"
                  >
                    <path
                      d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="text-white font-semibold text-base leading-6 font-poppins">
                    <span class="text-[#07f468] text-base font-semibold font-poppins"
                      >12 % off
                    </span>
                    on all Custom Request
                  </span>
                </div>
              </div>

              <!-- subscribe button -->
              <button
                class="absolute h-14 gap-2.5 px-2 absolute bottom-0 right-0 flex justify-center items-center bg-[#07F468] group cursor-pointer hover:bg-[#101828]"
              >
                <!-- Text and icon container -->
                <div
                  class="relative z-10 py-1 leading-8 text-2xl text-black font-bold flex flex-row-reverse group-hover:[&>span]:text-[#07F468]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="flex-none w-6 h-6 group-hover:[&>path]:stroke-[#07F468]"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span
                    class="leading-8 break-words text-2xl text-black font-semibold font-poppins"
                    >SUBSCRIBE</span
                  >
                </div>

                <!-- Shadow element (replaces ::before) -->
                <div
                  class="absolute w-full h-full top-0 right-0 z-[1] shadow-[4px_4px_0_0_#000]"
                ></div>

                <!-- Skewed element (replaces ::after) -->
                <div
                  class="absolute w-8 h-full top-0 left-[-1rem] z-[-1] shadow-[4px_4px_0_0_#000] -skew-x-[20deg] translate-x-[3px] bg-[#07F468] group-hover:bg-[#101828]"
                ></div>
              </button>
            </div>
          </div>

          <!-- Featured subscription view card -->
          <div
            class="max-w-[24rem] min-h-[39.6875rem] rounded-[0.125rem] bg-[url('https://i.ibb.co.com/3Yr4FQD2/1377790.png')] bg-cover bg-center bg-no-repeat border-[1.5px] border-[#4d20ff] relative"
          >
            <div
              class="min-h-[39.6875rem] bg-black/40 backdrop-blur-[5px] rounded-[0.125rem] pb-[4.25rem] gap-4 pt-8 px-6 flex flex-col relative h-full"
            >
              <!-- Featured button -->
              <button
                class="absolute left-[-0.375rem] top-[-0.375rem] px-2 py-1 pr-[1.125rem] gap-1 flex justify-center items-center border-none outline-none clip-path-[polygon(0_0,100%_0,88%_105%,0_105%)] bg-gradient-to-r from-[#4d20ff] to-[#7e5eff] group"
              >
                <span
                  class="text-white text-lg font-semibold leading-7 group-hover:text-black font-poppins"
                  >FEATURED</span
                >
              </button>

              <!-- Tier title -->
              <span class="flex items-center">
                <div
                  class="w-full z-[5] relative overflow-hidden hover:overflow-visible hover:cursor-pointer"
                >
                  <h2
                    class="overflow-hidden font-poppins line-clamp-2 text-[1.875rem] text-[#efeff3] font-semibold leading-[2.375rem]"
                  >
                    Silver Tier
                  </h2>
                  <div class="absolute hidden font-poppins">
                    <span>Silver Tier</span>
                  </div>
                </div>
              </span>

              <!-- Stats row -->
              <div class="flex items-center gap-[0.625rem]">
                <div class="flex items-center gap-[0.063rem]">
                  <span class="tracking-[0.005rem] text-base font-poppins text-white block"
                    >1</span
                  >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="w-5 h-5"
                    >
                      <path
                        d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
                        stroke="#FDFDFC"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
                        stroke="#FDFDFC"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  class="h-[0.188rem] w-[0.188rem] bg-white block rounded-full"
                ></div>

                <div class="flex items-center gap-[0.063rem]">
                  <span class="tracking-[0.005rem] text-base text-white font-poppins block"
                    >2</span
                  >
                  <span class="w-5 h-5 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g id="Group 5">
                        <path
                          id="color 1"
                          d="M13.8052 10.6582C13.8052 11.4914 13.4742 12.2906 12.885 12.8798C12.2958 13.469 11.4967 13.8 10.6634 13.8H3.33615C2.50289 13.8 1.70376 13.469 1.11455 12.8798C0.525348 12.2906 0.194336 11.4914 0.194336 10.6582V3.34182C0.194336 2.50856 0.525348 1.70942 1.11455 1.12022C1.70376 0.531013 2.50289 0.199997 3.33615 0.199997H10.6634C11.4967 0.199997 12.2958 0.531013 12.885 1.12022C13.4742 1.70942 13.8052 2.50856 13.8052 3.34182V10.6582ZM7.55615 9.21999C8.46161 8.20545 9.41979 7.62364 10.6034 8.74182C11.2568 9.36122 11.8465 9.95576 12.3725 10.5255C12.4768 10.6382 12.5307 10.6176 12.5343 10.4636C12.5816 8.53394 12.5895 5.72606 12.558 3.85818C12.5362 2.53091 12.158 1.47091 10.5889 1.45637C8.30888 1.43697 5.92525 1.43879 3.43797 1.46182C1.85979 1.47636 1.4507 2.45273 1.41252 3.87455C1.37737 5.26121 1.39373 7.48363 1.46161 8.72363C1.46888 8.85333 1.51555 8.86909 1.60161 8.77091C2.0707 8.22545 2.56525 7.72 3.13615 7.26182C3.76525 6.75818 4.54888 6.80545 5.16525 7.31454C5.82464 7.86 6.47979 8.49515 7.1307 9.21999C7.15747 9.24992 7.19026 9.27386 7.22692 9.29025C7.26357 9.30664 7.30327 9.31511 7.34343 9.31511C7.38358 9.31511 7.42328 9.30664 7.45994 9.29025C7.49659 9.27386 7.52938 9.24992 7.55615 9.21999Z"
                          fill="white"
                        />
                        <path
                          id="color 1_2"
                          d="M10.4888 4.53273C10.4888 4.80228 10.3817 5.06079 10.1911 5.2514C10.0005 5.442 9.74198 5.54909 9.47242 5.54909C9.20286 5.54909 8.94435 5.442 8.75374 5.2514C8.56314 5.06079 8.45605 4.80228 8.45605 4.53273C8.45605 4.26317 8.56314 4.00465 8.75374 3.81404C8.94435 3.62344 9.20286 3.51636 9.47242 3.51636C9.74198 3.51636 10.0005 3.62344 10.1911 3.81404C10.3817 4.00465 10.4888 4.26317 10.4888 4.53273Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>
                </div>

                <div
                  class="h-[0.188rem] w-[0.188rem] bg-white block rounded-full"
                ></div>

                <div class="flex items-center gap-[0.063rem]">
                  <span class="tracking-[0.005rem] text-base text-white block font-poppins"
                    >0</span
                  >
                  <span class="w-5 h-5 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g id="Group 5">
                        <path
                          id="color 1"
                          d="M13.7838 10.6259C13.7838 11.4591 13.4528 12.2583 12.8635 12.8475C12.2743 13.4367 11.4752 13.7677 10.6419 13.7677H3.31467C2.48141 13.7677 1.68227 13.4367 1.09307 12.8475C0.503864 12.2583 0.172852 11.4591 0.172852 10.6259V3.30952C0.172852 2.47626 0.503864 1.67712 1.09307 1.08792C1.68227 0.49871 2.48141 0.167694 3.31467 0.167694H10.6419C11.4752 0.167694 12.2743 0.49871 12.8635 1.08792C13.4528 1.67712 13.7838 2.47626 13.7838 3.30952V10.6259ZM7.53467 8.2786C8.44012 7.26406 9.39831 6.68225 10.5819 7.80043C11.2353 8.41982 11.825 9.01437 12.351 9.58406C12.4553 9.69679 12.5092 9.67618 12.5129 9.52224C12.5601 7.59255 12.568 5.69375 12.5365 3.82588C12.5147 2.4986 12.1365 1.43861 10.5674 1.42406C8.2874 1.40467 5.90376 1.40648 3.41649 1.42951C1.83831 1.44406 1.42922 2.42043 1.39103 3.84224C1.35588 5.22891 1.37225 6.54224 1.44012 7.78224C1.4474 7.91194 1.49406 7.9277 1.58012 7.82952C2.04922 7.28406 2.54376 6.77861 3.11467 6.32043C3.74376 5.81679 4.5274 5.86406 5.14376 6.37315C5.80315 6.9186 6.45831 7.55375 7.10921 8.2786C7.13599 8.30852 7.16878 8.33247 7.20543 8.34886C7.24209 8.36525 7.28179 8.37372 7.32194 8.37372C7.3621 8.37372 7.4018 8.36525 7.43845 8.34886C7.47511 8.33247 7.5079 8.30852 7.53467 8.2786Z"
                          fill="white"
                        />
                        <path
                          id="color 1_2"
                          d="M15.431 12.9295C14.5595 14.8398 13.0274 15.8041 10.8347 15.8222C9.08314 15.8368 7.30253 15.8356 5.49284 15.8186C4.52799 15.8101 3.71041 15.4798 3.04011 14.8277C3.02833 14.8163 3.01966 14.8021 3.0149 14.7864C3.01014 14.7707 3.00945 14.7541 3.01291 14.7381C3.01637 14.7221 3.02386 14.7072 3.03466 14.6949C3.04546 14.6826 3.05923 14.6732 3.07466 14.6677C3.24193 14.6095 3.41647 14.5804 3.59829 14.5804C5.78132 14.5841 8.02314 14.5822 10.3237 14.575C10.871 14.5731 11.4056 14.5895 11.9365 14.4495C13.1474 14.1307 13.9577 13.4168 14.3674 12.3077C14.5565 11.7962 14.6407 10.9047 14.6201 9.63314C14.5862 7.41859 14.585 5.34223 14.6165 3.40405C14.6177 3.3095 14.6292 3.21254 14.651 3.11314C14.6565 3.08563 14.6696 3.06023 14.6889 3.03984C14.7081 3.01946 14.7327 3.00491 14.7599 2.99789C14.7871 2.99086 14.8156 2.99164 14.8424 3.00013C14.8691 3.00862 14.8929 3.02447 14.911 3.04587C15.4977 3.72466 15.7977 4.57011 15.811 5.58224C15.8316 7.23557 15.8334 9.03738 15.8165 10.9877C15.8092 11.7331 15.6807 12.3804 15.431 12.9295Z"
                          fill="white"
                        />
                        <path
                          id="color 1_3"
                          d="M10.4673 4.50042C10.4673 4.76998 10.3602 5.02849 10.1696 5.2191C9.97901 5.4097 9.72049 5.51679 9.45093 5.51679C9.18138 5.51679 8.92286 5.4097 8.73226 5.2191C8.54165 5.06079 8.43457 4.76998 8.43457 4.50042C8.43457 4.23087 8.54165 3.97234 8.73226 3.78174C8.92286 3.59113 9.18138 3.48405 9.45093 3.48405C9.72049 3.48405 9.97901 3.59113 10.1696 3.78174C10.3602 3.97234 10.4673 4.23087 10.4673 4.50042Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Price -->
              <div class="flex items-end gap-1">
                <span class="relative">
                  <span
                    class="text-xl text-white font-semibold leading-[1.875rem] font-poppins"
                    >USD$</span
                  >
                  <span
                    class="text-white tracking-[-0.06rem] leading-[3.75rem] uppercase font-poppins font-semibold text-[3rem]"
                    >100</span
                  >
                </span>
              </div>

              <!-- Description -->
              <div class="flex flex-col pt-1 gap-1">
                <div class="flex flex-col">
                  <div class="flex flex-col gap-1">
                    <p
                      class="line-clamp-7 text-[#edeff3] text-sm font-normal leading-[1.42] font-poppins [text-shadow:0_4px_8px_rgba(16,24,40,0.1),0_2px_4px_rgba(16,24,40,0.06)]"
                    >
                      This is the <strong>silver tier</strong>. More perks than
                      the free subscription. This is the silver tier. More perks
                      than the free subscription. More perks than the free
                      subscription. This is the silver tier. More perks than the
                      free subscription. <br />asdfasfdas
                    </p>
                  </div>
                </div>
              </div>

              <!-- Benefits list -->
              <div class="flex flex-col gap-2">
                <!-- Benefit 1 -->
                <div class="flex items-center gap-[0.938rem]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      class="w-3 h-3"
                    >
                      <g id="square" clip-path="url(#clip0_3385_16650)">
                        <path
                          id="Icon"
                          d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
                          fill="white"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3385_16650">
                          <rect width="12" height="12" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span class="text-white font-semibold text-base leading-6 font-poppins">
                    <span class="text-[#4D20ff] text-base font-semibold font-poppins"
                      >3 free tokens
                    </span>
                    per month
                  </span>
                </div>

                <!-- Benefit 2 -->
                <div class="flex items-center gap-[0.938rem]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      class="w-3 h-3"
                    >
                      <g id="square" clip-path="url(#clip0_3385_16650)">
                        <path
                          id="Icon"
                          d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
                          fill="white"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3385_16650">
                          <rect width="12" height="12" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span class="text-white font-semibold text-base leading-6 font-poppins">
                    <span class="text-[#4D20ff] text-base font-semibold font-poppins"
                      >14 % off
                    </span>
                    on all Merchandise
                  </span>
                </div>

                <!-- Benefit 3 -->
                <div class="flex items-center gap-[0.938rem]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      class="w-3 h-3"
                    >
                      <g id="square" clip-path="url(#clip0_3385_16650)">
                        <path
                          id="Icon"
                          d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
                          fill="white"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3385_16650">
                          <rect width="12" height="12" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span class="text-white font-semibold text-base leading-6 font-poppins">
                    <span class="text-[#4D20ff] text-base font-semibold font-poppins"
                      >10 % off
                    </span>
                    on all Pay to View videos
                  </span>
                </div>

                <!-- Benefit 4 -->
                <div class="flex items-center gap-[0.938rem]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      class="w-3 h-3"
                    >
                      <g id="square" clip-path="url(#clip0_3385_16650)">
                        <path
                          id="Icon"
                          d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
                          fill="white"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3385_16650">
                          <rect width="12" height="12" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span class="text-white font-semibold text-base leading-6 font-poppins">
                    <span class="text-[#4D20ff] text-base font-semibold font-poppins"
                      >12 % off
                    </span>
                    on all Custom Request
                  </span>
                </div>
              </div>

              <!-- No followers button -->
              <button
                class="h-14 gap-2.5 px-2 absolute bottom-0 right-0 flex justify-center items-center bg-[#4d20ff] group cursor-pointer"
              >
                <div
                  class="relative z-10 py-1 leading-8 text-2xl font-bold flex flex-row-reverse"
                >
                  <span
                    class="leading-8 break-words text-2xl text-white font-semibold font-poppins"
                    >No followers yet</span
                  >
                </div>
                <div
                  class="absolute w-full h-full top-0 right-0 z-[1] shadow-[4px_4px_0_0_#000]"
                ></div>
                <div
                  class="absolute w-8 h-full top-0 left-[-1rem] z-[-1] shadow-[4px_4px_0_0_#000] -skew-x-[20deg] translate-x-[3px] bg-[#4d20ff]"
                ></div>
              </button>
            </div>
          </div>

          <!-- Textarea with Quills library -->
          <div
            class="dash-quill-container px-3.5 py-2.5 border-b border-dash-border rounded-dash-input rounded-b-none shadow-dash-input bg-white/30 gap-2 w-full"
          >
            <div
              id="dash-editor"
              class="[&_.ql-editor.ql-blank::before]:!font-normal [&_.ql-editor.ql-blank::before]:!left-0 [&_.ql-editor.ql-blank::before]:!text-[0.9375rem] [&_.ql-editor.ql-blank::before]:!font-[400]"
            ></div>
          </div>
        </div>
      </section>
    </div>
</template>
    
    
   <script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Initialize Quill only when DOM is ready
  const editor = document.querySelector("#editor");
  if (editor) {
    new Quill(editor, { theme: "snow" });
  }

  const dashEditor = document.querySelector("#dash-editor");
  if (dashEditor) {
    // Custom icons
    const icons = Quill.import("ui/icons");
    icons["bold"] =
      '<img src="https://i.ibb.co/HLRRqmHp/bold-icon.webp" alt="bold-icon" border="0">';
    icons["italic"] =
      '<img src="https://i.ibb.co/QvdPyg67/italic-icon.webp" alt="italic-icon" border="0">';
    icons["link"] =
      '<img src="https://i.ibb.co/gZ7JLJ28/link-icon.webp" alt="link-icon" border="0">';
    icons["list"]["ordered"] =
      '<img src="https://i.ibb.co/Q7WRxw9Y/list-ol-icon.webp" alt="list-ol-icon" border="0">';
    icons["list"]["bullet"] =
      '<img src="https://i.ibb.co/rfH1rbT7/list-ul-icon.webp" alt="list-ul-icon" border="0">';

    const dashQuill = new Quill("#dash-editor", {
      modules: {
        toolbar: [
          ["bold", "italic", "link"],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
      },
      placeholder: "Tier Description...",
      theme: "snow",
    });

    // Add Tailwind classes after Quill is initialized
    const container = document.querySelector(".dash-quill-container");
    if (container) {
      const toolbar = container.querySelector(".ql-toolbar.ql-snow");
      if (toolbar) {
        toolbar.classList.add(
          "flex",
          "p-0",
          "pb-2",
          "rounded-t-[0.625rem]",
          "!border-0"
        );

        const formats = toolbar.querySelectorAll(".ql-formats");
        formats.forEach((format) => {
          format.classList.add("m-0", "gap-1", "flex", "items-center");
        });

        const buttons = toolbar.querySelectorAll("button");
        buttons.forEach((button) => {
          button.classList.add(
            "!p-0",
            "!w-8",
            "!h-8",
            "!hover:bg-gray-50",
            "!active:bg-gray-50"
          );
        });
      }

      const editorContainer = container.querySelector(".ql-container.ql-snow");
      if (editorContainer) {
        editorContainer.classList.add(
          "rounded-b-[0.625rem]",
          "min-h-[100px]",
          "overflow-y-auto",
          "!border-0"
        );
      }

      const editorContent = container.querySelector(".ql-editor");
      if (editorContent) {
        editorContent.classList.add(
          "!p-0",
          "!text-black",
          "!text-[0.9375rem]",
          "!font-normal"
        );
      }

      const tooltips = container.querySelectorAll(".ql-tooltip");
      tooltips.forEach((tooltip) => {
        tooltip.classList.add("!left-0");
        const input = tooltip.querySelector('input[type="text"]');
        if (input) input.classList.add("!w-auto");
      });
    }
  }

  // =================== SELECT DROPDOWN LOGIC ===================
  const customSelects = document.querySelectorAll(".dash-select");

  customSelects.forEach((select) => {
    const trigger = select.querySelector(".dash-select__trigger span");
    const options = select.querySelectorAll(".dash-option");
    const realSelect = select.parentElement.querySelector(".dash-real-select");

    const selectedOption = select.querySelector(".dash-option.selected");
    if (selectedOption) {
      trigger.textContent =
        selectedOption.querySelector("span").textContent || "";
      realSelect.value = selectedOption.dataset.value;
    }

    select.addEventListener("click", function (e) {
      e.stopPropagation();
      document.querySelectorAll(".dash-select").forEach((s) => {
        if (s !== select) {
          s.classList.remove("open");
          s.querySelector(".select-arrow")?.classList.remove("rotate-180");
          const opts = s.querySelector(".dash-options-container");
          opts?.classList.add("opacity-0", "invisible", "pointer-events-none");
          opts?.classList.remove("opacity-100", "visible", "pointer-events-auto");
        }
      });

      positionDropdown(this);
      this.classList.toggle("open");
      const arrow = this.querySelector(".select-arrow");
      const optionsContainer = this.querySelector(".dash-options-container");

      if (this.classList.contains("open")) {
        arrow?.classList.add("rotate-180");
        optionsContainer?.classList.remove(
          "opacity-0",
          "invisible",
          "pointer-events-none"
        );
        optionsContainer?.classList.add(
          "opacity-100",
          "visible",
          "pointer-events-auto"
        );
      } else {
        arrow?.classList.remove("rotate-180");
        optionsContainer?.classList.add(
          "opacity-0",
          "invisible",
          "pointer-events-none"
        );
        optionsContainer?.classList.remove(
          "opacity-100",
          "visible",
          "pointer-events-auto"
        );
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", function (e) {
        e.stopPropagation();

        options.forEach((opt) => {
          opt.classList.remove("selected");
          const optSpan = opt.querySelector("span");
          optSpan.classList.remove(
            "bg-white",
            "font-medium",
            "border-b",
            "border-[#eaecf0]"
          );
          optSpan.classList.add("font-normal");
        });

        this.classList.add("selected");
        const optionSpan = this.querySelector("span");
        optionSpan.classList.add(
          "bg-white",
          "font-medium",
          "border-b",
          "border-[#eaecf0]"
        );
        optionSpan.classList.remove("font-normal");

        trigger.textContent = optionSpan.textContent;
        realSelect.value =
          this.dataset.value || optionSpan.textContent.toLowerCase();

        select.classList.remove("open");
        realSelect.dispatchEvent(new Event("change"));
      });
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dash-select").forEach((select) => {
      select.classList.remove("open");
    });
  });

  function positionDropdown(select) {
    const optionsContainer = select.querySelector(".dash-options-container");
    const rect = select.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const optionsHeight = select.querySelector(".dash-options").scrollHeight;

    select.classList.remove("upward");
    optionsContainer.classList.remove("bottom-[calc(100%+0.5rem)]");
    optionsContainer.classList.add("top-[calc(100%+0.5rem)]");

    if (spaceBelow < optionsHeight && spaceAbove > spaceBelow) {
      select.classList.add("upward");
      optionsContainer.classList.remove("top-[calc(100%+0.5rem)]");
      optionsContainer.classList.add("bottom-[calc(100%+0.5rem)]");
    }
  }

  window.addEventListener("resize", function () {
    document.querySelectorAll(".dash-select.open").forEach((select) => {
      positionDropdown(select);
    });
  });
});


tailwind.config = {
          darkMode: 'class',
          theme: {
          extend: {
              fontFamily: {
              sans: ['Poppins', 'Inter', 'Montserrat', 'Open Sans', 'arial', 'sans-serif'],
              },
              colors: {
                  // Light mode colors
                  primary: {
                      DEFAULT: '#2563eb',
                      light: '#3b82f6',
                      dark: '#1d4ed8'
                  },
                  error: {
                      DEFAULT: '#dc2626',
                      light: '#ef4444',
                      dark: '#b91c1c'
                  },
                  success: {
                      DEFAULT: '#16a34a',
                      light: '#22c55e',
                      dark: '#15803d'
                  },
                  text: {
                      DEFAULT: '#334155',
                      light: '#64748b',
                      dark: '#1e293b',
                      dash: '#667085',
                      dashDark: '#101828'
                  },
                  border: {
                      DEFAULT: '#cbd5e1',
                      light: '#e2e8f0',
                      dark: '#94a3b8',
                      dash: '#D0D5DD'
                  },

                  // Dashboard specific colors (light mode)
                  dash: {
                      text: '#667085',
                      border: '#D0D5DD',
                      warning: '#ff4405',
                      warningLight: '#FF7C1E',
                      success: '#07f468',
                      successLight: '#39FF14',
                      published: '#D1E0FF',
                      draft: '#FFFFFF',
                      tab: {
                          active: '#000',
                          inactive: '#F06',
                          bg: 'rgba(251,91,162,0.15)'
                      },
                      bg: {
                          light: 'rgba(255,255,255,0.5)',
                          lighter: 'rgba(255,255,255,0.3)',
                          warning: 'rgba(255,68,5,0.1)'
                      }
                  },

                  // Dark mode colors
                  dark: {
                      primary: '#3b82f6',
                      error: '#f87171',
                      success: '#4ade80',
                      text: '#e2e8f0',
                      border: '#4b5563',
                      bg: '#1a202c',
                      surface: '#2d3748',

                      // Dashboard colors (dark mode)
                      dash: {
                          text: '#a0aec0',
                          border: '#4a5568',
                          warning: '#ff693e',
                          warningLight: '#ff8c5a',
                          success: '#0aff78',
                          successLight: '#4dff9d',
                          published: '#2c5282',
                          draft: '#4a5568',
                          tab: {
                              active: '#ffffff',
                              inactive: '#f687b3',
                              bg: 'rgba(251,91,162,0.08)'
                          },
                          bg: {
                              light: 'rgba(26,32,44,0.5)',
                              lighter: 'rgba(26,32,44,0.3)',
                              warning: 'rgba(201,51,0,0.1)'
                          }
                      }
                  },

                  // Additional colors from your new components
                  'dash-text': '#0c111d',
                  'dash-success': '#07f468',
                  'dash-purple': '#4d20ff',
                  'dash-pink': '#fb5ba2',
                  'dash-blue': '#22CCEE',
                  'dash-yellow': '#fdb022',
                  'dash-orange': '#ff4405',
                  'dash-gray': {
                      50: '#F9FAFB',
                      100: '#F2F4F7',
                      200: '#EAECF0',
                      300: '#D0D5DD',
                      400: '#98A2B3',
                      500: '#667085',
                      600: '#475467',
                      700: '#344054',
                      800: '#1D2939',
                      900: '#101828'
                  },
                  'dash-dark': '#0c111d',
                  'dash-light': '#f9fafb',
                  'dash-toast-notice': '#22CCEE',
                  'dash-toast-alert': '#FDB022',
                  'dash-toast-error': '#FF4405'
              },
              borderRadius: {
                  'input': '4px',
                  // Dash border radii
                  'dash-input': '0.125rem',
                  'dash-tag': '3.125rem',
                  'dash-toggle': '0.75rem',
                  'dash-dropdown': '0.5rem',
                  'dash-tab': '3rem',
                  'dash-card': '0.125rem',
                  'dash-button': '0.313rem'
              },
              boxShadow: {
                  'input': '0 0 0 3px rgba(37, 99, 235, 0.2)',
                  // Dash shadows
                  'dash-input': '0px 1px 2px 0px #1018280D',
                  'dash-toggle': '0 1px 3px 0 rgba(16, 24, 40, 0.1), 0 1px 2px 0 rgba(16, 24, 40, 0.06)',
                  'dash-tab': '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
                  'dash-dropdown': '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  'dash-toast': '0 4px 8px -2px rgba(16, 24, 40, 0.1), 0 2px 4px -2px rgba(16, 24, 40, 0.06)',
                  'dash-tooltip': '0 4px 8px -2px rgba(16, 24, 40, 0.1), 0 2px 4px -2px rgba(16, 24, 40, 0.06)',
                  'dash-button': '4px 4px 0 0 #000',
                  'dash-popup': '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
                  // Dark mode shadows
                  'dark-input': '0 0 0 3px rgba(59, 130, 246, 0.3)',
                  'dark-dash-input': '0px 1px 2px 0px rgba(0, 0, 0, 0.25)'
              },
              keyframes: {
              'tooltips-vert': {
                  'to': {
                  opacity: '0.9',
                  transform: 'translate(-50%, 0)'
                  }
              },
              'tooltips-horz': {
                  'to': {
                  opacity: '0.9',
                  transform: 'translate(0, -50%)'
                  }
              }
              },
              animation: {
              'tooltips-vert': 'tooltips-vert 300ms ease-out forwards',
              'tooltips-horz': 'tooltips-horz 300ms ease-out forwards'
              }
          }
          }
      }
</script>
