const navCart = document.getElementById("nav__cart");
const hamburgerIcon = document.getElementById("nav__hamburger-icon");
const hamburgerFirstline = document.getElementById("nav__hamburger-icon-first-line");
const hamburgerSecondline = document.getElementById("nav__hamburger-icon-second-line");
const hamburgerTrirdline = document.getElementById("nav__hamburger-icon-third-line");
const featuresButton = document.getElementById("nav__hamburger-submenu-button-image-wrapper");
const featuresImage = document.getElementById("forward-black-image");
const backImage = document.getElementById("back-black-image");
const backButton = document.getElementById("nav__hamburger-submenu-image-wrapper");
const cartMenu = document.getElementById("nav__cart-menu");
const hamburgerMenu = document.getElementById("nav__hamburger-menu");
const hamburgerButton = document.getElementById("nav__hamburger-menu-button");
const subButton = document.getElementById("nav__hamburger-submenu-button");
const cartButton = document.getElementById("cart-menu__button");
const subMenu = document.getElementById("nav__hamburger-submenu-wrapper");

const cartNav = await import('./cart.js');
const hamburgerNav = await import('./hamburgerMenu.js');
const submenuNav = await import('./submenu.js');

document.addEventListener("click", function (event) {
    switch (event.target) {
        case navCart:
            hamburgerNav.hamburgerHide();
            submenuNav.submenuControl();
            cartNav.cartControl()
            break;
        case hamburgerIcon:
        case hamburgerFirstline:
        case hamburgerSecondline:
        case hamburgerTrirdline:
            hamburgerNav.hamburgerControl();
            cartNav.cartHide();
            submenuNav.submenuHide();
            break;
        case featuresButton:
        case featuresImage:
            submenuNav.forwardbutton();
            break;
        case backImage:
        case backButton:
            submenuNav.forwardbutton();
            break;
        default:
            if ((!cartMenu.contains(event.target)) && (!hamburgerMenu.contains(event.target)) && (!subMenu.contains(event.target))) {
                hamburgerNav.hamburgerHide();
                cartNav.cartHide();
                submenuNav.submenuControl();
            }
    }

})