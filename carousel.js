const carouselImagewrapper = document.getElementById("carousel__image-wrapper");
const carouselWrapper = document.getElementById("carousel-wrapper");
const carouselTitle = document.getElementById("carousel__title-wrapper");

const carouselImg = [
    {
        id: "carousel__image",
        class: "carousel__image",
        srs: "images/carousel_img_1.png",
        alt: "eggs and chicken",
    },
    {
        id: "carousel__image",
        class: "carousel__image",
        srs: "images/carousel_img_2.png",
        alt: "something more",
    },
    {
        id: "carousel__image",
        class: "carousel__image",
        srs: "images/carousel_img_3.png",
        alt: "something more",
    }
];

for (let i = 0; i < carouselImg.length; i++) {
    const img_creater = document.createElement("img")
    img_creater.setAttribute("id", carouselImg[i].id);
    img_creater.setAttribute("class", carouselImg[i].class);
    img_creater.setAttribute("src", carouselImg[i].srs);
    img_creater.setAttribute("alt", carouselImg[i].alt);
    carouselImagewrapper.append(img_creater);
}

var derection = -1;

function prependImageTile() {
    carouselTitle.prepend(carouselTitle.lastElementChild)
    carouselImagewrapper.prepend(carouselImagewrapper.lastElementChild);
}

function appendImageTile() {
    carouselTitle.appendChild(carouselTitle.firstElementChild)
    carouselImagewrapper.appendChild(carouselImagewrapper.firstElementChild);
}

export function carouselNext() {
    if (derection === 1) {
        prependImageTileconrol();
        derection = -1;
    }
    carouselWrapper.style.justifyContent = 'flex-start';
    carouselImagewrapper.style.transform = 'translate(-33.33%)';
    carouselTitle.style.transform = 'translate(-33.33%)';
}

carouselImagewrapper.addEventListener('transitionend', function () {
    if (derection === -1) {
        appendImageTile();
    }
    if (derection === 1) {
        prependImageTile();
    }
    carouselImagewrapper.style.transition = 'none';
    carouselTitle.style.transition = 'none';
    carouselImagewrapper.style.transform = 'translate(0)';
    carouselTitle.style.transform = 'translate(0)';
    setTimeout(function () {
        carouselImagewrapper.style.transition = 'all 0.5s'
        carouselTitle.style.transition = 'all 0.6s'
    })
})

export function carouselPrev() {
    if (derection === -1) {
        appendImageTile();
        derection = 1;
    }
    carouselWrapper.style.justifyContent = 'flex-end';
    carouselImagewrapper.style.transform = 'translate(33.33%)';
    carouselTitle.style.transform = 'translate(33.33%)';

}
