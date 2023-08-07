var wrapper = document.querySelector('.wrapper');
var loginLink = document.querySelector('.login-link');
var registerLink = document.querySelector('.register-link');
var btnPopup = document.querySelector('.btnLogin-popup');
var iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener("click",()=>{
    wrapper.classList.add("active-popup")
});

iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("active-popup")
});

registerLink.addEventListener("click", ()=>{
wrapper.classList.add("active")
});

loginLink.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});




