const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');


let currentIndex1 = 1;
let currentIndex2 = 0;
let currentIndex3 = -1;

window.onload = button1.click();




button1.addEventListener('click', () => {
    currentIndex1 = 1;
    img1.style.zIndex = currentIndex1.toString();
    img2.style.zIndex = currentIndex2.toString();
    img3.style.zIndex = currentIndex3.toString();   
    
    img1.style.animation = 'slidein 1s ease';
    img3.style.animation = '';  
    img2.style.animation = '';

    currentIndex1=0;
    currentIndex2=-1;
    currentIndex3=-1;
});

button2.addEventListener('click', () => {
    currentIndex2 = 1;
    img1.style.zIndex = currentIndex1.toString();
    img2.style.zIndex = currentIndex2.toString();
    img3.style.zIndex = currentIndex3.toString();
    
    img2.style.animation = 'slidein 1s ease';
    img1.style.animation = '';  
    img3.style.animation = '';
    
    currentIndex2=0;
    currentIndex1=-1;
    currentIndex3=-1;
});

button3.addEventListener('click', () => {
    currentIndex3 = 1;
    img1.style.zIndex = currentIndex1.toString();
    img2.style.zIndex = currentIndex2.toString();
    img3.style.zIndex = currentIndex3.toString();

    img3.style.animation = 'slidein 1s ease';
    img2.style.animation = '';  
    img1.style.animation = '';

    currentIndex3=0;
    currentIndex1=-1;
    currentIndex2=-1;
});