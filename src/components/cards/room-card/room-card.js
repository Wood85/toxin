import '../../form-elements/rate-button/rate-button'
import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.room-card__slider-button-next',
        prevEl: '.room-card__slider-button-prev',
    }
})