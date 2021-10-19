const rateItemsList = document.querySelectorAll('.rate__item')
const rateItemsArray = Array.prototype.slice.call(rateItemsList)

rateItemsArray.forEach(item => item.addEventListener('click', () => {
  const {itemValue} = item.dataset
  item.parentNode.dataset.totalValue = itemValue
}))