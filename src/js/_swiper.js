const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
    1281: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
});
