var mySwiper = new Swiper('.swiper-container', {

    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})