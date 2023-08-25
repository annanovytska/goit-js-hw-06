const listElement = document.querySelector('#categories');
const itemElement = listElement.children;

console.log(`Number of categories: ${itemElement.length}`);

const message = [...itemElement].forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
