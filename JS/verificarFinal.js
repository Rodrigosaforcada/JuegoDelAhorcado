var finDelJuego = false;

function verificarFinDelJuego() {
    if(contadorFallos >= 6) {
        console.log('JUEGO TERMINADO');
        dibujarFinDelJuego();
        finDelJuego = true;
        console.log("fin:" + finDelJuego);
    }
}

function dibujarFinDelJuego() {
    pantallaFinal.textContent = "Fin del juego";
    pantallaFinal.className = "finnaly";
}

function verificarGanador(aciertos) {
    if(palabraEscondida == aciertos) {
        dibujarGanador();
        finDelJuego = true;
        console.log("fin:" + finDelJuego);
    }
}

function dibujarGanador() {
    pantallaFinal.textContent = "Ganaste, felicidades";
    pantallaFinal.className = "winner";
}