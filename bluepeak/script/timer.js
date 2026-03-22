let tempo = 600; 

const timerElemento = document.getElementById("timer");

function atualizarTimer() {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    timerElemento.textContent = 
        String(minutos).padStart(2, '0') + ":" + 
        String(segundos).padStart(2, '0');

    if (tempo > 0) {
        tempo--;
    } else {
        timerElemento.textContent = "Encerrado";
    }
}

setInterval(atualizarTimer, 1000);