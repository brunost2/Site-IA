function changeBackground() {
    var body = document.querySelector("body");
    body.style.backgroundColor = "lightblue";
  }
  // navigation menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
navigation.classList.toggle('active');
});

// smooth scrolling
const navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const targetId = link.getAttribute('href');
const targetPosition = document.querySelector(targetId).offsetTop;
window.scrollTo({
top: targetPosition - 50,
behavior: 'smooth'
});
});
});

// form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
e.preventDefault();


if (nameInput.value === '') {
	showError(nameInput, 'Name is required');
} else {
	showSuccess(nameInput);
}

if (emailInput.value === '') {
	showError(emailInput, 'Email is required');
} else if (!isValidEmail(emailInput.value)) {
	showError(emailInput, 'Email is not valid');
} else {
	showSuccess(emailInput);
}

if (messageInput.value === '') {
	showError(messageInput, 'Message is required');
} else {
	showSuccess(messageInput);
}
});

function showError(input, message) {
const formControl = input.parentElement;
formControl.classList.remove('success');
formControl.classList.add('error');
const errorMessage = formControl.querySelector('.error-message');
errorMessage.innerText = message;
}

function showSuccess(input) {
const formControl = input.parentElement;
formControl.classList.remove('error');
formControl.classList.add('success');
}

function isValidEmail(email) {
const pattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return pattern.test(email);
}