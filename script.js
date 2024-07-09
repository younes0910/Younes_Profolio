// Typing effect
const nameElement = document.getElementById('name');
const fullName = "BENRESKALLAH YOUNES";
let index = 0;

function typeName() {
    if (index < fullName.length) {
        nameElement.innerHTML += fullName.charAt(index);
        index++;
        setTimeout(typeName, 100);
    }
}

window.addEventListener('load', typeName);

// Popup functionality
const popupContainer = document.getElementById('popup-container');
const popupContent = document.getElementById('popup-content');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const closePopup = document.getElementById('close-popup');

const popupData = {
    about: {
        title: "About Me",
        content: "Hi, I'm Younes Benreskallah, a Data Scientist and Game Designer passionate about creating data-driven gaming experiences. With a background in [your degree], I've worked on projects ranging from [brief example]. I'm driven by the challenge of merging analytical insights with creative game design to craft engaging user experiences. When I'm not crunching numbers or designing games, you'll find me [related hobby]. I'm always looking for new opportunities to push the boundaries of data science in gaming."
    },
    skills: {
        title: "My Skills",
        content: "These are my skills..."
    },
    projects: {
        title: "My Projects",
        content: "Here are some of my projects..."
    },
    order: {
        title: "Order My Services",
        content: "You can order my services here..."
    }
};
function changePopupContent(newContent) {
  popupContent.classList.add('fade-out');
  setTimeout(() => {
    popupText.textContent = newContent;
    popupContent.classList.remove('fade-out');
  }, 300);
};
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const popupType = e.target.getAttribute('data-popup');
        popupTitle.textContent = popupData[popupType].title;
        popupText.textContent = popupData[popupType].content;
        popupContainer.classList.remove('hidden');
    });
});

closePopup.addEventListener('click', () => {
    popupContainer.classList.add('hidden');
});
particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      }
    }
  });
  // Add this to your existing JavaScript
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add 'active' class to clicked link
        this.classList.add('active');
        
        const popupType = this.getAttribute('data-popup');
        popupTitle.textContent = popupData[popupType].title;
        changePopupContent(popupData[popupType].content);
        popupContainer.classList.remove('hidden');
    });
});

// Close popup and remove 'active' class when closing
closePopup.addEventListener('click', () => {
    popupContainer.classList.add('hidden');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
});
// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
const body = document.body;

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navItems.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navItems.contains(event.target) && !hamburger.contains(event.target)) {
        navItems.classList.remove('active');
        body.classList.remove('menu-open');
    }
});