const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
  
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    spaceBetween: 30,
    loop: true,
    allowSlidePrev: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
    },
  
});

window.addEventListener('DOMContentLoaded', () => {
    // Burger
    const burger = document.querySelector('.burger'),
          navBar = document.querySelector('.header__nav'),
          headerList = document.querySelector('.header__list'),
          closeBurger = document.querySelector('.header__close');

    burger.addEventListener('click', () => {
        navBar.classList.toggle('header__nav-active');
        headerList.classList.toggle('header__list-active');
        closeBurger.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
    });

    closeBurger.addEventListener('click', () => {
        navBar.classList.toggle('header__nav-active');
        headerList.classList.toggle('header__list-active');
        closeBurger.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.position = '';
    })
});