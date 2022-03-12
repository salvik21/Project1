const navCart = document.getElementById("nav__cart");
const cartMenu = document.getElementById("nav__cart-menu");

document.addEventListener("click", function(event){ 
	  if (event.target==navCart) {
      if(!hamburgerMenu.classList.contains("--hidden")) {
        hamburgerMenu.classList.toggle("--hidden");
       hamburgerIcon.classList.toggle("change");
      }
     cartMenu.classList.toggle("--hidden");
    }
    else {
      if(!cartMenu.contains(event.target)){
        if (!cartMenu.classList.contains("--hidden")) {
         cartMenu.classList.toggle("--hidden");
        }
      }
    }
  }
)