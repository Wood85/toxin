const getTemplate = (data=[], placeholder = 'Напиши свой placeholder') => {


  const items = data.map(item => {
    return `
      <li class="dropdown-quantity__item" data-type="item" data-id="${item.id}">
        <div class="dropdown-quantity__item-title">${item.title}</div>
        <div class="dropdown-quantity__block-quantity">
          <div class="dropdown-quantity__button-minus" data-type="minus">-</div>       
          <div class="dropdown-quantity__value" data-type="value">${item.value}</div>
          <div class="dropdown-quantity__button-plus" data-type="plus">+</div>
        </div>  
      </li>
    `
  })

  return `
    <div class=dropdown-quantity__input data-type="input">
      ${placeholder}
    </div>  
    <div class=dropdown-quantity__dropdown>
      <ul class="dropdown-quantity__list">
        ${items.join('')}
      </ul>
    </div>
  `
}

export class DropdownQuantity {
  constructor(selector, options) {
    this.el  = document.querySelector(selector);
    this.options = options;

    this.render();
    this.setup();
  };

  render() {
    const{placeholder, data} = this.options
    this.el.classList.add('dropdown-quantity');
    this.el.innerHTML = getTemplate(data, placeholder);
  };

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.el.addEventListener('click', this.clickHandler);
  };

  clickHandler(event) {
    const {type} = event.target.dataset
    if(type === 'input') {
      this.toggle();
    } else if (type ==='plus') {
      event.target.previousElementSibling.textContent = parseInt(event.target.previousElementSibling.textContent,10)+1
    } else if (type ==='minus') {
      event.target.nextElementSibling.textContent = parseInt(event.target.nextElementSibling.textContent,10)-1
    }

  };

  get isOpen() {
    return this.el.classList.contains('open');
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  };

  open() {
    this.el.classList.add('open');
  };

  close() {
    this.el.classList.remove('open');
  };



  quantity() {
    const values = this.el.querySelectorAll('dropdown-quantity__value');

  };

  destroy() {
    this.el.removeEventListener('click', this.clickHandler)
  };
}