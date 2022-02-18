const navHamburger = document.getElementById("nav__hamburger");
const hamburgerMenu = document.getElementById("nav__hamburger-menu");
const hamburgerIcon = document.getElementById("nav__hamburger-icon");

hamburgerIcon.addEventListener("click", toggleMenu);

function toggleMenu () {
  if(!cartMenu.classList.contains("--off")) {
    cartMenu.classList.toggle("--off");
  }
  if (!hamburgerMenu.classList.contains("--off")) {
    hamburgerMenu.classList.toggle("--off");
    hamburgerIcon.classList.toggle("change");
    }
  else {
    hamburgerMenu.classList.toggle("--off");
    hamburgerIcon.classList.toggle("change");
  }
}