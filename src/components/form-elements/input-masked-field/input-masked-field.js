import Inputmask from 'inputmask';

const maskedSelector = document.querySelectorAll('.js-input-field__input');
Inputmask({'mask': '99.99.9999'}).mask(maskedSelector);


