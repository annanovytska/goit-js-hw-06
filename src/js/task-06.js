const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
  inputEl.classList.remove('valid', 'invalid');
  if (+inputEl.dataset.length === inputEl.value.length) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
