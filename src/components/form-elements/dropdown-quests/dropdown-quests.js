import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
  const $iqdropdown = $('.iqdropdown'),
    $input = $('.iqdropdown-selection');
  $iqdropdown.iqDropdown({
    maxItems: Infinity,
    minItems: 0,
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    setSelectionText: (itemCount, totalItems) => {

      let quests = 'гость',
        babies = 'младенец';

      let inputText = `${itemCount.adults + itemCount.kids} ${quests}, ${itemCount.babies} ${babies}`;

      if(totalItems === 0) {
        inputText = `Сколько гостей`;
      }

      $input.text(inputText);

    },
    onChange: (id, count, totalItems) => {
      console.log(id, count, totalItems)
      if(id === 'adults' && count === 0) {
        $('[data-id="adults"] .button-decrement').addClass('iqdropdown-limit');
      }else if(id === 'adults' && count !== 0) {
        $('[data-id="adults"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if(id === 'adults' && count === 10) {
        $('[data-id="adults"] .button-increment').addClass('iqdropdown-limit');
      }else if(id === 'adults' && count !== 10) {
        $('[data-id="adults"] .button-increment').removeClass('iqdropdown-limit');
      }

      if(id === 'kids' && count === 0) {
        $('[data-id="kids"] .button-decrement').addClass('iqdropdown-limit');
      }else if(id === 'kids' && count !== 0) {
        $('[data-id="kids"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if(id === 'kids' && count === 10) {
        $('[data-id="kids"] .button-increment').addClass('iqdropdown-limit');
      }else if(id === 'kids' && count !== 10) {
        $('[data-id="kids"] .button-increment').removeClass('iqdropdown-limit');
      }

      if(id === 'babies' && count === 0) {
        $('[data-id="babies"] .button-decrement').addClass('iqdropdown-limit');
      }else if(id === 'babies' && count !== 0) {
        $('[data-id="babies"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if(id === 'babies' && count === 10) {
        $('[data-id="babies"] .button-increment').addClass('iqdropdown-limit');
      }else if(id === 'babies' && count !== 10) {
        $('[data-id="babies"] .button-increment').removeClass('iqdropdown-limit');
      }
    }
  });
});



