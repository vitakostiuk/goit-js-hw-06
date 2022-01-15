// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает 
// один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и 
// выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.


const refs = {
  inputNumber: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


refs.inputNumber.addEventListener('input', getAmountOfBoxes);

function getAmountOfBoxes() {
  const amountOfBoxes = refs.inputNumber.value;
  return amountOfBoxes;
}


refs.createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = getAmountOfBoxes();
  console.log(amount);
  let sizeOfBlock = 30;
  const arrFromBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const newTagDiv = document.createElement('div');
    newTagDiv.style.cssText = `width: ${sizeOfBlock}px; height: ${sizeOfBlock}px`;
    arrFromBoxes.push(newTagDiv);
    sizeOfBlock += 10;

    newTagDiv.style.backgroundColor = getRandomHexColor();

    console.log(arrFromBoxes);
    refs.boxes.append(newTagDiv);
  }
}


refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.inputNumber.value = '';

  const newBoxes = document.getElementById('boxes');
  newBoxes.innerHTML = '';
}


