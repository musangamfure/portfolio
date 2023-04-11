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
