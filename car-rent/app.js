const menuIcon = document.querySelector(".header-nav .ham-burger");
const navLinks = document.querySelector(".header-nav nav ul");

menuIcon.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
})