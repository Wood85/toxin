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
      $input.text(`${itemCount.bedrooms} ${itemCount.beds} ${itemCount.bathrooms}`)
      console.log(itemCount, totalItems)
    }
  });
});