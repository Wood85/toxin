import '../../../components/cards/room-search-form/room-search-form'
import '../../../components/headers-and-footers/header/header'

import Swiper from 'swiper'
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})
