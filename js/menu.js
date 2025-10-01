const slider = document.querySelector('.beverage-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const scrollAmount = 300; 
nextBtn.addEventListener('click', () => {
    slider.scrollLeft += scrollAmount;
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= scrollAmount;
});