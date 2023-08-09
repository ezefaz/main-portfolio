export const offerSlider = {
  slidesPerView: 'auto',
  speed: 1200,
  spaceBetween: 25,
  autoplay: true,
  loop: true,
  roundLengths: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
  navigation: false,
  breakpoints: {
    280: {
      slidesPerView: 1,
      navigation: false,
    },
    576: {
      slidesPerView: 1,
      navigation: false,
    },
    768: {
      slidesPerView: 2,
      navigation: false,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
};
