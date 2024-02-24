let modal = document.querySelector('.modal');
let email = document.getElementById('email');

document.getElementById("form_coming").addEventListener("submit", function(event) {  
  let errorMessage = document.querySelector('.error');
  let iconError = document.querySelector('.icon_error');  

  if (!checkEmail(email.value)) {
      errorMessage.classList.add("active");
      iconError.classList.add("active");
      email.focus();
      event.preventDefault();
  } else {
      errorMessage.classList.remove("active");
      iconError.classList.remove("active");
      modal.classList.add("active");
      event.preventDefault();
  }
});

function checkEmail(email) {
  let regex = /^[a-zA-Z0-9._-]+@(gmail|icloud|outlook)\.(com|apple)$/;
  return regex.test(email);
}

let closeModal = document.querySelector('.btn_close');

closeModal.addEventListener('click', function() {
  modal.classList.remove("active");
  email.value = "";
});

