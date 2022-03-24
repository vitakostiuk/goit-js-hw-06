const refs = {
  changeFontSize: document.querySelector('#font-size-control'),
  text: document.querySelector('#text')
}

refs.changeFontSize.addEventListener('input', handleChangeFontSize);

function handleChangeFontSize() {
  refs.text.style.fontSize = `${refs.changeFontSize.value}px`;
}