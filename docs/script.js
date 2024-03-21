var muneco = document.querySelector(".muneco");
var contenedor = document.querySelector(".contenedor-parrafo");

function encriptar() {
    ocultarTexto();
    
    let texto = document.getElementById("texto").value;
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    document.getElementById("resultado").innerHTML = texto;
}

function desencriptar() {
    ocultarTexto();
    let texto = document.getElementById("texto").value;
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    document.getElementById("resultado").innerHTML = texto;
}

function copiar() {
    var range = document.createRange();
    range.selectNode(document.getElementById("resultado"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function ocultarTexto() {
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
   // texto.classList.add("ocultar");
}

function limpiarCaja(){
 let valorCaja =   document.querySelector('#texto');
    valorCaja.value = '';
}
