
const swiper = new Swiper('.portfolio-slider', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1330: {
      slidesPerView: 3,
    },

    900: {
      slidesPerView: 2,

    }
  }

});