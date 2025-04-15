let menuIcon= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
}