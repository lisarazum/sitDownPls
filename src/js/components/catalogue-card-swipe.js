import Swiper, { Grid, Pagination } from 'swiper';
Swiper.use([Grid, Pagination]);
const catalogueCouchBlock = new Swiper('.catalogue-couch__block', {
  allowTouchMove: true,
  loop: false,
  slidesPerView: 3,
  slidesPerGroup : 1,
  grid: {
    fill: 'column',
    rows: 3,
  },

  pagination: {
    el: ".catalogue-couch__btns",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    // 568: {
    //   slidesPerView: 2,
    //   slidesPerColumn: 2,
    //   grid: {
    //     fill: 'row',
    //     rows: 3,
    //   },
    // },
    769: {
      slidesPerView: 3,
      slidesPerGroup : 1,
      grid: {
        fill: 'column',
        rows: 3,
      },
    }
  }
});
