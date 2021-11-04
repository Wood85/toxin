import AirDatepicker from 'air-datepicker'

let applyButton = {
    content: 'применить',
    className: 'apply-button-custom',
    onClick: (datepicker) => {
        let arraySelectedDates = datepicker.selectedDates
        alert(arraySelectedDates[1])
    }
}

let datepicker = new AirDatepicker('.calendar__body',{
    navTitles: {
        days: '<h2 class="calendar__title-month">MMMM</h2> <h2 class="calendar__title-year">yyyy</h2>'
    },
    prevHtml:'<img class="calendar__arrow-prev" src="../../../assets/img/arrow-prev.svg" alt="arrow-prev"/>',
    nextHtml:'<img src="../../../assets/img/arrow-forward.svg" alt="arrow-forward"/>',
    range: true,
    minDate: new Date().setDate(new Date().getDate() + 1),
    maxDate:  new Date().setFullYear(new Date().getFullYear() + 1),
    buttons: ['clear', applyButton],
    
});