/* script.js (JavaScript) */
// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

     //Save theme preference to localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Check for saved theme preference on page load and apply
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;

    if (savedTheme === "dark") {
        body.classList.add("dark-mode"); // Apply dark mode
    } else {
      body.classList.remove("dark-mode"); // Ensure light mode by default
    }
}

// Load the theme when the page loads
window.onload = loadTheme;

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active");
}

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.classList.add("nav-hidden");
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    } else {
        navbar.classList.remove("nav-hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});