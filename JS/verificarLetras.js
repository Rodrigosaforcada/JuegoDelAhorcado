//var historialFallas = document.getElementById('fails');

function dibujarLetraIncorrecta(letraProbada) {
    console.log("letra incorrecta: " + letraProbada);
    var letrasProbadas = letrasFalladas.textContent;
    var repeticion = false;
    for(var j = 0; j < letrasProbadas.length; j++) {
        if(letraProbada == letrasProbadas[j]) {
            console.log("letra fallida y repetida");
            repeticion = true;
            break;
        }
    }
    if(!repeticion) {
        letrasProbadas += letraProbada;
        letrasFalladas.textContent = letrasProbadas;
        dibujarHorca();
    }
}

function dibujarLetraCorrecta(letraVerificada) {
    letrasAcertadas = guiones;
    guiones = "";
    var letraCorrecta = false;
    for(var i = 0; i < palabraEscondida.length; i++){
        if(letraVerificada == palabraEscondida[i]) {
            letraCorrecta = true;
            guiones += letraVerificada;
            console.log("letra acertada: " + letraVerificada);
        } else {
            guiones += letrasAcertadas[i];
        }
    }
    if(!letraCorrecta) {
        dibujarLetraIncorrecta(letraVerificada);
    }
    console.log("aciertos: " + guiones);
    palabraSecreta.textContent = guiones;
    verificarGanador(guiones);
}

function verificarSiLaTeclaPresionadaEsUnaLetra(tecla) {
    var regEx = /[a-zA-Z]/;
    if(regEx.test(tecla)) {
        letra = tecla.toUpperCase();
        console.log("letra comprobada: " + letra);
        dibujarLetraCorrecta(letra);
    }
}

if(finDelJuego == false) {
    bottonStart.addEventListener('keypress', function (event) {
        console.log("fin:" + finDelJuego);
        var teclaPresionada = event.key;
        verificarSiLaTeclaPresionadaEsUnaLetra(teclaPresionada);
    });
} else {
    console.log("no funca");
}
