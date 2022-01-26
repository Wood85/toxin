import './../../form-elements/dropdown-quests/dropdown-quests'

// import AirDatepicker from 'air-datepicker'
//
// import 'air-datepicker/air-datepicker.css'
//
// const calendar = document.querySelector('.content__calendar')
// const dateFieldFrom = document.querySelector('#date-dropdown__input1')
// const dateFieldTo = document.querySelector('#date-dropdown__input2')
//
// const clearButton = {
//     content: 'очистить',
//     className: 'clear-button-custom',
//     onClick: (datepicker) => {
//         datepicker.clear()
//         dateFieldFrom.value = ''
//         dateFieldTo.value = ''
//     }
// }
//
// const applyButton = {
//     content: 'применить',
//     className: 'apply-button-custom',
//     onClick: (datepicker) => {
//         let arraySelectedDates = datepicker.selectedDates
//         let dateFrom = {
//             day: arraySelectedDates[0].getDate(),
//             month: (arraySelectedDates[0].getMonth()+1),
//             year: arraySelectedDates[0].getFullYear()
//         }
//         let dateTo = {
//             day: arraySelectedDates[1].getDate(),
//             month: (arraySelectedDates[1].getMonth() + 1),
//             year: arraySelectedDates[1].getFullYear()
//         }
//         dateFieldFrom.value = `${dateFrom.day}.${dateFrom.month}.${dateFrom.year}`
//         dateFieldTo.value = `${dateTo.day}.${dateTo.month}.${dateTo.year}`
//         calendar.style.display = "none"
//     }
// }
//
// const datepicker = new AirDatepicker('.calendar__body',{
//
//     navTitles: {
//         days: '<h2 class="calendar__title-month">MMMM</h2> <h2 class="calendar__title-year">yyyy</h2>'
//     },
//     prevHtml:'<img class="calendar__arrow-prev" src="../../../assets/img/arrow-prev.svg" alt="arrow-prev"/>',
//     nextHtml:'<img src="../../../assets/img/arrow-forward.svg" alt="arrow-forward"/>',
//     range: true,
//     // minDate: new Date().setDate(new Date().getDate() + 1),
//     // maxDate:  new Date().setFullYear(new Date().getFullYear() + 1),
//     buttons: [clearButton, applyButton],
//     onSelect({date, formattedDate, datepicker}){
//         dateFieldFrom.value = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
//         let arraySelectedDates = datepicker.selectedDates
//         dateFieldTo.value = `${arraySelectedDates[1].getDate()}.${(arraySelectedDates[1].getMonth()+1)}.${arraySelectedDates[1].getFullYear()}`
//     }
// })
//
//
// const valueDateDropdown = document.querySelectorAll('.date-dropdown__input, .date-dropdown__input-check-container, .date-dropdown__input-check')
// valueDateDropdown.forEach(function (val) {
//     let isShow = false
//     val.onclick = function () {
//         if(!isShow) {
//             calendar.style.display = "block"
//         }else{
//             calendar.style.display = "none"
//         }
//         isShow = !isShow
//     }
// })
//
// const calendarButton = document.querySelectorAll('.air-datepicker-button')
// calendarButton.forEach(function (btn) {
//     btn.onclick =  function (event) {
//         event.preventDefault()
//     }
// })