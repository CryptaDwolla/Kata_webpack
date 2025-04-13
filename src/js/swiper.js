
  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      initialSlide: 0,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          enabled: false
        }
      }
    })
  })

