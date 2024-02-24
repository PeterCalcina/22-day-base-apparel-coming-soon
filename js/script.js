let modal = document.querySelector('.modal');
let email = document.getElementById('email');
let errorMessage = document.querySelector('.error');
let iconError = document.querySelector('.icon_error');

document.getElementById("form_coming").addEventListener("submit", function (event) {
  if (!checkEmail(email.value)) {
    showErroMessages(email.value);
  } else {
    clearErrorMessages();
  }
  event.preventDefault();
});

function checkEmail(email) {
  let regex = /^[a-zA-Z0-9._-]+@(gmail|icloud|outlook)\.(com|apple)$/;
  return regex.test(email);
}

function validateEmptyField(value) {
  return value === "" ?
    "Email cannot be empty" :
    "Please provide a valid email";
}

function showErroMessages(value) {
  errorMessage.textContent = validateEmptyField(value);
  
  errorMessage.classList.add("active");
  iconError.classList.add("active");
  email.focus();
}

function clearErrorMessages() {
  errorMessage.textContent = "";
  errorMessage.classList.remove("active");
  iconError.classList.remove("active");
  modal.classList.add("active");
}

let closeModal = document.querySelector('.btn_close');

closeModal.addEventListener('click', function () {
  modal.classList.remove("active");
  email.value = "";
});
