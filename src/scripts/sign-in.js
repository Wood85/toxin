import '../styles/sign-in.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import '../components/headers-and-footers/header/header';
import Swiper, {EffectFade, Autoplay} from 'swiper';

Swiper.use([EffectFade, Autoplay]);

new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});