const navHamburger = document.getElementById("nav__hamburger");
const hamburgerMenu = document.getElementById("nav__hamburger-menu");
const hamburgerIcon = document.getElementById("nav__hamburger-hamburgerIcon");
const closeIcon = document.getElementById("nav__hamburger-closeIcon");
// const navCart = document.getElementById("nav__cart");
// const cartMenu = document.getElementById("nav__cart-menu");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu () {
if(cartMenu.classList.contains("nav__cart-menu--on")){
  cartMenu.classList.toggle("nav__cart-menu--on");
}
if (hamburgerMenu.classList.contains("nav__hamburger-menu--on")) {
    hamburgerMenu.classList.remove("nav__hamburger-menu--on");
    hamburgerMenu.classList.add("nav__hamburger-menu--off");
    closeIcon.classList.remove("nav__hamburger-menu--on");
    closeIcon.classList.add("nav__hamburger-menu--off");
    hamburgerIcon.classList.remove("nav__hamburger-menu--off");
    hamburgerIcon.classList.add("nav__hamburger-menu--on");
  }
  else {
    hamburgerMenu.classList.add("nav__hamburger-menu--on");
    hamburgerMenu.classList.remove("nav__hamburger-menu--off");
    hamburgerIcon.classList.remove("nav__hamburger-menu--on");
    hamburgerIcon.classList.add("nav__hamburger-menu--off");
    closeIcon.classList.remove("nav__hamburger-menu--off");
    closeIcon.classList.add("nav__hamburger-menu--on");
  }
}