function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const form = document.getElementsByName('reserve');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal event
modalCloseBtn[0].addEventListener ("click", closeModal);

// Keep form data
form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

// Check validation of condition provided
function checkCondition(condition){
  if(!condition) return false;
  else return true;
}

// Send specific error message rather than elementId provided
// Add aria invalid for use CSS
function getErrorMessage(elementId, message, inputAssociate){
  if(elementId && message) {
    document.getElementById(elementId).style.display = "block";
    document.getElementById(elementId).innerText = message;
    if(inputAssociate) inputAssociate.setAttribute("aria-invalid", "true");
  }
  else throw new Error('Missing parameter for handler error message');
}




