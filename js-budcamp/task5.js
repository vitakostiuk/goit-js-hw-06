const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onClickInput);

function onClickInput() {
  const inputValue = refs.input.value;
  console.log(inputValue.length);
  // if (inputValue.length) {
  //   refs.output.textContent = inputValue;
  // } else {
  //   refs.output.textContent = 'Anonymous';
  // }

  refs.output.textContent = inputValue.length
    ? inputValue
    : 'Anonymous';
}