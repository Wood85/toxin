import AirDatepicker from 'air-datepicker'

let applyButton = {
    content: 'применить',
    className: 'apply-button-custom',
    onClick: (dp) => {
        let date = new Date('2021-07-26');
        dp.selectDate(date);
        dp.setViewDate(date);
    }
}

new AirDatepicker('.calendar__body',{
    navTitles: {
        days: '<h2 class="calendar__title-month">MMMM</h2> <h2 class="calendar__title-year">yyyy</h2>'
    },
    prevHtml:'<img class="calendar__arrow-prev" src="../../../assets/img/arrow-prev.svg" alt="arrow-prev"/>',
    nextHtml:'<img src="../../../assets/img/arrow-forward.svg" alt="arrow-forward"/>',
    range: true,
    buttons: ['clear', applyButton]
});