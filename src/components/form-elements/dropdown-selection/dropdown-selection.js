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
    setSelectionText: (itemCount) => {
      let bedrooms = 'спальня',
        beds = 'кровать';

      if(itemCount.bedrooms > 1 && itemCount.bedrooms < 5) {
        bedrooms = 'спальни';
      }

      if(itemCount.bedrooms > 4 && itemCount.bedrooms < 11) {
        bedrooms = 'спален';
      }

      if(itemCount.beds > 1 && itemCount.beds < 5) {
        beds = 'кровати';
      }

      if(itemCount.beds > 4 && itemCount.beds < 11) {
        beds = 'кроватей';
      }

      let inputText = `${itemCount.bedrooms} ${bedrooms}, ${itemCount.beds} ${beds}...`;
      $input.text(inputText);

      $('[data-id="bathrooms"] .button-decrement').addClass('iqdropdown-limit');

    },
    onChange: (id, count, totalItems) => {
      console.log(id, count, totalItems)
      if(id === 'bedrooms' && count === 1) {
        $('[data-id="bedrooms"] .button-decrement').addClass('iqdropdown-limit');
      }else if(id === 'bedrooms' && count !== 1) {
        $('[data-id="bedrooms"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if(id === 'bedrooms' && count === 10) {
        $('[data-id="bedrooms"] .button-increment').addClass('iqdropdown-limit');
      }else if(id === 'bedrooms' && count !== 10) {
        $('[data-id="bedrooms"] .button-increment').removeClass('iqdropdown-limit');
      }

      if(id === 'beds' && count === 1) {
        $('[data-id="beds"] .button-decrement').addClass('iqdropdown-limit');
      }else if(id === 'beds' && count !== 1) {
        $('[data-id="beds"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if(id === 'beds' && count === 10) {
        $('[data-id="beds"] .button-increment').addClass('iqdropdown-limit');
      }else if(id === 'beds' && count !== 10) {
        $('[data-id="beds"] .button-increment').removeClass('iqdropdown-limit');
      }

      if(id === 'bathrooms' && count === 0) {
        $('[data-id="bathrooms"] .button-decrement').addClass('iqdropdown-limit');
      }else if(id === 'bathrooms' && count !== 0) {
        $('[data-id="bathrooms"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if(id === 'bathrooms' && count === 10) {
        $('[data-id="bathrooms"] .button-increment').addClass('iqdropdown-limit');
      }else if(id === 'bathrooms' && count !== 10) {
        $('[data-id="bathrooms"] .button-increment').removeClass('iqdropdown-limit');
      }
    }
  });
});