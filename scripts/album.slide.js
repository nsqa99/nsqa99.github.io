const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');


let currentIndex1 = 1;
let currentIndex2 = 0;
let currentIndex3 = -1;


const timeout = 3500;
const delay = timeout * 3;

window.onload = button1.click();

let timeout1;
let timeout2;
let timeout3;

//Set image pos
const imgPos = (...images) => {
    let i =1;
    for (let img of images) {
        img.style.zIndex = i;
        i++;
    }
}


const Images = {
    addClass (img, className) {
        img.classList.add(className);
    },
    removeClass (img, className) {
        img.classList.remove(className);
    }
}


const infiniteLoop = setInterval(() => {
    timeout1 = setTimeout(() => {

        Images.removeClass(img1, 'movement');
        imgPos(img3,img1,img2);
        
        Images.addClass(img2, 'movement');

        timeout2 = setTimeout(() => {
            
            Images.removeClass(img2, 'movement');
            imgPos(img1, img2, img3);
            
            Images.addClass(img3, 'movement');
            timeout3 = setTimeout(() => {
            
                Images.removeClass(img3, 'movement');
                imgPos(img2, img3, img1);
            
                Images.addClass(img1, 'movement');
                
            }, timeout);
        }, timeout);
    }, timeout);

}, delay);


document.addEventListener('click', () => {
    if (infiniteLoop) {
        clearInterval(infiniteLoop);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
    }
})

button1.addEventListener('click', () => {
    currentIndex1 = 1;
    img1.style.zIndex = currentIndex1;
    img2.style.zIndex = currentIndex2;
    img3.style.zIndex = currentIndex3;

    Images.addClass(img1, 'movement');
    Images.removeClass(img3, 'movement');
    Images.removeClass(img2, 'movement');


    currentIndex1 = 0;
    currentIndex2 = -1;
    currentIndex3 = -1;
});

button2.addEventListener('click', () => {
    currentIndex2 = 1;
    img1.style.zIndex = currentIndex1;
    img2.style.zIndex = currentIndex2;
    img3.style.zIndex = currentIndex3;

    Images.addClass(img2, 'movement');
    Images.removeClass(img1, 'movement');
    Images.removeClass(img3, 'movement');

    currentIndex2 = 0;
    currentIndex1 = -1;
    currentIndex3 = -1;
});

button3.addEventListener('click', () => {
    currentIndex3 = 1;
    img1.style.zIndex = currentIndex1;
    img2.style.zIndex = currentIndex2;
    img3.style.zIndex = currentIndex3;

    Images.addClass(img3, 'movement');
    Images.removeClass(img2, 'movement');
    Images.removeClass(img1, 'movement');

    currentIndex3 = 0;
    currentIndex1 = -1;
    currentIndex2 = -1;
});