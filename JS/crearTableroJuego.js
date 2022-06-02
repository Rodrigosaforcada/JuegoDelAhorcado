var marco = document.getElementById('gallow');

var tablero = document.createElement("div");
var dibujo = document.createElement("div");
var horcaDibujada = document.createElement("img");
var pantallaFinal = document.createElement("h3");
var palabraSecreta = document.createElement("h3");
var letrasFalladas = document.createElement("h4");

tablero.className = "board";
dibujo.className = "draw-hangman";
palabraSecreta.className = "secret-word";

tablero.id = "board-main";
pantallaFinal.id = "final";
palabraSecreta.id = "secret-w";
letrasFalladas.id = "fails";

horcaDibujada.src = "./imagenesHorca/horca1.jpg";

palabraSecreta.textContent = "palabra a descubrir";
letrasFalladas.textContent = "";

marco.appendChild(tablero);
tablero.appendChild(dibujo);
dibujo.appendChild(horcaDibujada);
dibujo.appendChild(pantallaFinal);
tablero.appendChild(palabraSecreta);
tablero.appendChild(letrasFalladas);