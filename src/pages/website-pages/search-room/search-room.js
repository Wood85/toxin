import './../../../components/headers-and-footers/header/header';
import './../../../components/form-elements/range-slider/range-slider';
import './../../../components/cards/room-card/room-card';

const filtersButton = document.querySelector('.search-room__filters'),
  filtersOptions = document.querySelector('.search-room__options');
filtersButton.addEventListener('click', ()=> {
    filtersOptions.classList.toggle('search-room__options_active')
    // document.body.classList.toggle('lock')
});