const nomes = [
    "Carlos", "Ana", "Juliana", "Rafael", "Marcos",
    "Fernanda", "Lucas", "Beatriz", "Gustavo", "Camila"
];

function criarNotificacao() {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];

    const notificacao = document.createElement("div");
    notificacao.classList.add("notificacao");

    notificacao.innerHTML = `
        <strong>${nome}</strong> acabou de solicitar um orçamento 🚀
    `;

    document.body.appendChild(notificacao);

    setTimeout(() => {
        notificacao.classList.add("mostrar");
    }, 100);

    setTimeout(() => {
        notificacao.classList.remove("mostrar");

        setTimeout(() => {
            notificacao.remove();
        }, 500);
    }, 4000);
}

setInterval(criarNotificacao, 8000);

setTimeout(criarNotificacao, 3000);