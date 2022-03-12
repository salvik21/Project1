const hamburgerMenu = document.getElementById("nav__hamburger-menu");
const hamburgerIcon = document.getElementById("nav__hamburger-icon");

document.addEventListener("click", function(event){
	if (event.target==hamburgerIcon) {
        if(!cartMenu.classList.contains("--hidden")) {
            cartMenu.classList.toggle("--hidden");
        }
        if (!hamburgerMenu.classList.contains("--hidden")) {
            hamburgerMenu.classList.toggle("--hidden");
            hamburgerIcon.classList.toggle("change");
        }
        else{
            hamburgerMenu.classList.toggle("--hidden");
            hamburgerIcon.classList.toggle("change");
        }
    }
    else {
        if(!hamburgerMenu.contains(event.target)){
            if (!hamburgerMenu.classList.contains("--hidden")) {
                hamburgerMenu.classList.toggle("--hidden");
                hamburgerIcon.classList.toggle("change");
            }
        }
        
    }
  }
)