const getTemplate = (data=[], placeholder) => {
  let text = placeholder;
  if(!placeholder) {
    text = 'Напиши свой placeholder';
  }
  const items = data.map(item => {
    return `
      <li class="dropdown-quantity__item" data-type="item" data-id="${item.id}">
        <div class="dropdown-quantity__item-title">${item.title}</div>
        <div class="dropdown-quantity__block-quantity">
          <div class="dropdown-quantity__button-minus" data-id="${item.id}" data-type="minus">-</div>       
          <div class="dropdown-quantity__value" data-id="${item.id}" data-type="value">${item.value}</div>
          <div class="dropdown-quantity__button-plus" data-id="${item.id}" data-type="plus">+</div>
        </div>  
      </li>
    `
  })

  return `
    <div class=dropdown-quantity__input data-type="input">
      <span class=dropdown-quantity__text data-type="text">${text}</span>
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
    // this.selectedId = null;

    this._render();
    this._setup();
  };

  _render() {
    const{placeholder, data} = this.options
    this.el.classList.add('dropdown-quantity');
    this.el.innerHTML = getTemplate(data, placeholder);
  };

  _setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.el.addEventListener('click', this.clickHandler);
    this.text = this.el.querySelector('[data-type="text"]');
    this.values = this.el.querySelectorAll('[data-type="value"]');
  };

  clickHandler(event) {
    const {type} = event.target.dataset;
    const arrayValues = [this.options.data[0].value, this.options.data[1].value, this.options.data[2].value];
    const arrayValuesCopy = arrayValues.slice();
    if(type === 'input' || type === 'text') {
      this.toggle();
    } else if (type ==='plus') {
      const id = event.target.dataset.id;
      const value = event.target.previousElementSibling;
      value.innerHTML = parseInt(value.textContent, 10)+1;
      console.log(`value : ${value.textContent}, id : ${id}`);
      if(id === '1') {
        arrayValuesCopy[0] = value.textContent;
        this.text.textContent = `${this.options.data[0].title} ${arrayValuesCopy[0]} ${this.options.data[1].title} ${arrayValuesCopy[1]} ${this.options.data[2].title} ${arrayValuesCopy[2]}`;
      }
      if(id === '2') {
        arrayValuesCopy[1] = value.textContent;
        this.text.textContent = `${this.options.data[0].title} ${arrayValuesCopy[0]} ${this.options.data[1].title} ${arrayValuesCopy[1]} ${this.options.data[2].title} ${arrayValuesCopy[2]}`;
      if(id === '3') {
        arrayValuesCopy[2] = value.textContent;
        this.text.textContent = `${this.options.data[0].title} ${arrayValuesCopy[0]} ${this.options.data[1].title} ${arrayValuesCopy[1]} ${this.options.data[2].title} ${arrayValuesCopy[2]}`;
    }

    } else if (type ==='minus') {
        const id = event.target.dataset.id;
        const value = event.target.nextElementSibling;
        value.innerHTML = parseInt(value.textContent, 10) - 1;
        console.log(`value : ${value.textContent}, id : ${id}`);
        // if (id === '1') {
        //   this.text.textContent = `${this.options.data[0].title} ${value.textContent} ${this.options.data[1].title} ${this.options.data[2].title}`;
        // } else if (id === '2') {
        //   this.text.textContent = `${this.options.data[0].title} ${this.options.data[1].title} ${value.textContent} ${this.options.data[2].title}`;
        // } else if (id === '3') {
        //   this.text.textContent = `${this.options.data[0].title} ${this.options.data[1].title} ${this.options.data[2].title} ${value.textContent}`;
        // }
      }
    }
  };

  get isOpen() {
    return this.el.classList.contains('open');
  };

  // get current() {
  //   return this.options.data.find(item => item.id === this.selectedId)
  // }
  //
  // count(id) {
  //   this.selectedId = id;
  // };

  toggle() {
    this.isOpen ? this.close() : this.open();
  };

  open() {
    this.el.classList.add('open');
  };

  close() {
    this.el.classList.remove('open');
  };

  destroy() {
    this.el.removeEventListener('click', this.clickHandler)
  };
}