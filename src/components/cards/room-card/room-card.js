import '../../form-elements/rate-button/rate-button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Swiper, { Navigation, Pagination, EffectFade} from 'swiper';


(function() {
  Swiper.use([Navigation, Pagination, EffectFade])
  const swiper = new Swiper('.swiper', {
    loop: true,
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
  });
}());