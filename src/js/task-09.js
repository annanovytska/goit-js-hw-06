function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonItem = document.querySelector('.change-color');
const spanItem = document.querySelector('.color');

buttonItem.addEventListener('click', onButtonItemClick);
function onButtonItemClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  document.body.dataset.backgroundColor = color;
  // const bgColor = document.body.style.backgroundColor;
  const bgColor = document.body.dataset.backgroundColor;
  console.log(bgColor);
  spanItem.textContent = bgColor;
}
