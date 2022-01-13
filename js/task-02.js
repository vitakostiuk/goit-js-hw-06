// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
// Напиши скрипт, который для каждого элемента 
// массива ingredients:

// Создаст отдельный элемент < li >.Обзательно 
// используй метод document.createElement().
// Добавит название ингредиента как его текстовое
// содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию 
// в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const listLiRefs = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = ingredient;
  return liRef;
});

console.log(listLiRefs);
ingredientsRef.append(...listLiRefs);


//--------Альтернативный вариант insertAdjacentHTML----------
// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const ingredientsRef = document.querySelector('#ingredients');

// const liMarkup = ingredients.map(
//   ingredient => `
//     <li> ${ingredient}</li>
//     `,
// );
// console.log(liMarkup);
// ingredientsRef.insertAdjacentHTML('beforeend', liMarkup.join(''));

