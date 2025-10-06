document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-x");
    });

    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
        }
    });

    window.addEventListener("resize", () => {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
        }
    });
});