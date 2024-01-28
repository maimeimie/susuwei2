const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');

};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');

};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    checkLogin(usernameValue, passwordValue);
    setSuccess(username);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else {
    checkLogin(usernameValue, passwordValue);
    setSuccess(password);
  }
};
let validUserCredentials = [
  { username: "kruton", password: "1001" },
  { username: "krukan", password: "1002" },
];

const checkLogin = (inputUsername, inputPassword) => {
  let isValid = false;
  for (let i = 0; i < validUserCredentials.length; i++) {
    const { username, password } = validUserCredentials[i];

    if (inputUsername === username && inputPassword === password) {
      isValid = true;
      break;
    }
  }

  if (!isValid) {
    setError(username, 'Please try again');
    setError(password, 'Please try again');
  } else {
    window.location.href = '/WebDevTC/home-tc.html';
  }
};

const handleLogin = () => {
  validateInputs();
};

form.addEventListener('submit', e => {
  e.preventDefault();
  handleLogin();
});