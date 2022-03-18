const cartMenu = document.getElementById("nav__cart-menu");

export function cartControl() {
  cartMenu.classList.toggle("--hidden");
}

export function cartHide() {
  if (!cartMenu.classList.contains("--hidden")) {
    cartControl();
  }
}