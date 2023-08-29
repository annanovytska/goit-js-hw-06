const inputItem = document.querySelector('#font-size-control');

const spanItem = document.querySelector('#text');

inputItem.addEventListener('input', onInputItemInput);

function onInputItemInput(event) {
  const inputValue = inputItem.value;
  spanItem.style.fontSize = `${inputValue}px`;
}

console.dir(inputItem);
