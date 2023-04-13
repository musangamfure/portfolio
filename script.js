// ================Mobile Menu=============

const humbargerMenu = document.querySelector(".toggle-btn");

const navLinks = document.querySelector(".nav-links");

const closeIcon = document.querySelector(".close-icon");

const navLink = document.querySelectorAll(".nav-link");

humbargerMenu.addEventListener("click", () => {
  navLinks.classList.add("show-links");
});
closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("show-links");
});

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navLinks.classList.remove("show-links");
  })
);

// =============End of Mobile Menu=========

// ========Client side validation============

const email = document.querySelector(".email");
const form = document.querySelector("#form");
const error = document.querySelector(".error");

function isItUppercase(value) {
  if (value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

form.addEventListener("submit", (e) => {
  if (isItUppercase(email.value)) {
    error.textContent = " Message Sent!";
    error.style.color = red;
  } else {
    e.preventDefault();
    error.textContent = "Email should be in lowerCase";
  }
});

// =============End of form validation ===========
