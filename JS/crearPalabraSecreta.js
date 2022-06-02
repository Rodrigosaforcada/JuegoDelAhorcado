var palabras = ['JUEGO', 'SABOR', 'TALON', 'PRESION', 'JABON',
'CANTO', 'PLAZA', 'ARTE', 'PARTIDA', 'TENSION'];

var palabraEscondida = "";
var guiones = "";

function crearPalabraSecreta() {
    var numeroAzar = Math.floor(Math.random() * palabras.length);
    var eleccion = palabras[numeroAzar];
    console.log(palabras.length);
    console.log(numeroAzar);
    return eleccion;
}

function mostrarGuionesParaNuestraPalabraSecreta(casillero) {
    palabraEscondida = crearPalabraSecreta();
    console.log(palabraEscondida);
    guiones = "";
    for(var i = 0; i < palabraEscondida.length; i++) {
        guiones += "_";
    }
    casillero.textContent = guiones;
}

var bottonStart = document.getElementById('button-start');
bottonStart.addEventListener('click', function (event) {
    mostrarGuionesParaNuestraPalabraSecreta(
        event.target.parentNode.childNodes[3].childNodes[0].childNodes[1]);
        //definida en verificarFinal.js para impedir el ingreso de letras tras terminar el juego,
        //pudiendose solo volver a empezar al presionar el boton de iniciar partida.
        bottonStart.textContent = "Nueva Partida"
        finDelJuego = false;
        console.log("fin:" + finDelJuego);
        contadorFallos = 0;
        pantallaFinal.textContent = "";
        event.target.parentNode.childNodes[3].childNodes[0].childNodes[2].textContent = "";
        horcaDibujada.src = "./imagenesHorca/horca1.jpg"; 
});

