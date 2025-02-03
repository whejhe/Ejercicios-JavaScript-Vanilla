function actualizarHora() {
    const horaElement = document.getElementById("hora");
    const detenerHoraLink = document.getElementById("detenerHora");

    const horaActual = new Date();
    const hora = horaActual.getHours();
    const minutos = horaActual.getMinutes();
    const segundos = horaActual.getSeconds();

    const horaFormateada = `${hora}:${minutos}:${segundos}`;

    document.title = `Hora Actual: ${horaFormateada}`;

    horaElement.textContent = `Hora Actual: ${horaFormateada}`;

    const intervalID = setInterval(actualizarHora, 1000);

    detenerHoraLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        clearInterval(intervalID);
        detenerHoraLink.textContent = "Hora Detenida";
        detenerHoraLink.style.pointerEvents = "none";
    });
}
