import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper-1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
});

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },

  spaceBetween: 10,

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const swiper3 = new Swiper('.swiper-3', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },

  spaceBetween: 50,

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});