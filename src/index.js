import './styles/style.scss';
// import './pages/cards/cards';
// import './pages/form-elements/form-elements';
// import './pages/website-pages/main/main';
// import './pages/website-pages/search-room/search-room';
// import './pages/website-pages/room-details/room-details';
// import './pages/website-pages/auth/auth';
import {DropdownQuantity} from './components/form-elements/dropdown-quantity/dropdown-quantity';

//====================
const dropdown = new DropdownQuantity('#dropdown', {
  placeholder: 'Сколько гостей',
  data: [
    {id: '1', title: 'взрослые', value: '1'},
    {id: '2', title: 'дети', value: '2'},
    {id: '3', title: 'младенцы', value: '3'}
  ]
});

window.d = dropdown;



































//====================


/*//quantitySelect
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
    let min = parseInt($row.data('min'),10)
    let max = parseInt($row.data('max'),10)
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

    $('.dropdown-selection__backdrop').val(`${bedroomsValue} ${bedroomsTitle}, ${bedValue} ${bedTitle}...`)

    //dropdownQuests
    let adultsValue = $(".quantity[name='adults']").val()
    let childrenValue = $(".quantity[name='children']").val()
    let babiesValue = $(".quantity[name='babies']").val()
    let countsQuests = Number(adultsValue) + Number(childrenValue)
    let countsBabies = Number(babiesValue)
    let questsTitle = 'гостей'
    let babiesTitle = 'младенцев'

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
        resetCSS()}
      }
    )

    if(countsQuests==0) {
      countsQuests= 'Сколько'
      questsTitle = 'гостей'
    }
    if(countsQuests > 0) {
      $('.dropdown-quests__reset').css('visibility','visible')
    }else{
      $('.dropdown-quests__reset').css('visibility','hidden')
    }
    if(countsQuests==1 || countsQuests==21) {
      questsTitle = 'гость'
    }
    if((countsQuests > 1 && countsQuests < 5) || (countsQuests > 21 && countsQuests < 25)) {
      questsTitle = 'гостя'
    }

    if(countsBabies==1 || countsBabies==21) {
      babiesTitle = 'младенец'
    }

    if((countsBabies > 1 && countsBabies < 5) || (countsBabies > 21 && countsBabies < 25)) {
      babiesTitle = 'младенца'
    }

    if(adultsValue==0) {
      $(".button-minus[data-title='adults']").addClass('limit')
    }else{
      $(".button-minus[data-title='adults']").removeClass('limit')
    }
    if(adultsValue==10) {
      $(".button-plus[data-title='adults']").addClass('limit')
    }else{
      $(".button-plus[data-title='adults']").removeClass('limit')
    }

    if(childrenValue==0) {
      $(".button-minus[data-title='children']").addClass('limit')
    }else{
      $(".button-minus[data-title='children']").removeClass('limit')
    }
    if(childrenValue==10) {
      $(".button-plus[data-title='children']").addClass('limit')
    }else{
      $(".button-plus[data-title='children']").removeClass('limit')
    }
    if(babiesValue==0) {
      $(".button-minus[data-title='babies']").addClass('limit')
    }else{
      $(".button-minus[data-title='babies']").removeClass('limit')
    }
    if(babiesValue==10) {
      $(".button-plus[data-title='babies']").addClass('limit')
    }else{
      $(".button-plus[data-title='babies']").removeClass('limit')
    }
    if(countsBabies > 0){
      $('.dropdown-quests__backdrop').val(`${countsQuests} ${questsTitle}, ${countsBabies} ${babiesTitle}`)
    }else{
      $('.dropdown-quests__backdrop').val(`${countsQuests} ${questsTitle}`)
    }

  })
});
function resetCSS() {
  $('.dropdown-quests__backdrop').css('border-radius', '4px')
}*/




