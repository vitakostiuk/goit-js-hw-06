const formRef = document.querySelector('.login-form');

// ccbv@mail.com

const onSubmitForm = (e) => {
  e.preventDefault();

  const inputEmailValue = formRef.elements.email.value;
  const inputPasswordValue = formRef.elements.password.value;

  if (!inputEmailValue || !inputPasswordValue) {
    alert('Заполни все поля!');
    return;
  }

  const formObjValues = {
    email: inputEmailValue,
    password: inputPasswordValue
  };
  console.log(formObjValues);
  formRef.reset();
}

formRef.addEventListener('submit', onSubmitForm);
