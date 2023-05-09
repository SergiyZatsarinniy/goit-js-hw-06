const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = loginFormRef.elements.email.value;
  const password = loginFormRef.elements.password.value;

  if (email === '' || password === '') {
    return alert('Всі поля повинні бути заповнені');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  loginFormRef.reset();
});
