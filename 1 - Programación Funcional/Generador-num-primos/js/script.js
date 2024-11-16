// script.js

// Función para verificar si un número es primo
const esPrimo = (num) => {
    if (num < 2) return false; // Los números menores que 2 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si tiene divisores, no es primo
    }
    return true;
};

// Función para generar números primos dentro de un rango
const generarPrimos = (start, end) => {
    if (start > end) [start, end] = [end, start]; // Intercambiar valores si están invertidos
    return Array.from({ length: end - start + 1 }, (_, i) => i + start).filter(esPrimo);
};

// Lógica de interacción con la interfaz
document.getElementById('primosForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recargar la página

    // Obtener valores de los inputs
    const start = parseInt(document.getElementById('start').value, 10);
    const end = parseInt(document.getElementById('end').value, 10);

    // Generar números primos
    const primos = generarPrimos(start, end);

    // Mostrar resultado
    const resultDiv = document.getElementById('result');
    if (primos.length > 0) {
        resultDiv.innerHTML = `<strong>Números primos entre ${start} y ${end}:</strong> ${primos.join(', ')}`;
    } else {
        resultDiv.innerHTML = `<strong>No hay números primos</strong> entre ${start} y ${end}.`;
    }
});
