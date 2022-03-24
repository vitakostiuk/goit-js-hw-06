const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const newIngredientLi = document.createElement('li');
  newIngredientLi.textContent = ingredient;
  newIngredientLi.classList.add('item');

  ingredientsRef.append(newIngredientLi);
})