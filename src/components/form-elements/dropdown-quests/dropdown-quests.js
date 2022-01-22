import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
  let $iqdropdown = $('.iqdropdown');
  const $input = $('.iqdropdown-selection'),
    $cleanBtn = $('.js-iqdropdown-button-clean'),
    $dropdown = $('.dropdown-quests');

  $iqdropdown.iqDropdown({
    maxItems: 30,
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

      if ((itemCount.adults + itemCount.kids) > 1 && (itemCount.adults + itemCount.kids) < 5) {
        quests = 'гостя';
      }

      if ((itemCount.adults + itemCount.kids) > 4) {
        quests = 'гостей';
      }

      if (itemCount.babies > 1 && itemCount.babies < 5) {
        babies = 'младенца';
      }

      if (itemCount.babies > 4) {
        babies = 'младенцев';
      }

      let inputText = `${itemCount.adults + itemCount.kids} ${quests}, ${itemCount.babies} ${babies}`;

      if (totalItems === 0) {
        inputText = `Сколько гостей`;
      }

      if (totalItems > 0 && itemCount.babies === 0) {
        inputText = `${itemCount.adults + itemCount.kids} ${quests}`;
      }

      if (itemCount.babies > 0 && itemCount.adults + itemCount.kids === 0) {
        inputText = `${itemCount.babies} ${babies}`
      }

      $input.text(inputText);

    },
    onChange: (id, count, totalItems) => {
      // console.log(id, count, totalItems

      if (totalItems > 0) {
        $cleanBtn.addClass('iqdropdown-button-clean_active');
      } else {
        $cleanBtn.removeClass('iqdropdown-button-clean_active');
      }

      if (id === 'adults' && count === 0) {
        $('[data-id="adults"] .button-decrement').addClass('iqdropdown-limit');
      } else if (id === 'adults' && count !== 0) {
        $('[data-id="adults"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if (id === 'adults' && count === 10) {
        $('[data-id="adults"] .button-increment').addClass('iqdropdown-limit');
      } else if (id === 'adults' && count !== 10) {
        $('[data-id="adults"] .button-increment').removeClass('iqdropdown-limit');
      }

      if (id === 'kids' && count === 0) {
        $('[data-id="kids"] .button-decrement').addClass('iqdropdown-limit');
      } else if (id === 'kids' && count !== 0) {
        $('[data-id="kids"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if (id === 'kids' && count === 10) {
        $('[data-id="kids"] .button-increment').addClass('iqdropdown-limit');
      } else if (id === 'kids' && count !== 10) {
        $('[data-id="kids"] .button-increment').removeClass('iqdropdown-limit');
      }

      if (id === 'babies' && count === 0) {
        $('[data-id="babies"] .button-decrement').addClass('iqdropdown-limit');
      } else if (id === 'babies' && count !== 0) {
        $('[data-id="babies"] .button-decrement').removeClass('iqdropdown-limit');
      }
      if (id === 'babies' && count === 10) {
        $('[data-id="babies"] .button-increment').addClass('iqdropdown-limit');
      } else if (id === 'babies' && count !== 10) {
        $('[data-id="babies"] .button-increment').removeClass('iqdropdown-limit');
      }
    }
  });

  $cleanBtn.on('click', function () {
    $input.text('Сколько гостей');
    const $counters = $('.counter');
    $counters.each(function() {
      $(this).text(0);
    });
  });

});








