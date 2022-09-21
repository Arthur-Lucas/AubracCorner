// Scroll change backkground header
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Menu burger
const burger = document.querySelector('.menu_burger');
/*
if (window.matchMedia("(max-width: 700px)").matches) {
    burger.onclick




*/