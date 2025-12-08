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

// Cards
document.querySelectorAll('#iam-cards .flip-card').forEach(card => {
    card.addEventListener('click', () => {
        // Close all cards first
        document.querySelectorAll('#iam-cards .flip-card').forEach(c => {
            if (c !== card) c.classList.remove('flip');
        });

        // Toggle the clicked card
        card.classList.toggle('flip');
    });
});

// FAQs
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
    faq.querySelector(".faq-question").addEventListener("click", () => {
        faqs.forEach((item) => {
            if (item !== faq) item.classList.remove("active");
        });
        faq.classList.toggle("active");
    });
});