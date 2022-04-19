const hamburgerMenu = document.getElementById("nav__hamburger-menu");
const hamburgerIcon = document.getElementById("nav__hamburger-icon");

export function toogleHamburger() {
    hamburgerMenu.classList.toggle("--hidden");
}

export function toogleHamburgerIcon() {
    hamburgerIcon.classList.toggle("Close-icon");
}

export function toogleHamburgerControl() {
    if (!hamburgerMenu.classList.contains("--hidden")) {
        toogleHamburger();
    }
}

export function toogleHamburgerMenuControl() {
    if (!hamburgerIcon.classList.contains("Close-icon")) {
        toogleHamburgerControl();
    }
}

export function toogleHamburgerIconControl() {
    if (hamburgerIcon.classList.contains("Close-icon")) {
        toogleHamburgerIcon();
    }
}