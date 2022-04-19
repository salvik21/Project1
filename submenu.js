const submenu = document.getElementById("nav__hamburger-submenu-wrapper");

export function toggleSubmenu() {
    submenu.classList.toggle("--hidden");
}

export function toggleSubmenuControl() {
    if (!submenu.classList.contains("--hidden")) {
        toggleSubmenu();
    }
}

export function toggleSubmenuControl2() {
    if (!submenu.classList.contains("--hidden")) {
        submenu.classList.toggle("--hidden");
    }
}