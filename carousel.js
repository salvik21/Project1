const carouselImagewrapper = document.getElementById("carousel__image-wrapper");
const carouselWrapper = document.getElementById("carousel-wrapper");
const carouselTitle =document.getElementById("carousel__title-wrapper");

const img1 = {
    id: "carousel__image",
    class: "carousel__image",
    srs: "images/carousel_img_1.png",
    alt: "eggs and chicken",
}

const img2 = {
    id: "carousel__image",
    class: "carousel__image",
    srs: "images/carousel_img_2.png",
    alt: "something more",
}

const img3 = {
    id: "carousel__image",
    class: "carousel__image",
    srs: "images/carousel_img_3.png",
    alt: "something more",
}

const carouselImg = [img1, img2, img3];

for(let i=0;i<carouselImg.length;i++){
    const img_all = document.createElement("img")
    img_all.setAttribute("id",carouselImg[i].id);
    img_all.setAttribute("class", carouselImg[i].class);
    img_all.setAttribute("src", carouselImg[i].srs);
    img_all.setAttribute("alt", carouselImg[i].alt);
    carouselImagewrapper.append(img_all);
}

var derection=-1;

console.log(carouselWrapper.style)
export function carouselNext () {
    if (derection == 1) {
        carouselTitle.prepend(carouselTitle.lastElementChild)
        carouselImagewrapper.prepend(carouselImagewrapper.lastElementChild);
        derection = -1;
    }
    carouselWrapper.style.justifyContent = 'flex-start';
    carouselImagewrapper.style.transform = 'translate(-33.33%)';
    carouselTitle.style.transform = 'translate(-33.33%)';
}

carouselImagewrapper.addEventListener('transitionend',function(){
    if (derection == -1) {
        carouselTitle.appendChild(carouselTitle.firstElementChild)
        carouselImagewrapper.appendChild(carouselImagewrapper.firstElementChild);
    }
    else if (derection == 1) {
        carouselTitle.prepend(carouselTitle.lastElementChild)
        carouselImagewrapper.prepend(carouselImagewrapper.lastElementChild);
    }
    carouselImagewrapper.style.transition = 'none';
    carouselTitle.style.transition = 'none';
    carouselImagewrapper.style.transform = 'translate(0)';
    carouselTitle.style.transform = 'translate(0)';
    setTimeout(function(){
        carouselImagewrapper.style.transition = 'all 0.5s'
        carouselTitle.style.transition = 'all 0.6s'
    })
})

export function carouselPrev () {
    if (derection == -1) {
        carouselImagewrapper.appendChild(carouselImagewrapper.firstElementChild);
        carouselTitle.appendChild(carouselTitle.firstElementChild)
        derection = 1;
    }
    carouselWrapper.style.justifyContent = 'flex-end';
    carouselImagewrapper.style.transform = 'translate(33.33%)';
    carouselTitle.style.transform = 'translate(33.33%)';
    
}
