const brands_slider = new Swiper(".brands_slider", {
  slidesPerView: 5,
  spaceBetween: 44,
  speed: 2500,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    enabled: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 44,
    },
    1200: {
      slidesPerView: 4,
    },
    1520: {
      slidesPerView: 5,
    },
  },
});
