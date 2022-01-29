import '../../form-elements/rate-button/rate-button'
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'

Swiper.use([Navigation, Pagination, EffectFade, Autoplay])

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.room-card__slider-button-next',
        prevEl: '.room-card__slider-button-prev',
    }
})