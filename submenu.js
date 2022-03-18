const submenu = document.getElementById("nav__hamburger-submenu-wrapper");
const hamburgerMenu = document.getElementById("nav__hamburger-menu");
const hamburgerIcon = document.getElementById("nav__hamburger-icon");

export function forwardbutton() {
    submenu.classList.toggle("--hidden");
    hamburgerMenu.classList.toggle("--hidden");
}

export function submenuHide() {
    if (!submenu.classList.contains("--hidden")) {
        forwardbutton()
    }
}

export function submenuControl() {
    if (!submenu.classList.contains("--hidden")) {
        submenu.classList.toggle("--hidden");
        hamburgerIcon.classList.toggle("Close-icon");
    }
}