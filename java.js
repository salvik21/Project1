const navCart = document.getElementById("nav__cart");
const cartMenu = document.getElementById("nav__cart-menu");

function toggleCart() {
  if(cartMenu.classList.contains("nav__cart-menu--on")){
    cartMenu.classList.remove("nav__cart-menu--on");
    cartMenu.classList.add("nav__cart-menu--off");
  }
  else{
    cartMenu.classList.add("nav__cart-menu--on");
    cartMenu.classList.remove("nav__cart-menu--off");
  }
}
navCart.addEventListener("click", toggleCart);