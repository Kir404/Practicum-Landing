const dropDown = document.querySelector('#dropdown_list');
const burgerBtn = document.querySelector('#burger-button');
const closeBtn = document.querySelector('#dropdown-btn');
const body = document.querySelector('#dropdown-btn');
const hero = document.querySelector('#hero');
const imgBurger = document.querySelector('#burger-btn');
const imgBurgerClose = document.querySelector('#burger-close');

burgerBtn.addEventListener('click', () => {
   dropDown.classList.toggle('hide');
   hero.classList.toggle('blur');
   imgBurger.classList.toggle('hide');
   imgBurgerClose.classList.toggle('hide');
})
