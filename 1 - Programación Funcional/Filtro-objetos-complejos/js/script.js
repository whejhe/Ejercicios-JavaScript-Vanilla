// script.js

// Lista de objetos de ejemplo
const productos = [
    { nombre: "Manzana", precio: 30 },
    { nombre: "Banana", precio: 20 },
    { nombre: "Cereza", precio: 50 },
    { nombre: "Durazno", precio: 40 },
    { nombre: "Uva", precio: 60 },
];

/**
 * Filtra objetos de un arreglo que cumplan con la condición de precio.
 * @param {Array} items - Arreglo de objetos.
 * @param {number} maxPrecio - Precio máximo para filtrar.
 * @returns {Array} - Lista de objetos que cumplen la condición.
 */
const filtrarPorPrecio = (items, maxPrecio) => {
    return items.filter(item => item.precio < maxPrecio);
};

// Lógica de interacción con la interfaz
document.getElementById('filterForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recargar la página

    // Obtener el precio máximo ingresado por el usuario
    const maxPrecio = parseFloat(document.getElementById('price').value);

    // Filtrar los productos
    const resultados = filtrarPorPrecio(productos, maxPrecio);

    // Mostrar los resultados
    const resultDiv = document.getElementById('result');
    if (resultados.length > 0) {
        resultDiv.innerHTML = "<strong>Resultados:</strong><br>";
        resultados.forEach(item => {
            resultDiv.innerHTML += `- ${item.nombre}: $${item.precio}<br>`;
        });
    } else {
        resultDiv.innerHTML = "<strong>No se encontraron productos con ese precio.</strong>";
    }
});
