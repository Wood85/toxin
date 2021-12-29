const startValue = document.querySelector('.range-slider__value_1'),
  endValue = document.querySelector('.range-slider__value_2'),

  inputLeft = document.getElementById('input-left'),
  inputRight = document.getElementById('input-right'),

  thumbLeft = document.querySelector('.range-slider__container > .range-slider__thumb_left'),
  thumbRight = document.querySelector('.range-slider__container > .range-slider__thumb_right'),
  range = document.querySelector('.range-slider__container > .range-slider__range');

function setLeftValue() {
  let _this = inputLeft,
      min = parseInt(_this.min, 10),
      max = parseInt(_this.max, 10);

  _this.value = Math.min(parseInt(_this.value, 10), parseInt(inputRight.value, 10) - 1);

  let percent = ((_this.value - min) / (max - min)) * max;
  startValue.textContent = (Math.floor(percent)).toLocaleString('ru');

  thumbLeft.style.left = percent*100/max + '%';
  range.style.left = percent*100/max + '%';
}
setLeftValue();

function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min, 10),
    max = parseInt(_this.max, 10);

  _this.value = Math.max(parseInt(_this.value, 10), parseInt(inputLeft.value, 10) + 1);

  let percent = ((_this.value - min) / (max - min)) * max;

  endValue.textContent = (Math.floor(percent)).toLocaleString('ru');

  thumbRight.style.right = (100 - percent*100/max) + '%';
  range.style.right = (100 - percent*100/max) + '%';
}
setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);