import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);
const hero__swiper = new Swiper('.hero__swiper', {
  allowTouchMove: true,
  loop: true,
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
});
