import * as $ from 'jquery'
import './styles/style.scss'

let isDrop = false
$('.dropdown-select__trigger').click(function () {
  if(!isDrop) {
    $('.dropdown-select__dropdown').slideDown()
  }else{
    $('.dropdown-select__dropdown').slideUp()
  }
    isDrop = !isDrop
})