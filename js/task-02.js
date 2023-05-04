const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();
ingredients.forEach((ingredient) => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  fragment.appendChild(listEl);
});
ingredientsList.appendChild(fragment);
