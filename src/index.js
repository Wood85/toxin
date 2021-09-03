import * as $ from 'jquery'
import './styles/style.scss'
//dropdown
let isDrop = false
$('.dropdown-select__trigger').click(function () {
  if(!isDrop) {
    $('.dropdown-select__dropdown').slideDown()
  }else{
    $('.dropdown-select__dropdown').slideUp()
  }
    isDrop = !isDrop
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

    $('.dropdown-select__backdrop').val(`${bedroomsValue} ${bedroomsTitle}, ${bedValue} ${bedTitle}...`)
  })
})
