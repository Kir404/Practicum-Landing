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

//функция для работы с несколькими блоками FAQ
document.querySelectorAll('#faq-block').forEach(function(faqWrapper){
const faqBtn = faqWrapper.querySelector('#faq-btn');
const faqInner = faqWrapper.querySelector('#faq-inner');
const imgFaqOpen = faqWrapper.querySelector('#faq-open'); 
const imgFaqClose = faqWrapper.querySelector('#faq-close'); 

faqBtn.addEventListener('click', () =>{
   faqInner.classList.toggle('hide');
   imgFaqClose.classList.toggle('hide');
   imgFaqOpen.classList.toggle('hide');
})
})