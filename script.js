const fadeElements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    const screenHeight = window.innerHeight;

    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < screenHeight - 80) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
