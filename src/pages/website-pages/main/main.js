import '../../../components/cards/calendar/calendar'

// import Swiper from 'swiper';
// const mainSwiper = new Swiper('.swiper', {
//     loop: true,
//     autoplay: {
//         delay: 1000,
//         stopOnLastSlide: false,
//         disableOnInteraction: false
//     }
// })

const valueDateDropdown = document.querySelectorAll('.date-dropdown__input')
const calendar = document.querySelector('.content__calendar')
valueDateDropdown.forEach(function (val) {
  val.onclick = function () {
    calendar.style.display = "block"
  }
})
calendar.onblur = function () {
    calendar.style.display = "none"
}

const calendarButton = document.querySelectorAll('.air-datepicker-button')
calendarButton.forEach(function (btn) {
  btn.onclick =  function (event) {
     event.preventDefault()
  }
})
const calendarBody = document.querySelector('.calendar__body')
const valueDateDropdown1 = document.querySelector('#date-dropdown__input1').value = selectedDates[0]