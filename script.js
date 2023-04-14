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

// =========Local Storage ============

const form = document.querySelector("#form");
const formName = document.querySelector(".name");
const formEmail = document.querySelector(".email");
const formMessage = document.querySelector(".message");

const formData = JSON.parse(localStorage.getItem("formData")) || {};

formName.value = formData.name || "";
formEmail.value = formData.email || "";
formMessage.value = formData.message || "";

form.addEventListener("input", () => {
  const newFormData = {
    name: formName.value,
    email: formEmail.value,
    // message: formMessage.value,
  };

  localStorage.setItem("formData", JSON.stringify(newFormData));
});

// ========= End of Local Storage ============
