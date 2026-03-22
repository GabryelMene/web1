let vagas = Math.floor(Math.random() * 3) + 4; // começa entre 4 e 6
const elemento = document.getElementById("vagas");

elemento.textContent = vagas;

function diminuirVagas() {
    if (vagas > 2) {
        vagas--;
        elemento.textContent = vagas;

        let tempo = 0;

        if (vagas >= 5) {
            tempo = Math.random() * 5000 + 3000; // 3–8s
        } else if (vagas >= 3) {
            tempo = Math.random() * 10000 + 5000; // 5–15s
        } else {
            tempo = Math.random() * 20000 + 10000; // 10–30s
        }

        setTimeout(diminuirVagas, tempo);
    }
}


setTimeout(diminuirVagas, 2000);