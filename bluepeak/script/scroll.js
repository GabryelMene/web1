function revelarElementos() {
    const elementos = document.querySelectorAll(".reveal");

    elementos.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", revelarElementos);
window.addEventListener("load", revelarElementos);