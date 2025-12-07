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

// Logo Carousel
const carousel = document.querySelector('.logo-carousel');
let index = 0;

function autoScroll() {
    const width = carousel.clientWidth;
    index++;

    carousel.scrollTo({
        left: width * index,
        behavior: "smooth"
    });

    if (index >= carousel.children[0].children.length) {
        index = 0;
    }
}

setInterval(autoScroll, 5000);

// Mobile Nav Bar
document.addEventListener("DOMContentLoaded", function () {

    // Get all dropdown toggle anchors
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function (e) {
            e.preventDefault(); // prevent page jump

            const parentDropdown = this.parentElement;

            // If already open → close it
            if (parentDropdown.classList.contains("active")) {
                parentDropdown.classList.remove("active");
            }
            else {
                // Close any open dropdowns
                document.querySelectorAll(".dropdown.active")
                    .forEach(d => d.classList.remove("active"));

                // Open the tapped dropdown
                parentDropdown.classList.add("active");
            }
        });
    });

    // Close dropdown if user taps outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown.active")
                .forEach(d => d.classList.remove("active"));
        }
    });

});

// Scroll Down
document.getElementById("scrollTrigger").addEventListener("click", () => {
    document.getElementById("content-2").scrollIntoView({
        behavior: "smooth"
    });
});