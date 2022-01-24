const navCart = document.getElementById("nav__cart");
const cartMenu = document.getElementById("nav__cart-menu");

navCart.addEventListener("click", toggleCart);

function toggleCart() {
  cartMenu.classList.toggle("nav__cart-menu--on");
}