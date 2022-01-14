// Задание 9
// Напиши скрипт, который изменяет цвета фона
// элемента < body > через инлайн стиль при 
// клике на button.change - color и выводит 
// значение цвета в span.color.

// <div class="widget">
//   <p>Background color: 
//     <span class="color">-</span></p>
//   <button type="button" class="change-color">
//     Change color</button>
// </div>
//   Для генерации случайного цвета используй функцию
// getRandomHexColor.


const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
  body: document.querySelector('body'),
}

refs.changeColorBtn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  refs.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.colorValue.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return refs.body.style.backgroundColor;
}