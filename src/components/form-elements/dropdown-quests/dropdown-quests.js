(function() {
  let isDrop = false;
  const selection = document.querySelector('.js-dropdown-quests__selection'),
    selectionText = selection.querySelector('.js-dropdown-quests__selection-text'),
    menu = document.querySelector('.js-dropdown-quests__menu'),
    items = menu.querySelectorAll('.js-dropdown-quests__menu-item'),
    cleanBtn = menu.querySelector('.js-dropdown-quests__button_clean'),
    applyBtn = menu.querySelector('.js-dropdown-quests__button_apply'),
    counts = menu.querySelectorAll('.js-dropdown-quests__count'),
    decrementButtons = menu.querySelectorAll('.js-dropdown-quests__button-decrement'),
    min = 0,
    max = 10,
    adultsItem = menu.querySelector('.js-dropdown-quests__menu-item[data-id="adults"]'),
    kidsItem = menu.querySelector('.js-dropdown-quests__menu-item[data-id="kids"]'),
    babiesItem = menu.querySelector('.js-dropdown-quests__menu-item[data-id="babies"]'),
    adultsCount = menu.querySelector('.js-dropdown-quests__count[data-value="adults"]'),
    kidsCount = menu.querySelector('.js-dropdown-quests__count[data-value="kids"]'),
    babiesCount = menu.querySelector('.js-dropdown-quests__count[data-value="babies"]');

  const data = [0, 0, 0];

  showSelectionText();

  adultsCount.textContent = data[0];
  kidsCount.textContent = data[1];
  babiesCount.textContent = data[2];

  if(data[0] === 0 && data[1] === 0 && data[2] === 0) {
    decrementButtons.forEach(btn => btn.classList.add('dropdown-quests__button_disabled'));
    cleanBtn.style.display = 'none';
  }
  if (data[0] !== 0 || data[1] !== 0 || data[2] !== 0) {
    cleanBtn.style.display = 'block';
  }

  selection.addEventListener('click', function () {
    if(isDrop) {
      menu.classList.remove('dropdown-quests__menu_open');
      selection.style.borderRadius = '4px';
      selection.style.borderColor = 'rgba(31, 32, 65, 0.25)';
    } else {
      menu.classList.add('dropdown-quests__menu_open');
      selection.style.borderRadius = '4px 4px 0 0';
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
    }
    if (parseInt(count.textContent, 10) === max) {
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

    if (data[0] !== 0 || data[1] !== 0 || data[2] !== 0) {
      cleanBtn.style.display = 'block';
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
    }
    if (parseInt(count.textContent, 10) === min) {
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

    if(data[0] === 0 && data[1] === 0 && data[2] === 0) {
      cleanBtn.style.display = 'none';
    }
  }));

  cleanBtn.addEventListener('click', function (event) {
    event.preventDefault();
    counts.forEach( count => count.textContent = '0');
    data[0] = 0;
    data[1] = 0;
    data[2] = 0;
    showSelectionText();
    decrementButtons.forEach(btn => btn.classList.add('dropdown-quests__button_disabled'));
    cleanBtn.style.display = 'none';
  });

  applyBtn.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.remove('dropdown-quests__menu_open');
    selection.style.borderRadius = '4px';
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
}());