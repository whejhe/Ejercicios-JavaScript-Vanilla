function mostrarHoraActual() {
    const horaActualElement = document.getElementById("horaActual");
    const horaActual = new Date();
    horaActualElement.textContent = horaActual.toLocaleTimeString();
}

function configurarAlarma() {
    const horaAlarma = document.getElementById("horaAlarma").value;
    const alarmaDiv = document.getElementById("alarmaDiv");

    const horaAlarmaElement = document.createElement("p");
    horaAlarmaElement.textContent = `Alarma configurada a las ${horaAlarma}`;
    alarmaDiv.appendChild(horaAlarmaElement);

    alarmaDiv.style.display = "block";
    document.getElementById("configurarAlarma").style.display = "none";

    const horaAlarmaParts = horaAlarma.split(":");
    const horaAlarmaHora = parseInt(horaAlarmaParts[0]);
    const horaAlarmaMinutos = parseInt(horaAlarmaParts[1]);

    const ahora = new Date();
    const tiempoRestante = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), horaAlarmaHora, horaAlarmaMinutos) - ahora;

    setTimeout(function () {
        alert("¡Es hora de la alarma!");
        const descansarButton = document.getElementById("descansar");
        const detenerAlarmaButton = document.getElementById("detenerAlarma");

        descansarButton.style.display = "block";

        descansarButton.addEventListener("click", function () {
            descansarButton.style.display = "none";
            setTimeout(function () {
                alert("¡Es hora de la alarma de nuevo!");
                configurarAlarma();
            }, 120000);
        });

        detenerAlarmaButton.addEventListener("click", function () {
            alarmaDiv.style.display = "none";
            document.getElementById("configurarAlarma").style.display = "block";
        });
    }, tiempoRestante);
}
