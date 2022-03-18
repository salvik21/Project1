const hamburgerMenu = document.getElementById("nav__hamburger-menu");
const hamburgerIcon = document.getElementById("nav__hamburger-icon");

export function hamburgerControl() {
    hamburgerMenu.classList.toggle("--hidden");
    hamburgerIcon.classList.toggle("Close-icon");
}

export function hamburgerHide() {
    if (!hamburgerMenu.classList.contains("--hidden")) {
        hamburgerControl();
    }
}
