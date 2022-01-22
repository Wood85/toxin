import './styles/style.scss';
// import './components/form-elements/dropdown-quests/dropdown-quests';
// import './components/form-elements/dropdown-selection/dropdown-selection';
// import './pages/cards/cards';
// import './pages/form-elements/form-elements';
// import './pages/website-pages/main/main';
// import './pages/website-pages/search-room/search-room';
// import './pages/website-pages/room-details/room-details';
// import './pages/website-pages/auth/auth';


let isDrop = false;
const selection = document.querySelector('.js-dropdown-quests__selection'),
  selectionText = selection.querySelector('.js-dropdown-quests__selection-text'),
  menu = document.querySelector('.js-dropdown-quests__menu'),
  items = menu.querySelectorAll('.js-dropdown-quests__menu-item'),
  cleanBtn = menu.querySelector('.js-dropdown-quests__button_clean'),
  applyBtn = menu.querySelector('.js-dropdown-quests__button_apply'),
  counts = menu.querySelectorAll('.js-dropdown-quests__count'),
  min = 0,
  max = 10,
  adultsItem = menu.querySelector('.js-dropdown-quests__menu-item[data-id="adults"]'),
  kidsItem = menu.querySelector('.js-dropdown-quests__menu-item[data-id="kids"]'),
  babiesItem = menu.querySelector('.js-dropdown-quests__menu-item[data-id="babies"]'),
  adultsCount = menu.querySelector('.js-dropdown-quests__count[data-value="adults"]'),
  kidsCount = menu.querySelector('.js-dropdown-quests__count[data-value="kids"]'),
  babiesCount = menu.querySelector('.js-dropdown-quests__count[data-value="babies"]');


selectionText.textContent = `Сколько гостей`;

const data = [0, 0, 0];

adultsCount.textContent = data[0];
kidsCount.textContent = data[1];
babiesCount.textContent = data[2];



selection.addEventListener('click', function () {
  if(isDrop) {
    menu.classList.remove('dropdown-quests__menu_open');
    selection.style.borderColor = 'rgba(31, 32, 65, 0.25)';
  } else {
    menu.classList.add('dropdown-quests__menu_open');
    selection.style.borderColor = 'rgba(31, 32, 65, 0.5)';
  }
  isDrop = !isDrop;
});


items.forEach(item => item.querySelector('.js-dropdown-quests__button-increment').addEventListener('click', function () {
  const count = item.querySelector('.js-dropdown-quests__count'),
    val = parseInt(count.textContent, 10);
  count.textContent = val + 1;
  const incrementBtn = item.querySelector('.js-dropdown-quests__button-increment'),
  decrementBtn = item.querySelector('.js-dropdown-quests__button-decrement');
  if (count.textContent > max) {
    count.textContent = max;
    incrementBtn.classList.add('dropdown-quests__button_disabled');
  }else if (count.textContent > min){
    decrementBtn.classList.remove('dropdown-quests__button_disabled');
  }
  if (item === adultsItem) {
    data[0] = (parseInt(count.textContent, 10))
    showSelectionText();
  }else if (item === kidsItem) {
    data[1] = (parseInt(count.textContent, 10))
    showSelectionText();
  }else if (item === babiesItem) {
    data[2] = (parseInt(count.textContent, 10))
    showSelectionText();
  }
}));


items.forEach(item => item.querySelector('.js-dropdown-quests__button-decrement').addEventListener('click', function () {
  const count = item.querySelector('.js-dropdown-quests__count'),
    val = parseInt(count.textContent, 10);
  count.textContent = val - 1;
  const incrementBtn = item.querySelector('.js-dropdown-quests__button-increment'),
    decrementBtn = item.querySelector('.js-dropdown-quests__button-decrement');
  if (count.textContent < min) {
    count.textContent = min;
    decrementBtn.classList.add('dropdown-quests__button_disabled');
  }else if (count.textContent < max){
  incrementBtn.classList.remove('dropdown-quests__button_disabled');
}
  if (item === adultsItem) {
    data[0] = (parseInt(count.textContent, 10))
    showSelectionText();
  }else if (item === kidsItem) {
    data[1] = (parseInt(count.textContent, 10))
    showSelectionText();
  }else if (item === babiesItem) {
    data[2] = (parseInt(count.textContent, 10))
    showSelectionText();
  }
}));

cleanBtn.addEventListener('click', function () {
  counts.forEach( count => count.textContent = '0');
  showSelectionText();
});

applyBtn.addEventListener('click', function () {
  menu.classList.remove('dropdown-quests__menu_open');
  selection.style.borderColor = 'rgba(31, 32, 65, 0.25)';
  isDrop = !isDrop;
});


function showSelectionText() {
  let quests = 'гость';
  let babies = 'младенец';
  if(data[0] + data[1] > 1 && data[0] + data[1] < 5) {
    quests = 'гостя';
  }else if(data[0] + data[1] > 4 && data[0] + data[1] <= 20) {
    quests = 'гостей';
  }
  if(data[2] > 1 && data[2] < 5) {
    babies = 'младенца'
  }else if(data[2] > 4 && data[2] <= 20) {
    babies = 'младенцев';
  }

  if (data[0] + data[1] === 0 && data[2] === 0) {
    selectionText.textContent = `Сколько гостей`;
  }

  if (data[0] + data[1] > 0 && data[2] === 0) {
    selectionText.textContent = `${data[0] + data[1]} ${quests}`;
  }
  if (data[0] + data[1] > 0 && data[2] > 0) {
    selectionText.textContent = `${data[0] + data[1]} ${quests}, ${data[2]} ${babies}`;
  }
}











