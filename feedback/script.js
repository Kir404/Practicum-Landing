const sendBtn = document.querySelector('#send-btn');
const logoBtn = document.querySelector('#logo-btn');

//Hover on Send button. Change logo to purple
sendBtn.addEventListener('mouseover', (event) => {
  logoBtn.setAttribute('src', '../img/ok_black.svg');
})

//Hover on Send button. Change logo to black
sendBtn.addEventListener('mouseout', (event) => {
  logoBtn.setAttribute('src', '../img/ok.svg');
})

// функция для работы кнопок отчистки полей
document.querySelectorAll('.input-block').forEach(function(InputBlock) {
  const clearBtn = InputBlock.querySelector('#logo-clear');
  const input = InputBlock.querySelector('#input');

  // show clear btn onclick on input
  input.addEventListener('click', (event) => {
    clearBtn.classList.remove('hidden');
  })

  // clear input and hide clear btn onclick on clear btn
  clearBtn.addEventListener('click', function() {
    input.value = "";
    clearBtn.classList.add('hidden');
  })

  //Outer click
  document.addEventListener('click', (event) => {
    if (event.target !== input) {
      clearBtn.classList.add('hidden');
    }
  })

  //Click Tab or Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      clearBtn.classList.add('hidden');
      input.blur();
    }
  })
})

// функция для возможной работы более 1 селектора
document.querySelectorAll('.select_custom').forEach(function(selectWrapper) {

  const inputs = selectWrapper.querySelector('fieldset');
  const list = selectWrapper.querySelector('#dropdowm-list');
  const listEl = selectWrapper.querySelectorAll('.dropdown_list-item');
  const dropDown = selectWrapper.querySelector('#dropdown_btn');
  const input = selectWrapper.querySelector('.dropdowm-input-hidden');
  const arrow = selectWrapper.querySelector('.logo-select');
  const selectText = selectWrapper.querySelector('#select-text');

  //Click on dropdowm button. Open/Close select
  dropDown.addEventListener('click', (event) => {
    dropDown.classList.add('open');
    list.classList.toggle('hidden');
    arrow.classList.toggle('rotate');
  })

  //Click on list item
  listEl.forEach(element => {
    element.addEventListener('click', function(event) {
      event.stopPropagation(); //запрет передачи значения вверх по документу
      arrow.classList.remove('rotate');
      selectText.innerText = this.innerText;
      dropDown.focus();
      input.value = this.dataset.value;
      list.classList.add('hidden');
    })
  });

  //Outer click
  document.addEventListener('click', (event) => {
    if (event.target !== dropDown) {
      list.classList.add('hidden');
      dropDown.classList.remove('open');
      arrow.classList.remove('rotate');
    }
  })

  //Click Tab or Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      list.classList.add('hidden');
      dropDown.classList.remove('open');
      arrow.classList.remove('rotate');
    }
  })
})
