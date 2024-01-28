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
  { username: "22801", password: "2001" },
  { username: "22867", password: "2002" },
  { username: "22868", password: "2003" },
  { username: "22869", password: "2004" },
  { username: "22874", password: "2005" },
  { username: "22898", password: "2006" },
  { username: "22900", password: "2007" },
  { username: "23558", password: "2008" },
  { username: "22820", password: "2009" },
  { username: "22827", password: "2010" },
  { username: "22846", password: "2011" },
  { username: "22850", password: "2012" },
  { username: "22859", password: "2013" },
  { username: "22883", password: "2014" },
  { username: "22887", password: "2015" },
  { username: "22909", password: "2016" },
  { username: "22912", password: "2017" },
  { username: "22916", password: "2018" },
  { username: "22919", password: "2019" },
  { username: "22922", password: "2020" },
  { username: "22924", password: "2021" },
  { username: "23265", password: "2022" },
  { username: "23561", password: "2023" },
  { username: "23562", password: "2024" },
  { username: "23563", password: "2025" },
  { username: "23564", password: "2026" },
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
    window.location.href = '/WebDevST/home-page.html';
  }
};

const handleLogin = () => {
  validateInputs();
};

form.addEventListener('submit', e => {
  e.preventDefault();
  handleLogin();
});