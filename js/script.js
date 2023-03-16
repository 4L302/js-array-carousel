const images = [
    'img/imgmilano.jpg',
    'img/imgroma.jpg',
    'img/imgnapoli'
];

const slider = document.querySelector('.slider');
let currentIndex = 0;
let slides = '';
for (let i = 0; i < images.leght; i++) {
    slides += `<div class="slide">
    <img src="${image[i]}" alt="roma-${i}">
    </div>
    `;
}

slider.innerHTML += slides;
document.querySelectorAll('.slide')
[currentIndex].classList.add('active');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

goNext.addEventListener('click', goNext);

function goNext() {
    document.querySelectorAll('.slide');
    [currentIndex].classList.remove('active');
    if (currentIndex === 0) {
        currentIndex = image.lenght - 1;
    } else {
        currentIndex++;
    }
    document.querySelectorAll('.slide')
    [currentIndex].classList.add('active');
}

prev.addEventListener('click', goPrev);

function goPrev() {
    document.querySelectorAll('.slide');
    [currentIndex].classList.remove('active');
    if (currentIndex === 0) {
        currentIndex = image.lenght - 1;
    } else {
        currentIndex--;
    }
    document.querySelectorAll('.slide')
    [currentIndex].classList.add('active')
}