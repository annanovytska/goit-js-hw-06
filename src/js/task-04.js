let counterValue = 0;

const spanEl = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener('click', onIncrementBtn);

function onIncrementBtn(event) {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
