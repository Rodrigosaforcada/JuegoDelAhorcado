var botonAgregar = document.getElementById('add');

function agregarPalabra(nuevaPalabra) {
    var regEx = /[a-zA-Z]/;
    if(regEx.test(nuevaPalabra)) {
        var palabraAgregada = nuevaPalabra.toUpperCase();
        palabras.push(palabraAgregada);
        console.log("palabra agregada: " + palabraAgregada);
    } else {
        console.log("Palabra inválida para agregar");
    }
}

botonAgregar.addEventListener('click', function (event) {
    agregarPalabra(event.target.parentNode.childNodes[3].value);
    console.log(palabras);
    console.log(palabras.length);
});