const refs = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

refs.input.addEventListener('input', onInputNumber);
refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function onInputNumber() {
  return refs.input.value;
}

function createBoxes(amount) {
  amount = onInputNumber();
  refs.boxes.textContent = '';

  let newDiv = document.createElement('div');
  newDiv.style.backgroundColor = getRandomHexColor();
  newDiv.style.width = "30px";
  newDiv.style.height = "30px";
  refs.boxes.append(newDiv);
  
  for (let i = 1; i < amount; i += 1) {
    const step = 10;

    let firstWidth = Number.parseInt(newDiv.style.width);
    let firstHeight = Number.parseInt(newDiv.style.height);

    newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
    firstWidth += step;
    firstHeight += step;

    newDiv.style.width = `${firstWidth}px`;
    newDiv.style.height = `${firstWidth}px`;

    refs.boxes.append(newDiv);
  }
}

function destroyBoxes () {
  refs.boxes.textContent = '';
  refs.input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}