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

    // Map
    if (document.querySelector('#map')) {
        ymaps.ready(init);
        function init(){
            var map = new ymaps.Map("map", {
                center: [59.89304245512269,30.325025635581916],
                zoom: 17
            });

            const placemark = new ymaps.Placemark([59.89304245512269,30.325025635581916], {}, {

            });

            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            map.controls.remove('zoomControl'); // удаляем контрол зуммирования
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

            map.geoObjects.add(placemark);
        };
    }
});