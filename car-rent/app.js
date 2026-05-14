const menuIcon = document.querySelector(".header-nav .ham-burger");
const navLinks = document.querySelector(".header-nav nav ul");
const logInBtn = document.querySelector(".nav-action .login-btn");

menuIcon.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
})

function fun(){
    alert("website is in process !!!!")
}

logInBtn.addEventListener("click",fun);