const leftCover = document.getElementById('left-cover');
const rightCover = document.getElementById('right-cover');
const heartCover = document.getElementById('heart-cover');
const loading = document.getElementById('loading');

const body = document.getElementById('body');


setTimeout(() => {
    leftCover.classList.add('moveleft');
    rightCover.classList.add('moveright');

    heartCover.classList.add('hidden');

    loading.classList.add('hidden');

    body.classList.remove('overflowY');

}, 6000);