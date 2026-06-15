const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-shadow");
    } else {
        navbar.classList.remove("navbar-shadow");
    }
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});