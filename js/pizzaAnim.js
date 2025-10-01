document.addEventListener("DOMContentLoaded", () => {
    const pizzas = document.querySelectorAll(".pizza-club img");
    const totalPizzas = pizzas.length;
    let currentIndex = 0;

    function updateSlide() {
        pizzas.forEach((pizza, index) => {
            let position = index - currentIndex;
            
            if (position < -2) position += totalPizzas;
            if (position > 2) position -= totalPizzas;
            if (position === 0) {
                pizza.style.transform = 'translate(0px, 0px) scale(1)';
                pizza.style.opacity = '1';
                pizza.style.zIndex = '3';
            } else if (Math.abs(position) === 1) {
                const direction = position > 0 ? 1 : -1;
                pizza.style.transform = `translate(${direction * 350}px, 0px) scale(0.8)`;
                pizza.style.opacity = '0.6';
                pizza.style.zIndex = '2';
            } else if (Math.abs(position) === 2) {
                const direction = position > 0 ? 1 : -1;
                pizza.style.transform = `translate(${direction * 700}px, 0px) scale(0.6)`;
                pizza.style.opacity = '0';
                pizza.style.zIndex = '1';
            } else {
                pizza.style.opacity = '0';
                pizza.style.zIndex = '0';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalPizzas;
        updateSlide();
    }

    updateSlide();
    setInterval(nextSlide, 3000);
});