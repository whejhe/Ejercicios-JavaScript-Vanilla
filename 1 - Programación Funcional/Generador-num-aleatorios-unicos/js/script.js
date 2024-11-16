// script.js

/**
 * Genera números aleatorios únicos dentro de un rango.
 * @param {number} min - Valor mínimo del rango.
 * @param {number} max - Valor máximo del rango.
 * @param {number} count - Cantidad de números únicos a generar.
 * @returns {Array<number>} - Arreglo de números aleatorios únicos.
 */
const generarNumerosAleatoriosUnicos = (min, max, count) => {
    if (max - min + 1 < count) {
        throw new Error("El rango no permite generar la cantidad solicitada de números únicos.");
    }

    const numeros = new Set();
    while (numeros.size < count) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.add(random);
    }
    return Array.from(numeros);
};

// Lógica de interacción con la interfaz
document.getElementById('randomForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recargar la página

    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const count = parseInt(document.getElementById('count').value);

    const resultDiv = document.getElementById('result');

    try {
        // Generar números aleatorios únicos
        const numeros = generarNumerosAleatoriosUnicos(min, max, count);

        // Mostrar los resultados
        resultDiv.innerHTML = `<strong>Números generados:</strong><br>${numeros.join(', ')}`;
    } catch (error) {
        // Mostrar mensaje de error si no se puede generar
        resultDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
});
