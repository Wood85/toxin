import '../../../components/cards/calendar/calendar'

import Swiper from 'swiper';

const mainSwiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }
})