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

                <!-- Mobile Profile Info -->
                <ProfileMobileInfo :profile-data="profileData" />

                <!-- Profile Actions -->
                <ProfileActions 
                  @tip-click="handleTipClick"
                  @like-click="handleLikeClick"
                  @share-click="handleShareClick"
                  @more-click="handleMoreClick"
                />

                <div class="flex items-center gap-1 py-2 md:hidden" style="display: none;">
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


                <!-- Gallery Carousel for Tablet and Mobile -->
                <ProfileCarousel :carousel-items="carouselItems" />
              </div>

              <!-- Subscription Section -->
              <ProfileSubscription 
                :subscription-data="subscriptionData"
                @buy-click="handleBuyClick"
                @subscribe-click="handleSubscribeClick"
              />

              <!-- Navigation Section for mobile -->
              <ProfileNavigation 
                :navigation-items="navigationItems"
                @nav-click="handleNavClick"
              />
            </div>

            <!-- Desktop Carousel -->
            <ProfileDesktopCarousel 
              :carousel-items="carouselItems"
              @carousel-click="handleCarouselClick"
            />
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
import ProfileMobileInfo from '@/components/profile/ProfileMobileInfo.vue'
import ProfileActions from '@/components/profile/ProfileActions.vue'
import ProfileCarousel from '@/components/profile/ProfileCarousel.vue'
import ProfileSubscription from '@/components/profile/ProfileSubscription.vue'
import ProfileNavigation from '@/components/profile/ProfileNavigation.vue'
import ProfileDesktopCarousel from '@/components/profile/ProfileDesktopCarousel.vue'
import MediaGridSection from '@/components/profile/MediaGridSection.vue'
import HeaderComponent from '@/components/profile/HeaderComponent.vue'
import ProfileInfo from '@/components/profile/ProfileInfo.vue'
// Configuration for profile data
const profileData = {
  username: 'sukii19',
  displayName: 'Sukii19',
  avatar: 'https://i.ibb.co.com/jk1F8MqJ/featured-media-bg.webp',
  verified: true,
  isOnline: true,
  followers: 35,
  likes: 14,
  subscribers: 2,
  age: 22,
  location: 'Hong Kong'
}

// Configuration for subscription data
const subscriptionData = {
  price: 32,
  originalPrice: 45,
  discount: 29
}

// Configuration for carousel items
const carouselItems = [
  {
    image: 'https://i.ibb.co.com/F4cf3W53/profile-slidein-bg.webp',
    alt: 'profile-slidein-bg'
  },
  {
    image: 'https://i.ibb.co.com/bjGQxr5S/sample-bg-image.webp',
    alt: 'sample-bg-image'
  },
  {
    image: 'https://i.ibb.co.com/jPw7ChWb/auth-bg.webp',
    alt: 'auth-bg'
  }
]

// Configuration for navigation items
const navigationItems = [
  {
    label: 'Media',
    count: 18,
    active: true
  }
]

// Event handlers
const handleTipClick = () => {
  console.log('Tip clicked')
}

const handleLikeClick = () => {
  console.log('Like clicked')
}

const handleShareClick = () => {
  console.log('Share clicked')
}

const handleMoreClick = () => {
  console.log('More clicked')
}

const handleBuyClick = () => {
  console.log('Buy clicked')
}

const handleSubscribeClick = () => {
  console.log('Subscribe clicked')
}

const handleNavClick = (item) => {
  console.log('Navigation clicked:', item)
}

const handleCarouselClick = (item) => {
  console.log('Carousel clicked:', item)
}

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
