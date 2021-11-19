const navSlide = () => {
  const burger = document.querySelector('.header__menu-burger')
  const nav = document.querySelector('.header__menu')
  const menuItem = document.querySelectorAll('.header__menu-item, .header__button-login, .header__button-register')
  burger.addEventListener('click', ()=> {
    //Toggle Nav
    nav.classList.toggle('header__menu-active')
    document.body.classList.toggle('lock')
    //Animate Nav
    menuItem.forEach((item,index) => {
      if(item.style.animation) {
        item.style.animation = ''
      } else {
        item.style.animation = `menuItemFade .5s ease forwards ${index/7 + 0.3}s`
      }
    })
    //Burger Animation
    burger.classList.toggle('toggle')
  })
}

navSlide()

