// Scroll change backkground header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Menu burger
const burger = document.querySelector(".menu_burger");
const burger_icone = document.querySelector("#burger_icone");
const close_icone = document.querySelector("#close_icone");

burger_icone.onclick = function () {
    burger.style.transform = "translateX(0)";
};
close_icone.onclick = function () {
    burger.style.transform = "translateX(110vw)";
    

}

