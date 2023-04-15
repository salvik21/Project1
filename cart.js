const cartMenu = document.getElementById("nav__cart-menu");

export function toogleCart() {
  cartMenu.classList.toggle("hidden");
}

export function toogleCartControl() {
  if (!cartMenu.classList.contains("hidden")) {
    toogleCart();
  }
}