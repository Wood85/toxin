import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

(function() {
  new AirDatepicker('.js-calendar', {
    navTitles: {
      days: '<h2 class="calendar__title-month">MMMM</h2> <h2 class="calendar__title-year">yyyy</h2>'
    },
    prevHtml: '<img class="calendar__arrow-prev" src="./assets/img/arrow-prev.svg" alt="arrow-prev"/>',
    nextHtml: '<img src="./assets/img/arrow-forward.svg" alt="arrow-forward"/>',
    range: true,
    buttons: ['clear', {
      content() {
        return 'Применить';
      }
    }]
  });
}());
