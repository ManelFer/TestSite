let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};
// carrossel das hablidades
var carousel = document.getElementById("carousel");
var images = carousel.getElementsByTagName("img");
var current = 0;
function next(){
    images[current].style.display = "none";
    current = (current + 1) % images.length;
    images[current].style.display = "block";
}
setInterval(next, 3000);

// modo escuro / modo claro
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

                                    