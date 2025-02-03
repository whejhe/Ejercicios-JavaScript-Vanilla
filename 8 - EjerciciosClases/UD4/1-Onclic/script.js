let nuevaVentana;
let texto;

function imprimir() {
    const texto = document.getElementById("imprimir").innerHTML;
    const ventanaImpresion = window.open('', '', 'width=500, height=500');
    ventanaImpresion.document.open();
    ventanaImpresion.document.write(texto);
    ventanaImpresion.document.close();
    ventanaImpresion.print();
    ventanaImpresion.close();
}

function abrirVentana() {
    nuevaVentana = window.open("figura2.html", "Figura2", "width=500, height=500");
}

function cerrarVentana() {
    if (nuevaVentana) {
        nuevaVentana.close();
    }
}

function darFoco() {
    if (nuevaVentana) {
        nuevaVentana.focus();
    }
}

function quitarFoco() {
    if (nuevaVentana) {
        nuevaVentana.blur();
    }
}

function scrollAbsoluto() {
    if(nuevaVentana){
        nuevaVentana.scrollBy(0, 1000);
    }
}

function scrollRelativo(x, y) {
    if (ventana) {
        ventana.scrollBy(x, y);
    }
}

function moveTo(){
    if(nuevaVentana){
        nuevaVentana.moveTo(500, 150);
    }
}

function moveBy(){
    if(nuevaVentana){
        nuevaVentana.moveBy(0, 50);
    }
}

function ResizeTo(){
    if(nuevaVentana){
        nuevaVentana.resizeTo(500, 500);
    }
}

function ResizeBy(){
    if(nuevaVentana){
        nuevaVentana.resizeBy(-50, -50);
    }
}