// js/tour.js

// Función para detectar cuándo un elemento está visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para aplicar animación
function animateOnScroll() {
    const tourDates = document.querySelectorAll('.tour-date');
    tourDates.forEach((date) => {
        if (isElementInViewport(date)) {
            date.classList.add('visible');
        }
    });
}

// Escucha el evento scroll para animar
window.addEventListener('scroll', animateOnScroll);

// Animar al cargar la página
document.addEventListener('DOMContentLoaded', animateOnScroll);
