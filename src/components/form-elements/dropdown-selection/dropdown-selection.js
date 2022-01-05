import '../quantity-change-block/quantity-change-block'

//Дропдаун
let isDrop = false;
const $trigger = $('.js-dropdown-selection__trigger');
$trigger.click(function () {
  const $dropdown = $('.js-dropdown-selection__dropdown');
  if(!isDrop) {
    $dropdown.slideDown();
  }else{
    $dropdown.slideUp();
  }
  isDrop = !isDrop;
})