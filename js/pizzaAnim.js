document.addEventListener("DOMContentLoaded", () => {
    const pizzas = document.querySelectorAll(".pizza-club .pizza-each");
    const totalPizzas = pizzas.length;
    let currentIndex = 0;

    function updateSlide() {
        pizzas.forEach((each, index) => {
            const pizza = each.querySelector("img");
            const name = each.querySelector(".pizza-name");
            let position = index - currentIndex;
            
            if (position < -2) position += totalPizzas;
            if (position > 2) position -= totalPizzas;
            if (position === 0) {
                each.style.transform = 'translate(0px, 0px) scale(1)';
                each.style.opacity = '1';
                each.style.zIndex = '3';
                name.style.opacity = '1';
            } else if (Math.abs(position) === 1) {
                const direction = position > 0 ? 1 : -1;
                each.style.transform = `translate(${direction * 350}px, 0px) scale(0.8)`;
                each.style.opacity = '0.6';
                each.style.zIndex = '2';
                name.style.opacity = '0';
            } else if (Math.abs(position) === 2) {
                const direction = position > 0 ? 1 : -1;
                each.style.transform = `translate(${direction * 700}px, 0px) scale(0.6)`;
                each.style.opacity = '0';
                each.style.zIndex = '1';
                name.style.opacity = '0';
            } else {
                each.style.opacity = '0';
                each.style.zIndex = '0';
                name.style.opacity = '0';
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