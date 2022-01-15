const navCart = document.querySelector(".nav__cart");
const cartMenu = document.getElementById("nav__cart-menu");
cartMenu.classList.add("showMenu_off");

function Cart() {
  if(cartMenu.classList.contains("showMenu_on")){
    cartMenu.classList.remove("showMenu_on");
    cartMenu.classList.add("showMenu_off");
  }
  else{
    cartMenu.classList.add("showMenu_on");
    cartMenu.classList.remove("showMenu_off");
  }
}
navCart.addEventListener("click", Cart);

function Cart2() {
  if (cartMenu.style.display === "block") {
    cartMenu.style.display = "none";
  } 
  else {
    cartMenu.style.display = "block";
  }
}