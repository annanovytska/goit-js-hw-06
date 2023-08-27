const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector('#ingredients');

function makeItem(ingredient) {
  const itemElement = document.createElement('li');
  itemElement.classList.add('item');
  itemElement.textContent = ingredient;
  return itemElement;
}

const makeItemArray = ingredients.map(ingredient => makeItem(ingredient));

listElement.append(...makeItemArray);
