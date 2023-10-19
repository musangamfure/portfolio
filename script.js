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

navLink.forEach((n) =>
  n.addEventListener('click', () => {
    navLinks.classList.remove('show-links');
  })
);

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

// =============Popup Window ===========
// create an array of objects to hold information about each project
const projects = [
  {
    id: 1,
    title: 'Todo List App',
    client: 'Microverse',
    role: 'Front-End Developer',
    year: '2023',
    description:
      'A minimalistic and simple todo-list app which allow users to add, edit and remove tasks.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './images/todo.png',
    modaltext:
      'Todo-List-App is a simple minimalistic web application for creating and managing to-do lists. It allows users to create new tasks, mark tasks as completed, edit tasks, and delete tasks as needed. The app is built with HTML, CSS, JavaScript for frontend and Local storage ',
    live: 'https://musangamfure.github.io/portfolio/',
    source: 'https://github.com/musangamfure/portfolio',
  },
  {
    id: 2,
    title: 'Mona Ecommerce Store',
    client: 'Microverse',
    role: 'Front-End Dev',
    year: '2023',
    description:
      ' This is a highly customizable, visually appealing and user-friendly modern ecommerce template is designed to adapt seamlessly to all device screens.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './images/demo.png',
    modaltext:
      '  This is a highly customizable, visually appealing and user-friendly modern ecommerce template is designed to adapt seamlessly to all device screens, ensuring an exceptional user experience for desktops, laptops, tablets, and smartphones. t functions flawlessly across all major web browsers, providing a consistent and reliable shopping experience for your customers.Tailor the template to your brands unique identity with ease. Customize colors, fonts, and layouts to align with your business aesthetics. ',
    live: 'https://musangamfure.github.io/mona-ecommerce-website/',
    source: 'https://github.com/musangamfure/mona-ecommerce-website',
  },
  {
    id: 3,
    title: 'Car Hub',
    client: 'Microverse',
    role: 'Full-Stack Dev',
    year: '2023',
    description:
      'Carhub App is the React client of a robust full-stack web application powered by the Ruby on Rails API.',
    tags: ['HTML', 'CSS', 'Ruby on Rails', 'React', 'Redux'],
    image: './images/car-hub.png',
    modaltext:
      ' Welcome to Carhub, the go-to destination for effortless car reservation and purchasing. Carhub App is the React client of a robust full-stack web application powered by the Ruby on Rails API. This dynamic platform is designed to provide users with a hassle-free experience when booking reservations for renting or buying their dream car. Browse a diverse range of cars, from economy to luxury, and make reservations in just a few clicks. Customize your reservation with options for pickup and drop-off locations, dates, and more ',
    live: 'https://carreservation.netlify.app/',
    source: 'https://github.com/musangamfure/Car-Hub',
  },
  {
    id: 4,
    title: 'Space Travelers App',
    client: 'Microverse',
    role: 'Front-End Dev',
    year: '2023',
    description:
      'A Space-Travelers gateway app for Rockets reserving and participating in captivating space missions',
    tags: ['HTML', 'CSS', 'Redux', 'React'],
    image: './images/space-travelers.png',
    modaltext:
      ' This is Space-Travelers gateway app for Rockets reserving and participating in captivating space missions.  Our app is a versatile platform, leveraging API calls through RapidAPI, and developed with React and Redux Toolkit. Stay informed with real-time mission updates, launch schedules, and mission statuses. Space-Travelers keeps you connected to the ever-changing world of space exploration.  ',
    live: 'https://dev--adorable-pegasus-239e60.netlify.app/',
    source: 'https://github.com/musangamfure/Space-Travelers',
  },
];

// get the works section from the HTML document
const worksSection = document.querySelector('#portfolio');

// iterate through the projects array and create a card element for each project
projects.forEach((project) => {
  // create the card element
  const card = document.createElement('div');
  card.classList.add('card');

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
        ${project.tags.map((tag) => `<h3>${tag}</h3>`).join('')}
      </div>
      <button class="simple-button" data-modal-target="#modal${
        project.id
      }" type="button">See Project</button>
    </div>
    <section>
        <div class="project-modal hide" id="modal${project.id}" >
          <div class="modal-body">
            <img
              id="close-icon"
              class="modal-btn" data-modal-close-button
              src="./images/close-icon.png"
              alt=""
            />
            <h3 class="modal-title">${project.title}</h3>
            <div class="frame">
              <h4 class="client">${project.client}</h4>
              <img src="./images/Counter.png" alt="" class="counter" />
              <h4 class="role">${project.role}</h4>
              <img src="./images/Counter.png" alt="" class="counter" />

              <h4 class="year">${project.year}</h4>
            </div>
            <div class="project-img">
              <img class="modal-img" src="${
                project.image
              }" alt="project photo" />
            </div>
            <p class="modaltext">${project.modaltext}</p>
            <div class="tags">
              ${project.tags.map((tag) => `<h3>${tag}</h3>`).join('')}
            </div>
            <hr />
            <div class="modal-buttons">
              <button class="simple-button" type="button">
               <a class="live" href="${
                 project.live
               }">See Live <img src="./images/live-icon.svg" alt="live icon" /></a> 
              </button>
              <button class="simple-button" type="button">
              <a class="source" href="${project.source}">See Source
                <img src="./images/github-icon.svg" alt="github icon" /></a>  
              </button>
            </div>
          </div>
        </div>
      </section>
  `;

  // set the HTML content of the card element
  card.innerHTML = html;

  // append the card element to the works section
  worksSection.appendChild(card);
});

// ================ Project modal ================

const seeProjectBtn = document.querySelectorAll('[data-modal-target]');
const modalCloseBtn = document.querySelectorAll('[data-modal-close-button]');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.toggle('hide');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.toggle('hide');
}
seeProjectBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
modalCloseBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.project-modal');
    closeModal(modal);
  });
});

// =============End of Popup Window ===========

// =========Local Storage ============

const formName = document.querySelector('.name');
const formEmail = document.querySelector('.email');
const formMessage = document.querySelector('.message');

const formData = JSON.parse(localStorage.getItem('formData')) || {};

formName.value = formData.name || '';
formEmail.value = formData.email || '';
formMessage.value = formData.message || '';

form.addEventListener('input', () => {
  const newFormData = {
    name: formName.value,
    email: formEmail.value,
    message: formMessage.value,
  };

  localStorage.setItem('formData', JSON.stringify(newFormData));
});

navLink.forEach((n) =>
  n.addEventListener('click', () => {
    navLinks.classList.remove('show-links');
  })
);
