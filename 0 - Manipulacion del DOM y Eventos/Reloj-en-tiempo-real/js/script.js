function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;
}

// Llama a updateClock cada segundo
setInterval(updateClock, 1000);

// Llama a updateClock una vez para evitar el retardo de 1 segundo
updateClock();
