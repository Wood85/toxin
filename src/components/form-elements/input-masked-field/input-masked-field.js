import Inputmask from 'inputmask';

(function() {
  const maskedSelector = document.querySelectorAll('.js-input-field__input');
  Inputmask({'mask': '99.99.9999'}).mask(maskedSelector);
}());


