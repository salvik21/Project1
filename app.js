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
const carouselForwardButton = document.getElementById("carousel__forward-button")
const carouselBackButton = document.getElementById("carousel__back-button")

const cartNav = await import('./cart.js');
const hamburgerNav = await import('./hamburgerMenu.js');
const submenuNav = await import('./submenu.js');
const carouselImage = await import('./carousel.js');

document.addEventListener("click", function (event) {
    switch (event.target) {
        case navCart:
            cartNav.toogleCart()
            hamburgerNav.toogleHamburgerControl();
            hamburgerNav.toogleHamburgerIconControl();
            submenuNav.toggleSubmenuControl();
            break;
        case hamburgerIcon:
        case hamburgerFirstline:
        case hamburgerSecondline:
        case hamburgerTrirdline:
            hamburgerNav.toogleHamburger();
            hamburgerNav.toogleHamburgerIcon();
            hamburgerNav.toogleHamburgerMenuControl();
            submenuNav.toggleSubmenuControl();
            cartNav.toogleCartControl();
            break;
        case featuresButton:
        case featuresImage:
            submenuNav.toggleSubmenu();
            hamburgerNav.toogleHamburger();
            break;
        case backImage:
        case backButton:
            submenuNav.toggleSubmenu();
            hamburgerNav.toogleHamburger();
            break;
        case carouselForwardButton:
            carouselImage.carouselNext();
            cartNav.toogleCartControl();
            submenuNav.toggleSubmenuControl();
            hamburgerNav.toogleHamburgerIconControl();
            break;
        case carouselBackButton:
            carouselImage.carouselPrev();
            cartNav.toogleCartControl();
            submenuNav.toggleSubmenuControl();
            hamburgerNav.toogleHamburgerIconControl();
            break;
        default:
            if ((!cartMenu.contains(event.target)) && (!hamburgerMenu.contains(event.target)) && (!subMenu.contains(event.target))) {
                hamburgerNav.toogleHamburgerControl();
                cartNav.toogleCartControl();
                submenuNav.toggleSubmenuControl();
                hamburgerNav.toogleHamburgerIconControl();
            }
    }

}
)