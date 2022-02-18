const navCart = document.getElementById("nav__cart");
const cartMenu = document.getElementById("nav__cart-menu");

navCart.addEventListener("click", toggleCart);

function toggleCart() {
  if(!hamburgerMenu.classList.contains("--off")) {
    hamburgerMenu.classList.toggle("--off");
    hamburgerIcon.classList.toggle("change");
  }
  cartMenu.classList.toggle("--off");
}