// ================Mobile Menu===============
const humbargerMenu = document.querySelector('.toggle-btn');

const navLinks = document.querySelector('.nav-links');

const closeIcon = document.querySelector('.close-icon');

const navLink = document.querySelectorAll('.nav-link');

humbargerMenu.addEventListener('click', () => {
  navLinks.classList.add('show-links');
});
closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('show-links');
});

navLink.forEach((n) => n.addEventListener('click', () => {
  navLinks.classList.remove('show-links');
}));

// ================ End of Mobile Menu===============

// ========Client side validation============

const email = document.querySelector('.email');
const form = document.querySelector('#form');
const error = document.querySelector('.error');
const sent = document.querySelector('.sent');

function isItUppercase(value) {
  if (value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  if (isItUppercase(email.value)) {
    sent.textContent = ' Message Sent!';
    email.style.border = '1px solid green';
  } else {
    e.preventDefault();
    error.textContent = 'Email should be in lowerCase';
    email.style.border = '2px solid red';
  }
});

// =============End of form validation ===========
