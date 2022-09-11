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
    const imageElement = document.createElement("img")
    imageElement.setAttribute("id", carouselImg[i].id);
    imageElement.setAttribute("class", carouselImg[i].class);
    imageElement.setAttribute("src", carouselImg[i].srs);
    imageElement.setAttribute("alt", carouselImg[i].alt);
    carouselImagewrapper.append(imageElement);
}

let direction = -1;

function prependImageTitle() {
    carouselTitle.prepend(carouselTitle.lastElementChild)
    carouselImagewrapper.prepend(carouselImagewrapper.lastElementChild);
}

function appendImageTitle() {
    carouselTitle.appendChild(carouselTitle.firstElementChild)
    carouselImagewrapper.appendChild(carouselImagewrapper.firstElementChild);
}

export function carouselNext() {
    if (direction === 1) {
        prependImageTitle();
        direction = -1;
    }
    carouselWrapper.style.justifyContent = 'flex-start';
    carouselImagewrapper.style.transform = 'translate(-33.33%)';
    carouselTitle.style.transform = 'translate(-33.33%)';
}

carouselImagewrapper.addEventListener('transitionend', function () {
    if (direction === -1) {
        appendImageTitle();
    }
    if (direction === 1) {
        prependImageTitle();
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
    if (direction === -1) {
        appendImageTitle();
        direction = 1;
    }
    carouselWrapper.style.justifyContent = 'flex-end';
    carouselImagewrapper.style.transform = 'translate(33.33%)';
    carouselTitle.style.transform = 'translate(33.33%)';

}
