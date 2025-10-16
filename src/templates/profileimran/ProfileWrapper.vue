<template>

  <div class="bg-black font-sans p-0 m-0 box-border overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-order-style:none] [scrollbar-width:none]">
    <!-- profile-id -->
    <div>
      <!-- main-slider -->
      <HeroBackgroundSlider />

      <!-- header-component -->
      <HeaderBar />

        <!-- header user profile section -->
        <HeaderUserProfileDesktop />

        <!-- Header User Profile Section for large & small mobile (767 - 300) -->
        <HeaderUserProfileMobile />

      <!-- container -->
      <section
        class="relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_-0.17%,rgba(0,0,0,0.5)_100%)]"
      >
        <!-- profile-hero -->
        <section
          data-section="banner"
          class="w-full h-screen relative [transition:opacity_0.8s] z-0"
        >
          <!-- header -->
          <HeaderComponent 
            websiteLogoFull="https://i.ibb.co.com/27Gt3hwK/website-logo.webp"
            websiteLogoSmall="https://i.ibb.co.com/gZsWNR4Q/our-website-full-white-logo.webp"
            cartIcon="https://i.ibb.co.com/0wRg4N7/cart-1.webp"
            bellIcon="https://i.ibb.co.com/f7MgMrs/bell-1.webp"
            globeIcon="https://i.ibb.co.com/zhwwszjh/globe-1.webp"
            avatarImage="https://i.ibb.co.com/jk1F8MqJ/featured-media-bg.webp"
          />

          <!-- profile-info -->
          <ProfileInfo 
            username="@sukii19"
            verifiedIcon="https://i.ibb.co.com/j9XKPcfK/verified-green.webp"
            :followers="35"
            :likes="14"
            :subscribers="2"
            avatarSrc="https://i.ibb.co.com/jk1F8MqJ/featured-media-bg.webp"
          />

          <!-- bottom-section -->
          <div
            class="flex flex-col items-end absolute left-0 bottom-0 w-full pb-14 px-0 z-[-1] sm:pb-12 md:flex-row md:px-4 md:pb-6 xl:px-12 xl:pb-12"
          >
            <!-- hero-info -->
            <div
              class="flex flex-col gap-2 w-full max-[580px]:justify-end max-[580px]:h-screen max-[580px]:bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_25%,rgba(0,0,0,0.15)_75%)] md:block lg:w-1/2"
            >
              <div class="flex flex-col gap-1 px-2.5 md:gap-4 md:px-0 xl:gap-0">
                <h1
                  class="hidden items-center gap-1 text-xl leading-normal font-semibold text-white md:flex md:text-5xl md:leading-[3.75rem] xl:text-6xl xl:leading-[4.5rem] xl:mb-5 xl:mt-[.67em]"
                >
                  Sukii19
                  <div class="flex w-3.5 h-3.5 md:hidden">
                    <img
                      src="https://i.ibb.co.com/nMhY8CpS/svgviewer-png-output-22.webp"
                      alt="verified-tick"
                      class="w-3.5 h-3.5"
                    />
                  </div>
                </h1>

                <!-- Mobile Avatar message online row -->
                <div class="flex gap-2 md:hidden">
                  <!-- Avatar Wrapper -->
                  <div class="relative">
                    <!-- avatar -->
                    <div
                      class="bg-[#2970FF] w-16 h-16 aspect-square rounded-[25%_75%_50%_51%_/_45%_65%_36%_55%] relative overflow-hidden"
                    >
                      <img
                        src="https://i.ibb.co.com/jk1F8MqJ/featured-media-bg.webp"
                        alt="featured-media-bg"
                        class="w-full h-full absolute top-0 left-0 object-cover"
                      />
                    </div>

                    <!-- Online-user-signal -->
                    <span
                      class="block absolute right-[0.313rem] bottom-[0.188rem] w-2 h-2 bg-[#07F468] rounded-full"
                    ></span>
                  </div>
                </div>

                <div class="flex flex-col gap-1 md:hidden">
                  <h1
                    class="hidden items-center gap-1 text-xl leading-normal font-semibold text-white md:flex md:text-5xl md:leading-[3.75rem] xl:text-6xl xl:leading-[4.5rem] xl:mb-5"
                  >
                    Sukii19
                    <div class="flex w-3.5 h-3.5 md:hidden">
                      <img
                        src="https://i.ibb.co.com/nMhY8CpS/svgviewer-png-output-22.webp"
                        alt="verified-tick"
                        class="w-3.5 h-3.5"
                      />
                    </div>
                  </h1>

                  <!-- profile-info-list -->
                  <div class="flex items-start gap-3 opacity-70">
                    <div class="flex items-center gap-1">
                      <span class="flex items-center">
                        <img
                          src="https://i.ibb.co.com/gZfGQhSp/profile.webp"
                          alt="profile"
                          class="w-3.5 h-3.5 [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(9%)_saturate(72%)_hue-rotate(183deg)_brightness(105%)_contrast(91%)]"
                        />
                      </span>
                      <span class="text-sm font-light text-[#EAECF0]">35</span>
                    </div>

                    <div class="flex items-center gap-1">
                      <span class="flex items-center">
                        <img
                          src="https://i.ibb.co.com/vCFQPp7N/heart.webp"
                          alt="heart"
                          class="w-3.5 h-3.5 [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(9%)_saturate(72%)_hue-rotate(183deg)_brightness(105%)_contrast(91%)]"
                        />
                      </span>
                      <span class="text-sm font-light text-[#EAECF0]">14</span>
                    </div>

                    <div class="flex items-center gap-1">
                      <span class="flex items-center">
                        <img
                          src="https://i.ibb.co.com/8LGTj3jC/logo.webp"
                          alt="logo"
                          class="w-3.5 h-3.5 [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(9%)_saturate(72%)_hue-rotate(183deg)_brightness(105%)_contrast(91%)]"
                        />
                      </span>
                      <span class="text-sm font-light text-[#EAECF0]">2</span>
                    </div>
                  </div>

                  <div class="flex gap-1">
                    <span
                      class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
                      >@sukii19</span
                    >
                    <span
                      class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
                      >/</span
                    >
                    <span
                      class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
                      >22</span
                    >
                    <span
                      class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
                      >/</span
                    >
                    <span
                      class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
                      >Hong Kong</span
                    >
                  </div>
                </div>

                <div class="flex items-center gap-1 py-2 md:hidden">
                  <!-- tip-button -->
                  <div class="flex gap-1">
                    <div
                      class="flex justify-end relative pl-[1.875rem] md:flex-grow md:pl-0"
                    >
                      <span
                        class="absolute top-1/2 left-0 -translate-y-1/2 z-[1]"
                      >
                        <img
                          src="https://i.ibb.co.com/DfbNLYFj/token.webp"
                          alt="token"
                          class="w-12 h-12"
                        />
                      </span>

                      <span
                        class="flex justify-center items-center text-sm text-white w-[5.594rem] h-8 px-2 border border-[#e9e5d380] bg-black/10 backdrop-blur-[25px] [transition:all_0.3s_ease-in-out] max-[580px]:rounded-[0_50px_50px_0] max-[580px]:[border:0.5px_solid_#FF9AD0] max-[580px]:[background:linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(180deg,rgba(232,3,174,0.54)_0%,rgba(232,3,174,0.60)_100%)] max-[580px]:shadow-[0_0_10px_0_rgba(232,3,174,0.30),0_0_10px_0_rgba(232,3,174,0.10),0_ 0_10px_0_rgba(232,3,174,0.30)_inset] md:w-[90%]"
                        >Tip</span
                      >
                    </div>
                  </div>

                  <span
                    class="flex justify-center items-center w-8 h-8 bg-black/10 border border-[#e9e5d380] rounded-full [transition:all_0.3s_ease-in-out] cursor-pointer md:w-12 md:h-12"
                  >
                    <img
                      src="https://i.ibb.co.com/vCFQPp7N/heart.webp"
                      alt="heart"
                      class="w-4 h-4 [filter:brightness(0)_saturate(100%)_invert(84%)_sepia(12%)_saturate(222%)_hue-rotate(12deg)_brightness(105%)_contrast(97%)]"
                    />
                  </span>

                  <span
                    class="flex justify-center items-center w-8 h-8 bg-black/10 border border-[#e9e5d380] rounded-full [transition:all_0.3s_ease-in-out] cursor-pointer md:w-12 md:h-12"
                  >
                    <img
                      src="https://i.ibb.co.com/21KzYNJ8/link.webp"
                      alt="link"
                      class="w-4 h-4 [filter:brightness(0)_saturate(100%)_invert(84%)_sepia(12%)_saturate(222%)_hue-rotate(12deg)_brightness(105%)_contrast(97%)]"
                    />
                  </span>

                  <div class="relative cursor-pointer">
                    <span
                      class="flex justify-center items-center w-8 h-8 rounded-full [transition:all_0.3s_ease-in-out] md:w-12 h-12"
                    >
                      <img
                        src="https://i.ibb.co.com/cSNVr9ks/3-dot.webp"
                        alt="3-dot"
                        class="w-4 h-4 [filter:brightness(0)_saturate(100%)_invert(84%)_sepia(12%)_saturate(222%)_hue-rotate(12deg)_brightness(105%)_contrast(97%)]"
                      />
                    </span>
                  </div>
                </div>

                <p class="xl:mb-5">
                  <span
                    class="text-base text-white line-clamp-2 sm:leading-7 md:text-lg"
                  ></span>
                  <span
                    class="hidden text-xs leading-normal font-semibold text-[#07F468] md:text-sm"
                  >
                    <span
                      class="text-xs leading-normal font-medium text-white md:text-sm md:font-semibold"
                      >...</span
                    >
                    Read more
                  </span>
                </p>

                <div
                  class="hidden items-center gap-[0.3125rem] py-2 md:flex md:py-0"
                >
                  <span
                    class="flex justify-center items-center w-8 h-8 bg-black/10 border border-[#e9e5d380] rounded-full [transition:all_0.3s_ease-in-out] cursor-pointer md:w-12 md:h-12"
                  >
                    <img
                      src="https://i.ibb.co.com/vCFQPp7N/heart.webp"
                      alt="heart"
                      class="w-4 h-4 md:w-6 md:h-6 [filter:brightness(0)_saturate(100%)_invert(84%)_sepia(12%)_saturate(222%)_hue-rotate(12deg)_brightness(105%)_contrast(97%)]"
                    />
                  </span>

                  <span
                    class="flex justify-center items-center w-8 h-8 bg-black/10 border border-[#e9e5d380] rounded-full [transition:all_0.3s_ease-in-out] cursor-pointer md:w-12 md:h-12"
                  >
                    <img
                      src="https://i.ibb.co.com/21KzYNJ8/link.webp"
                      alt="link"
                      class="w-4 h-4 md:w-6 md:h-6 [filter:brightness(0)_saturate(100%)_invert(84%)_sepia(12%)_saturate(222%)_hue-rotate(12deg)_brightness(105%)_contrast(97%)]"
                    />
                  </span>

                  <div class="relative cursor-pointer">
                    <span
                      class="flex justify-center items-center w-8 h-8 rounded-full [transition:all_0.3s_ease-in-out] md:w-12 h-12"
                    >
                      <img
                        src="https://i.ibb.co.com/cSNVr9ks/3-dot.webp"
                        alt="3-dot"
                        class="w-4 h-4 md:w-6 md:h-6 [filter:brightness(0)_saturate(100%)_invert(84%)_sepia(12%)_saturate(222%)_hue-rotate(12deg)_brightness(105%)_contrast(97%)]"
                      />
                    </span>
                  </div>
                </div>

                <!-- Gallery Carousel for Tablet and Mobile -->
                <div
                  id="splide02"
                  class="splide flex w-full py-[.3125rem] [transition:opacity_0.8s] relative md:py-[0.313rem] xl:hidden"
                  role="region"
                  aria-roledescription="carousel"
                >
                  <!-- slider-track -->
                  <div
                    class="splide__track w-full px-0 mx-auto md:mr-[unset]"
                    id="splide02-track"
                  >
                    <!-- slider list -->
                    <ul
                      id="splide02-list"
                      class="splide__list w-full"
                      role="presentation"
                    >
                      <!-- slider item 1 -->
                      <li
                        class="splide__slide flex flex-col items-start gap-4 z-[-2] border-l-4 border-r-4 border-transparent bg-center bg-cover bg-no-repeat max-[580px]:rounded-sm opacity-50 max-[580px]:!border-none is-active [&.is-active]:opacity-100"
                        style="background-image: url('https://i.ibb.co.com/F4cf3W53/profile-slidein-bg.webp')"
                      >
                        <img
                          class="hidden"
                          src="https://i.ibb.co.com/F4cf3W53/profile-slidein-bg.webp"
                          alt="profile-slidein-bg"
                        />
                      </li>

                      <li
                        class="splide__slide flex flex-col items-start gap-4 z-[-2] border-l-4 border-r-4 border-transparent bg-center bg-cover bg-no-repeat max-[580px]:rounded-sm opacity-50 max-[580px]:!border-none is-active [&.is-active]:opacity-100"
                        style="background-image: url('https://i.ibb.co.com/bjGQxr5S/sample-bg-image.webp')"
                      >
                        <img
                          class="hidden"
                          src="https://i.ibb.co.com/bjGQxr5S/sample-bg-image.webp"
                          alt="sample-bg-image"
                        />
                      </li>

                      <li
                        class="splide__slide flex flex-col items-start gap-4 z-[-2] border-l-4 border-r-4 border-transparent bg-center bg-cover bg-no-repeat max-[580px]:rounded-sm opacity-50 max-[580px]:!border-none is-active [&.is-active]:opacity-100"
                        style="background-image: url('https://i.ibb.co.com/jPw7ChWb/auth-bg.webp')"
                      >
                        <img
                          class="hidden"
                          src="https://i.ibb.co.com/jPw7ChWb/auth-bg.webp"
                          alt="auth-bg"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="flex md:mt-8 xl:mt-16">
                <!-- new-subscriber-button -->
                <div
                  class="flex justify-center items-end min-w-[45rem] max-w-[45rem] w-full h-20 cursor-pointer sm:px-5 md:relative"
                >
                  <!-- buy-now-button -->
                  <button
                    class="flex justify-center items-center gap-1 w-[53%] h-[3.75rem] absolute left-0 bg-black flex-grow px-6 py-[0.313rem] shadow-[0_0_24px_0_rgba(251,4,100,0.25)] md:rounded-[16px_0_0_16px] lg:w-[27.875rem] group/button"
                  >
                    <span
                      class="hidden absolute bottom-1 left-0 text-white w-[6.875rem] h-[6.25rem] overflow-hidden md:block"
                    >
                      <span class="w-[6.875rem] h-[6.25rem] block relative">
                        <img
                          src="https://i.ibb.co.com/99P9hHTv/subscriber-btn-img.webp"
                          alt="subscriber-btn-img"
                          class="absolute bottom-0 left-0 opacity-100 [transition:all_0.5s_ease-in-out] transition-all duration-500 ease-in-out group-hover/button:animate-bouncedown"
                        />
                        <img
                          src="https://i.ibb.co.com/276TkNhV/subscriber-btn-hover-img.webp"
                          alt="subscriber-btn-hover-img"
                          class="absolute bottom-0 left-0 opacity-0 w-[3.75rem] [transition:all_0.5s_ease-in-out] transition-all duration-500 ease-in-out group-hover/button:animate-bouncup"
                        />
                      </span>
                    </span>

                    <!-- subscribe-hot-tag -->
                    <div
                      class="absolute bottom-12 left-[0.6875rem] text-black md:relative md:bottom-[unset] md:left-[unset]"
                    >
                      <span class="absolute left-[-0.75rem] z-[1] text-black">
                        <span
                          class="absolute top-1 w-[0.8125rem] h-3 shadow-[3px_0_4px_0_rgba(0,0,0,0.25)] z-[-3] text-black"
                        ></span>
                        <img
                          src="https://i.ibb.co.com/m5WBnbQ7/hot-offer.webp"
                          alt="hot-offer"
                          class="w-6 h-6 aspect-square"
                        />
                      </span>

                      <span
                        class="flex justify-center text-sm font-semibold text-black [background:linear-gradient(90deg,#F06_0%,#FF4A92_100%)] pl-3 pr-1.5 py-0.5 rounded backdrop-blur-[10px]"
                        >29% off</span
                      >
                    </div>

                    <!-- tier-price -->
                    <span
                      class="text-xs leading-6 font-medium whitespace-nowrap text-white md:text-sm"
                      >Starting
                      <span
                        class="text-lg leading-[2rem] font-medium text-white -mr-1 md:text-3xl md:leading-[2.375rem] md:-mr-2"
                      >
                        $32
                      </span>
                      <span
                        class="text-xs leading-6 font-medium whitespace-nowrap text-white line-through md:text-sm"
                        >45</span
                      >
                      /mo
                    </span>
                  </button>

                  <!-- subscribe-button -->
                  <div
                    class="absolute right-0 flex flex-col justify-center items-center w-1/2 h-20 min-h-[4.5] pl-12 pr-6 py-4 md:right-4 md:min-w-[20rem] lg:right-0 lg:w-auto"
                  >
                    <div
                      class="absolute flex flex-col justify-center items-center gap-2.5 w-full h-20 min-h-[4.5] md:min-w-[20rem] md:w-[-webkit-fill-available] lg:w-auto"
                    >
                      <!-- shape-wrapper -->
                      <div
                        class="absolute h-20 left-[-1.65625rem] sm:left-[-1.625rem]"
                      >
                        <img
                          src="https://i.ibb.co.com/DHJWhq4f/subscriber-button-shape.webp"
                          alt="subscriber-button-shape"
                          class="w-[1.75rem] h-full"
                        />
                      </div>

                      <button
                        class="flex justify-center items-center self-stretch px-3 py-[0.313rem] bg-[#FB0464] flex-grow md:rounded-[0_16px_16px_0] lg:max-w-[18.9375rem]"
                      >
                        <span
                          class="text-lg font-medium text-white uppercase whitespace-nowrap md:text-2xl lg:text-xl lg:leading-normal xl:text-2xl"
                          >SUBSCRIBE</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- navigation Section for mobile -->
              <div
                class="absolute bottom-0 flex w-full [background:linear-gradient(180deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.50)_25%,rgba(0,0,0,0.01)_100%)] backdrop-blur-[40px] sm:[background:unset] sm:backdrop-blur-0 md:hidden"
              >
                <ul
                  class="flex flex-row items-center w-full overflow-x-auto whitespace-nowrap flex-wrap"
                >
                  <!-- menu-item -->
                  <li
                    class="relative flex justify-center gap-1 opacity-70 [border-bottom:1.5px_solid_transparent] group active [&.active]:[border-bottom:1.5px_solid_#07f468] [&.active]:opacity-100 max-[580px]:[&.active]:[border-bottom:1.5px_solid_#E7E5E4] flex-grow"
                  >
                    <div
                      class="flex justify-center flex-grow max-[325px]:px-2 max-[325px]:py-0 px-4 py-[0.639rem] sm:px-4 sm:py-0"
                    >
                      <span class="block pt-2 pb-2">
                        <span
                          class="block text-sm font-medium text-[#e7e5e4] max-[580px]:group-hover:text-[#e7e5e4] max-[580px]:group-[.active]:text-[#e7e5e4] group-hover:text-[#07f468] group-[.active]:text-[#07f468]"
                          >Media</span
                        >
                      </span>

                      <div
                        class="text-[0.625rem] leading-normal font-medium text-[#07f468]"
                      >
                        18
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- profile options -->
            <div class="hidden w-1/2 xl:block">
              <div
                id="splide03"
                class="splide w-full [transition:opacity_0.8s]"
              >
                <!-- slider-track -->
                <div
                  class="splide__track w-[80%] ml-auto px-0"
                  id="splide03-track"
                >
                  <!-- slider list -->
                  <ul
                    id="splide03-list"
                    class="splide__list w-full"
                    role="presentation"
                  >
                    <li
                      class="splide__slide flex flex-col items-start gap-4 relative opacity-50 p-4 bg-cover bg-center bg-no-repeat [transform:scaleY(70%)] [transition:transform_0.2s] z-[-2] [&.is-prev]:flex [&.is-prev]:[transform:scaleY(90%)] [&.is-prev]:z-[-1] [&.is-next]:flex [&.is-next]:[transform:scaleY(90%)] [&.is-next]:z-[-1] [&.is-active]:flex [&.is-active]:!w-[40%] [&.is-active]:[transform:scale(100%,100%)] [&.is-active]:rounded [&.is-active]:opacity-100 [&.is-active]:z-[1] cursor-pointer"
                      style="background-image: url('https://i.ibb.co.com/F4cf3W53/profile-slidein-bg.webp')"
                    >
                      <img
                        class="hidden"
                        src="https://i.ibb.co.com/F4cf3W53/profile-slidein-bg.webp"
                        alt="profile-slidein-bg"
                      />
                    </li>

                    <li
                      class="splide__slide flex flex-col items-start gap-4 relative opacity-50 p-4 bg-cover bg-center bg-no-repeat [transform:scaleY(70%)] [transition:transform_0.2s] z-[-2] [&.is-prev]:flex [&.is-prev]:[transform:scaleY(90%)] [&.is-prev]:z-[-1] [&.is-next]:flex [&.is-next]:[transform:scaleY(90%)] [&.is-next]:z-[-1] [&.is-active]:flex [&.is-active]:!w-[40%] [&.is-active]:[transform:scale(100%,100%)] [&.is-active]:rounded [&.is-active]:opacity-100 [&.is-active]:z-[1] cursor-pointer"
                      style="background-image: url('https://i.ibb.co.com/bjGQxr5S/sample-bg-image.webp')"
                    >
                      <img
                        class="hidden"
                        src="https://i.ibb.co.com/bjGQxr5S/sample-bg-image.webp"
                        alt="sample-bg-image"
                      />
                    </li>

                    <li
                      class="splide__slide flex flex-col items-start gap-4 relative opacity-50 p-4 bg-cover bg-center bg-no-repeat [transform:scaleY(70%)] [transition:transform_0.2s] z-[-2] [&.is-prev]:flex [&.is-prev]:[transform:scaleY(90%)] [&.is-prev]:z-[-1] [&.is-next]:flex [&.is-next]:[transform:scaleY(90%)] [&.is-next]:z-[-1] [&.is-active]:flex [&.is-active]:!w-[40%] [&.is-active]:[transform:scale(100%,100%)] [&.is-active]:rounded [&.is-active]:opacity-100 [&.is-active]:z-[1] cursor-pointer"
                      style="background-image: url('https://i.ibb.co.com/jPw7ChWb/auth-bg.webp')"
                    >
                      <img
                        class="hidden"
                        src="https://i.ibb.co.com/jPw7ChWb/auth-bg.webp"
                        alt="auth-bg"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- bottom-section -->
        <div
          class="flex flex-col items-stretch max-[580px]:bg-black/25 opacity-100 md:overflow-hidden xl:overflow-auto"
        >
          <!-- media-tab-content -->
          <div
            class="hidden active [&.active]:block relative flex-1 min-h-[65.25rem] pt-20 md:pt-32"
          >

            <!-- subscription-section -->
            <section class="mb-8">
              <!-- Media Grid Sections -->
              <MediaGridSection 
                title="Featured Content" 
                count="12" 
                :items="featuredItems" 
              />
              
              <MediaGridSection 
                title="Subscription Content" 
                count="8" 
                :items="subscriptionItems" 
              />
              
              <MediaGridSection 
                title="Pay to View" 
                count="15" 
                :items="payToViewItems" 
              />

              <!-- arrow-section -->
              <div class="flex justify-center cursor-pointer">
                <div class="flex justify-center pt-5">
                  <span
                    class="flex gap-1 w-8 h-8 whitespace-nowrap text-base text-white"
                  >
                    <img
                      src="https://i.ibb.co.com/mKdm9ZK/chevron-down.webp"
                      alt="chevron-down"
                      class="w-auto h-8"
                    />
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import HeroBackgroundSlider from '@/components/profile/HeroBackgroundSlider.vue'
import HeaderBar from '@/components/profile/HeaderBar.vue'
import MediaGridSection from '@/components/profile/MediaGridSection.vue'
import HeaderComponent from '@/components/profile/HeaderComponent.vue'
import ProfileInfo from '@/components/profile/ProfileInfo.vue'
const payToViewItems = [
  {
    thumb: 'https://i.ibb.co/F4cf3W53/profile-slidein-bg.webp',
    title: 'Building successful teams through collaboration',
    duration: '14:09',
    age: '2d',
    likes: 0,
    views: 0,
    videoSrc: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    thumb: 'https://i.ibb.co/bjGQxr5S/sample-bg-image.webp',
    title: 'Sample background feature',
    duration: '14:09',
    age: '2d',
    likes: 0,
    views: 0,
    videoSrc: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    thumb: 'https://i.ibb.co/jPw7ChWb/auth-bg.webp',
    title: 'Auth background story',
    duration: '14:09',
    age: '2d',
    likes: 0,
    views: 0,
    videoSrc: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  }
]

const subscriptionItems = [...payToViewItems]
const featuredItems = [...payToViewItems]
// Play video on hover
document.addEventListener('DOMContentLoaded', function() {
          const mediaCards = document.querySelectorAll('[data-media-card]');

          mediaCards.forEach(card => {
              const video = card.querySelector('video');

              if (video) {
                  card.addEventListener('mouseenter', function() {
                      video.play().catch(e => {
                          console.log('Video play failed:', e);
                      });
                  });

                  card.addEventListener('mouseleave', function() {
                      video.pause();
                      video.currentTime = 0; // Reset to start
                  });
              }
          });
      });

      // Ultra minimal blur on scroll
      (function() {
          window.addEventListener('scroll', () => {
              const scrollY = window.scrollY;
              const banner = document.querySelector('[data-section="banner"]');
              if (!banner) return;

              const start = 100, end = banner.clientHeight + 200, maxBlur = 25;
              let blur = scrollY <= start ? 0 : scrollY >= end ? maxBlur : ((scrollY - start) / (end - start)) * maxBlur;

              document.documentElement.style.setProperty('--blur', `${blur}px`);
          });
      })();

      window.addEventListener('scroll', function() {
          const scrollY = window.pageYOffset;
          const headerComponent = document.querySelector('[data-header-component]');

          if (scrollY > 480) {
              headerComponent.classList.add('scroll-active');
          } else {
              headerComponent.classList.remove('scroll-active');
          }
      });

      document.querySelectorAll('[data-media-list-container]').forEach(ul => {
      // Select the <li> items inside this specific <ul>
      const mediaCards = ul.querySelectorAll('[data-media-card]');

      mediaCards.forEach((card, index) => {
         card.addEventListener('mouseenter', () => {
            const a = card.querySelector('a');

            if (window.innerWidth >= 1365) {
            // Count columns per UL (reset per section)
            const col = (index % 5) + 1;

            // Reset first
            a.style.left = '50%';

            // Apply column-based positioning
            if (col === 1) {
               a.style.left = '75%'; // first column
            } else if (col === 5) {
               a.style.left = '25%'; // last column
            }
            }
         });

         card.addEventListener('mouseleave', () => {
            const a = card.querySelector('a');
            a.style.left = '50%'; // reset position
         });
      });
      });
</script>
