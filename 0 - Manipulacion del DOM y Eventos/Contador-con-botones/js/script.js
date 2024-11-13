document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');

    // Función para actualizar el contador en pantalla
    function updateCounter() {
        counterDisplay.textContent = count;
    }

    // Incrementar el contador
    incrementBtn.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    // Decrementar el contador
    decrementBtn.addEventListener('click', () => {
        count--;
        updateCounter();
    });
});
