const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  slidesPerView: 1,
  mousewheel: {
    forceToAxis: true,
  },
    autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// swiper element
const swiperEl = document.querySelector("swiper-container");

// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    1199: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
    1400: {
      slidesPerView: 1,
    },
  },
  on: {
    init() {},
  },
};
