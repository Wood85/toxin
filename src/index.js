import * as $ from 'jquery'
import './styles/style.scss'
import './pages/cards/cards'
import AirDatepicker from 'air-datepicker'


//dropdown
let isDrop = false
$('.dropdown-selection__trigger').click(function () {
  if(!isDrop) {
    $('.dropdown-selection__dropdown').slideDown()
  }else{
    $('.dropdown-selection__dropdown').slideUp()
  }
    isDrop = !isDrop
})
//dropdownQuests
let isDropQuests = false
$('.dropdown-quests__trigger').click(function () {
    if(!isDropQuests) {
      $('.dropdown-quests__dropdown').slideDown()
      $('.dropdown-quests__backdrop').css('border-radius', '4px 4px 0 0 ')
      $(".button-minus[data-title='adults']").addClass('limit')
      $(".button-minus[data-title='children']").addClass('limit')
      $(".button-minus[data-title='babies']").addClass('limit')
    }else{
      $('.dropdown-quests__dropdown').slideUp()
      setTimeout(resetCSS, 400)
      function resetCSS() {
        $('.dropdown-quests__backdrop').css('border-radius', '4px')
      }
    }
    isDropQuests = !isDropQuests
})

//expandableCheckboxList
let isExpandable = false
$('.expandable-checkbox-list__trigger').click(function () {
  if(!isExpandable) {
    $('.expandable-checkbox-list__dropdown').slideDown()
    $(this).addClass('trigger-up')
    $(this).removeClass('trigger-down')
  }else{
    $('.expandable-checkbox-list__dropdown').slideUp()
    $(this).removeClass('trigger-up')
    $(this).addClass('trigger-down')
  }
  isExpandable = !isExpandable
})

//quantitySelect

$(document).ready(function() {
  $('body').on('click', '.button-minus, .button-plus', function(){
    let $row = $(this).closest('.quantity-change-block')
    let $input = $row.find('.quantity')
    let step = $row.data('step')
    let val = parseFloat($input.val())
    if ($(this).hasClass('button-minus')) {
      val -= step
    } else {
      val += step
    }
    $input.val(val)
    $input.change()
    return false;
  });

  $('body').on('change', '.quantity', function(){
    let $input = $(this)
    let $row = $input.closest('.quantity-change-block')
    let step = $row.data('step')
    let min = parseInt($row.data('min'))
    let max = parseInt($row.data('max'))
    let val = parseFloat($input.val())
    if (isNaN(val)) {
      val = step
    } else if (min && val < min) {
      val = min
    } else if (val <= 0) {
      val = 0;
    } else if (max && val > max) {
      val = max
    }
    $input.val(val)
    let bedroomsValue = $(".quantity[name='bedrooms']").val()
    let bedValue = $(".quantity[name='bed']").val()
    let bathroomsValue = $(".quantity[name='bathrooms']").val()
    let bedroomsTitle = 'спальни'
    let bedTitle = 'кровати'
    if(bedroomsValue==0) {
      bedroomsTitle = 'спален'
      $(".button-minus[data-title='bedrooms']").addClass('limit')
    }else{
      $(".button-minus[data-title='bedrooms']").removeClass('limit')
    }

    // switch(bedroomsValue){
    //   case '1':
    //     bedroomsTitle = 'спальня'
    // }

    if(bedroomsValue==1){
      bedroomsTitle = 'спальня'
    }
    if(bedroomsValue>=5){
      bedroomsTitle = 'спален'
    }
    if(bedroomsValue==10) {
      $(".button-plus[data-title='bedrooms']").addClass('limit')
    }else{
      $(".button-plus[data-title='bedrooms']").removeClass('limit')
    }
    if(bedValue==0) {
      bedTitle = 'кроватей'
      $(".button-minus[data-title='bed']").addClass('limit')
    }else{
      $(".button-minus[data-title='bed']").removeClass('limit')
    }
    if(bedValue==1){
      bedTitle = 'кровать'
    }
    if(bedValue>=5){
      bedTitle = 'кроватей'
    }
    if(bedValue==10) {
      $(".button-plus[data-title='bed']").addClass('limit')
    }else{
      $(".button-plus[data-title='bed']").removeClass('limit')
    }
    if(bathroomsValue==0) {
      bedroomsTitle = 'спален'
      $(".button-minus[data-title='bathrooms']").addClass('limit')
    }else{
      $(".button-minus[data-title='bathrooms']").removeClass('limit')
    }
    if(bathroomsValue==10) {
      $(".button-plus[data-title='bathrooms']").addClass('limit')
    }else{
      $(".button-plus[data-title='bathrooms']").removeClass('limit')
    }

    $('.dropdown-selection__backdrop').val(`${bedroomsValue} ${bedroomsTitle}, ${bedValue} ${bedTitle}...`)

    //dropdownQuests
    let adultsValue = $(".quantity[name='adults']").val()
    let childrenValue = $(".quantity[name='children']").val()
    let babiesValue = $(".quantity[name='babies']").val()
    let countsQuests = Number(adultsValue) + Number(childrenValue) + Number(babiesValue)
    let questsTitle = 'гостей'

    $('.dropdown-quests__reset').click(function () {
      $(".quantity[name='adults']").val(0)
      $(".quantity[name='children']").val(0)
      $(".quantity[name='babies']").val(0)
      $('.dropdown-quests__backdrop').val(`Сколько гостей`)
      $(".button-minus[data-title='adults']").addClass('limit')
      $(".button-minus[data-title='children']").addClass('limit')
      $(".button-minus[data-title='babies']").addClass('limit')
      $(this).css('visibility','hidden')
    })

    $('.dropdown-quests__apply').click(function () {
      if (countsQuests > 0) {
        $('.dropdown-quests__dropdown').slideUp()
        setTimeout(resetCSS, 400)
        function resetCSS() {
          $('.dropdown-quests__backdrop').css('border-radius', '4px')
        }}
      }
    )

    if (countsQuests==0) {
      countsQuests= 'Сколько'
      questsTitle = 'гостей'
    }
    if(countsQuests > 0) {
      $('.dropdown-quests__reset').css('visibility','visible')
    }else{
      $('.dropdown-quests__reset').css('visibility','hidden')
    }
    if (countsQuests==1 || countsQuests==21) {
      questsTitle = 'гость'
    }
    if ((countsQuests > 1 && countsQuests < 5) || (countsQuests > 21 && countsQuests < 25)) {
      questsTitle = 'гостя'
    }

    if(adultsValue==0) {
      $(".button-minus[data-title='adults']").addClass('limit')
    }else{
      $(".button-minus[data-title='adults']").removeClass('limit')
    }
    if(bedroomsValue==10) {
      $(".button-plus[data-title='adults']").addClass('limit')
    }else{
      $(".button-plus[data-title='adults']").removeClass('limit')
    }

    if(childrenValue==0) {
      $(".button-minus[data-title='children']").addClass('limit')
    }else{
      $(".button-minus[data-title='children']").removeClass('limit')
    }
    if(bedroomsValue==10) {
      $(".button-plus[data-title='children']").addClass('limit')
    }else{
      $(".button-plus[data-title='children']").removeClass('limit')
    }
    if(babiesValue==0) {
      $(".button-minus[data-title='babies']").addClass('limit')
    }else{
      $(".button-minus[data-title='babies']").removeClass('limit')
    }
    if(bedroomsValue==10) {
      $(".button-plus[data-title='babies']").addClass('limit')
    }else{
      $(".button-plus[data-title='babies']").removeClass('limit')
    }

    $('.dropdown-quests__backdrop').val(`${countsQuests} ${questsTitle}`)

  })
})


//calendar

new AirDatepicker('.calendar__body',{
  navTitles: {
    days: '<h2 class="calendar__title-month">MMMM</h2> <h2 class="calendar__title-year">yyyy</h2>'
  },
  prevHtml:'<img class="calendar__arrow-prev" src="assets/img/arrow-prev.svg" alt="arrow-prev"/>',
  nextHtml:'<img src="assets/img/arrow-forward.svg" alt="arrow-forward"/>',
  range: true
});



