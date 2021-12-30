import '../../../components/headers-and-footers/header/header';
import '../../../components/cards/account-registration/account-registration';

import Swiper from 'swiper'
const swiperForBackground = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})