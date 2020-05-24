const left = document.getElementById('gender-left');
const right = document.getElementById('gender-right');
const heart = document.getElementById('info-heart');


const addAnimationToInfo = () => {
    left.classList.add('moveup__left');
    right.classList.add('moveup__right');
}

wrapper.addEventListener('scroll', addAnimationToInfo);