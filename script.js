document.querySelector('.nav-link[data-section="home"]').classList.add('active');
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

// Navigation functionality
// Navigation functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const sectionId = this.getAttribute('data-section');
        
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected section
        document.getElementById(sectionId.charAt(0).toUpperCase() + sectionId.slice(1)).classList.add('active');
        
        // Update active state in navigation
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close mobile menu if open
        navItems.classList.remove('active');
        body.classList.remove('menu-open');
    });
});


// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
const body = document.body;

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navItems.contains(event.target) && !hamburger.contains(event.target)) {
        navItems.classList.remove('active');
        body.classList.remove('menu-open');
    }
});