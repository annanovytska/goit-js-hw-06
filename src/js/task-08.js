const formElement = document.querySelector('.login-form');
console.dir(formElement);

formElement.addEventListener('submit', onFormElementSubmit);

function onFormElementSubmit(event) {
  event.preventDefault();
  const email = formElement.elements.email.value;
  const password = formElement.elements.password.value;
  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповненні');
  } else {
    const saveUserInfo = { email, password };
    formElement.reset();
    console.log(saveUserInfo);
  }
}
