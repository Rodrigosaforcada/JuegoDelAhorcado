//Establezco un contador para controlar el numero de fallos
//y el dibujo actual de la horca.

var contadorFallos = 0;

//Coloco todas las variantes de horcas en un array.

var horcasAdibujar = ["horca1.jpg", "horca2.jpg", "horca3.jpg",
"horca4.jpg", "horca5.jpg", "horca6.jpg", "horca7.jpg", ];

//Elaboro la funcion que invoca el dibujo de la horca corres-
//pondiente al número de fallos.

function dibujarHorca() {
    if(contadorFallos < 6) {
        contadorFallos++;
        console.log("fallos: " + contadorFallos);
        horcaDibujada.src = "./imagenesHorca/" + 
        horcasAdibujar[contadorFallos];
        verificarFinDelJuego();
    } 
}