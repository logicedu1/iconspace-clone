const carouselSlide = document.querySelector('.carousel-slide');
const carouselDiv = document.querySelectorAll('.carousel-slide div');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselDiv[1].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Buttons listener


prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



nextBtn.addEventListener('click', () => {
    if (counter >= carouselDiv.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlide.addEventListener('transitionend',() => {
    if(carouselDiv[counter].id === "lastClone"){
        carouselSlide.style.transition = "none";
        counter = carouselDiv.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselDiv[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselDiv.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});