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

// ===============Work Section===========

// create an array of objects to hold information about each project
const projects = [
  {
    title: "Tonic",
    client: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: ["HTML", "CSS", "Ruby on Rails", "JavaScript"],
    image: "./images/nature.png",
  },
  {
    title: "Multi-Post Stories",
    client: "FACEBOOK",
    role: "Full Stack Dev",
    year: "2015",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    tags: ["HTML", "CSS", "Ruby on Rails", "JavaScript"],
    image: "./images/professinal.png",
  },
  {
    title: "Tonic",
    client: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tags: ["HTML", "CSS", "Ruby on Rails", "JavaScript"],
    image: "./images/Snapshoot-Portfolio.svg",
  },
  {
    title: "Uber Navigation",
    client: "Uber",
    role: "Lead Developer",
    year: "2015",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    tags: ["HTML", "CSS", "Ruby on Rails", "JavaScript"],
    image: "./images/uber.png",
  },
];

// get the works section from the HTML document
const worksSection = document.querySelector("#portfolio");

// iterate through the projects array and create a card element for each project
projects.forEach((project) => {
  // create the card element
  const card = document.createElement("div");
  card.classList.add("card");

  // create the HTML content for the card
  const html = `
    <div class="work-col-1">
      <img class="snapshoot" src="${project.image}" alt="" />
    </div>
    <div class="work-col-2">
      <h3 class="project-title">${project.title}</h3>
      <div class="frame">
        <h4 class="client">${project.client}</h4>
        <img src="./images/Counter.png" alt="" class="counter" />
        <h4 class="role">${project.role}</h4>
        <img src="./images/Counter.png" alt="" class="counter" />
        <p class="year">${project.year}</p>
      </div>
      <div class="primary-text">
        <p>${project.description}</p>
      </div>
      <div class="tags">
        ${project.tags.map((tag) => `<h3>${tag}</h3>`).join("")}
      </div>
      <button class="simple-button" type="button">See Project</button>
    </div>
  `;

  // set the HTML content of the card element
  card.innerHTML = html;

  // append the card element to the works section
  worksSection.appendChild(card);
});

// ========= Window Popup ==========

const projectModals = document.querySelector(".project-modal");
const modalCloseBtn = document.querySelector("#close-icon");
const seeProjectBtns = document.querySelectorAll(".simple-button");

seeProjectBtns.forEach((seeProjectBtn, i) => {
  seeProjectBtn.addEventListener("click", () => {
    projectModals.classList.toggle("hide");
  });
});

modalCloseBtn.addEventListener('click', ())

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    projectModals.forEach((modalview) => {
      modalview.classList.remove("active");
    });
  });
});
