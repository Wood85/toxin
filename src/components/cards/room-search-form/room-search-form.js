import '../../form-elements/dropdown-quests/dropdown-quests';

import AirDatepicker from 'air-datepicker';

import 'air-datepicker/air-datepicker.css';

(function() {
  const body = document.querySelector('.room-search-form__body'),
    calendar = document.querySelector('.js-room-search-form__datepicker'),
    dateFieldFrom = body.querySelector('.js-date-dropdown__input_1'),
    dateFieldTo = body.querySelector('.js-date-dropdown__input_2'),

    clearButton = {
      content: 'очистить',
      className: 'clear-button-custom',
      onClick: (datepicker) => {
        datepicker.clear();
        dateFieldFrom.value = '';
        dateFieldTo.value = '';
      }
    },

    applyButton = {
      content: 'применить',
      className: 'apply-button-custom',
      onClick: (datepicker) => {
        let arraySelectedDates = datepicker.selectedDates;
        let dateFrom = {
          day: ('0' + arraySelectedDates[0].getDate()).slice(-2),
          month: ('0' + (arraySelectedDates[0].getMonth()+1)).slice(-2),
          year: arraySelectedDates[0].getFullYear()
        };
        let dateTo = {
          day: ('0' + arraySelectedDates[1].getDate()).slice(-2),
          month: ('0' + (arraySelectedDates[1].getMonth()+1)).slice(-2),
          year: arraySelectedDates[1].getFullYear()
        };
        dateFieldFrom.value = `${dateFrom.day}.${dateFrom.month}.${dateFrom.year}`;
        dateFieldTo.value = `${dateTo.day}.${dateTo.month}.${dateTo.year}`;
        calendar.style.display = "none";
      }
    };

    new AirDatepicker('.js-room-search-form__datepicker',{

      navTitles: {
        days: '<h2 class="calendar__title-month">MMMM</h2> <h2 class="calendar__title-year">yyyy</h2>'
      },
      prevHtml:'<img class="calendar__arrow-prev" src="./assets/img/arrow-prev.svg" alt="arrow-prev"/>',
      nextHtml:'<img src="./assets/img/arrow-forward.svg" alt="arrow-forward"/>',
      range: true,
      buttons: [clearButton, applyButton],
      onSelect({date, datepicker}){
        dateFieldFrom.value = `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`;
        let arraySelectedDates = datepicker.selectedDates;
        dateFieldTo.value = `${('0' + arraySelectedDates[1].getDate()).slice(-2)}.${('0' + (arraySelectedDates[1].getMonth()+1)).slice(-2)}.${arraySelectedDates[1].getFullYear()}`;
      }
    });


  const valueDateDropdown = body.querySelectorAll('.js-date-dropdown__input, .js-date-dropdown__input-check-container, .js-date-dropdown__input-check');

  valueDateDropdown.forEach(function (val) {
    let isShow = false;
    val.onclick = function () {
      if(!isShow) {
        calendar.style.display = "block";
      }else{
        calendar.style.display = "none";
      }
      isShow = !isShow;
    };
  });

  const calendarButton = document.querySelectorAll('.air-datepicker-button');

  calendarButton.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });
}());