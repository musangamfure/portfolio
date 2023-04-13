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

// ========= Window Popup ===========

const projectData = [
  {
    name: "Tonic",
    client: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    tags: ["HTML", "CSS", "Ruby on Rails", "JavaScript"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/example",
    image: "./images/mobile-detail.svg",
  },
  // Add more project objects here
];

const projectModal = document.createElement("div");
projectModal.classList.add("project-modal");

const modalBody = document.createElement("div");
modalBody.classList.add("modal-body");
projectModal.appendChild(modalBody);

const closeButton = document.createElement("img");
closeButton.classList.add("modal-btn");
closeButton.src = "./images/close-icon.png";
closeButton.alt = "";
modalBody.appendChild(closeButton);

const projectName = document.createElement("h3");
projectName.textContent = projectData[0].name;
modalBody.appendChild(projectName);

const frame = document.createElement("div");
frame.classList.add("frame");
modalBody.appendChild(frame);

const client = document.createElement("h4");
client.classList.add("client");
client.textContent = projectData[0].client;
frame.appendChild(client);

const counter1 = document.createElement("img");
counter1.classList.add("counter");
counter1.src = "./images/Counter.png";
counter1.alt = "";
frame.appendChild;

// ==============Project Modal========

const projectModals = document.querySelectorAll(".project-modal");
const modalCloseBtns = document.querySelectorAll(".modal-btn");
const seeProjectBtns = document.querySelectorAll(".simple-button");

const modal = function (modalClick) {
  projectModals[modalClick].classList.add("active");
};

seeProjectBtns.forEach((seeProjectBtn, i) => {
  seeProjectBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    projectModals.forEach((modalview) => {
      modalview.classList.remove("active");
    });
  });
});

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
