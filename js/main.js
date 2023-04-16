if (document.querySelector('.swiper1')) {
    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoHeight: true,
      
    });
}

if (document.querySelector('.swiper2')) {
    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        slidesToShow: 1,
        spaceBetween: 30,
        loop: true,
        allowSlidePrev: false,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next2',
        },
      
    });
}

if (document.querySelector('.swiper3')) {
    const swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        slidesToShow: 1,
        spaceBetween: 30,
        loop: true,
      
        // Navigation arrows
        navigation: {
          prevEl: '.swiper-button-prev3',
          nextEl: '.swiper-button-next3',
        },
      
    });
}

window.addEventListener('DOMContentLoaded', () => {
    // Burger
    const burger = document.querySelector('.burger'),
          navBar = document.querySelector('.header__nav'),
          headerList = document.querySelector('.header__list'),
          listItems = document.querySelectorAll('.header__list-item'),
          subLists = document.querySelectorAll('.header__list-sublist'),
          closeBurger = document.querySelector('.header__close'),
          sliders = document.querySelectorAll('.swiper');

    burger.addEventListener('click', () => {
        navBar.classList.toggle('header__nav-active');
        headerList.classList.toggle('header__list-active');
        closeBurger.style.display = 'block';
        sliders.forEach(item => item.style.display = 'none');
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
    });

    closeBurger.addEventListener('click', () => {
        navBar.classList.toggle('header__nav-active');
        headerList.classList.toggle('header__list-active');
        closeBurger.style.display = 'none';
        sliders.forEach(item => item.style.display = '');
        document.body.style.overflow = '';
        document.body.style.position = '';
    })

    listItems.forEach(item => {
        if (item.getAttribute('data-sublist')) {
            item.addEventListener('click', () => {
                subLists.forEach(list => {
                    if (item.contains(list)) {
                        list.classList.toggle('sublist-show');
                    }
                });
            });
        } 
    });
});