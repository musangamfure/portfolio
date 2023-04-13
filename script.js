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

if (storageAvailable("localStorage")) {
  const setFormValues = () => {
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
  };

  form.name.addEventListener("change", setFormValues);
  form.email.addEventListener("change", setFormValues);
  form.message.addEventListener("change", setFormValues);

  const checkLocal = () => {
    let name = "";
    let email = "";
    let message = "";

    if (JSON.parse(localStorage.getItem("formData")) === null) {
      name = "";
      email = "";
      message = "";
    } else {
      ({ name, email, message } = JSON.parse(localStorage.getItem("formData")));
    }

    if (name !== "empty" || email !== "empty" || message !== "empty") {
      form.name.value = name;
      form.email.value = email;
      form.message.value = message;
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    checkLocal();
  });
}
// ========= End of Local Storage ============
