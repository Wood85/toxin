import '../styles/sign-up.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import '../components/headers-and-footers/header/header';
import '../components/cards/account-registration/account-registration';

import Swiper, {EffectFade, Autoplay} from 'swiper';

Swiper.use([EffectFade, Autoplay])

const swiperForBackground = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});