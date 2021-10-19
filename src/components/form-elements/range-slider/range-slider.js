const startValue = document.querySelector('.range-slider__value_1')
const endValue = document.querySelector('.range-slider__value_2')

const inputLeft = document.getElementById('input-left')
const inputRight = document.getElementById('input-right')

const thumbLeft = document.querySelector('.range-slider__container > .range-slider__thumb_left')
const thumbRight = document.querySelector('.range-slider__container > .range-slider__thumb_right')
const range = document.querySelector('.range-slider__container > .range-slider__range')

function setLeftValue() {
  let _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max)

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1)

  let percent = ((_this.value - min) / (max - min)) * max
  console.log(percent)
  startValue.textContent = (Math.floor(percent)).toLocaleString('ru')

  thumbLeft.style.left = percent*100/max + '%'
  range.style.left = percent*100/max + '%'
}
setLeftValue();

function setRightValue() {
  let _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max)

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1)

  let percent = ((_this.value - min) / (max - min)) * max

  endValue.textContent = (Math.floor(percent)).toLocaleString('ru')

  thumbRight.style.right = (100 - percent*100/max) + '%'
  range.style.right = (100 - percent*100/max) + '%'
}
setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);