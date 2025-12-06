// Select the navbar
const navbar = document.querySelector('.navbar');

// Function to handle scroll
function handleScroll() {
    if (window.scrollY > 50) {      // adjust scroll distance
        navbar.classList.add('scrolled');
        navbar.classList.remove('default');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('default');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initialize with default class
navbar.classList.add('default');
