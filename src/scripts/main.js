import '../styles/main.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import '../components/cards/room-search-form/room-search-form';
import '../components/headers-and-footers/header/header';
import Swiper, {EffectFade, Autoplay} from 'swiper';

Swiper.use([EffectFade, Autoplay]);


const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 10000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
