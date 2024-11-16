// script.js

/**
 * Convierte la primera letra de cada palabra en mayúscula.
 * @param {Array<string>} cadenas - Arreglo de cadenas.
 * @returns {string} - Cadena resultante con las primeras letras en mayúscula.
 */
const capitalizarPrimeraLetra = (cadenas) => {
    return cadenas
        .map(cadena => cadena.trim()) // Elimina espacios extra
        .map(cadena => cadena.charAt(0).toUpperCase() + cadena.slice(1)) // Capitaliza la primera letra
        .join(' '); // Une las palabras con un espacio
};

// Lógica de interacción con la interfaz
document.getElementById('textForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recargar la página

    // Obtener el texto ingresado
    const input = document.getElementById('strings').value.trim();

    // Dividir las palabras por comas
    const palabras = input.split(',');

    // Procesar las cadenas
    const resultado = capitalizarPrimeraLetra(palabras);

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Resultado:</strong> ${resultado}`;
});
