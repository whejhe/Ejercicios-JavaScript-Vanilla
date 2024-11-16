// script.js

// Lista de objetos de ejemplo
const data = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "Ana", edad: 30, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 25, ciudad: "Valencia" },
    { nombre: "Lucía", edad: 35, ciudad: "Madrid" },
    { nombre: "Marta", edad: 30, ciudad: "Sevilla" },
];

/**
 * Agrupa una lista de objetos por una propiedad específica.
 * @param {Array} lista - Lista de objetos.
 * @param {string} propiedad - Propiedad por la que agrupar.
 * @returns {Object} - Objeto con los elementos agrupados.
 */
const agruparPorPropiedad = (lista, propiedad) => {
    return lista.reduce((grupos, item) => {
        const clave = item[propiedad] || "Sin valor"; // Agrupar por 'Sin valor' si la propiedad no existe
        if (!grupos[clave]) {
            grupos[clave] = [];
        }
        grupos[clave].push(item);
        return grupos;
    }, {});
};

// Lógica de interacción con la interfaz
document.getElementById('groupForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recargar la página

    // Obtener la propiedad ingresada por el usuario
    const propiedad = document.getElementById('property').value.trim();

    // Agrupar objetos por la propiedad
    const grupos = agruparPorPropiedad(data, propiedad);

    // Mostrar resultados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<strong>Resultados agrupados:</strong><br>";

    for (const [clave, objetos] of Object.entries(grupos)) {
        resultDiv.innerHTML += `<strong>${clave}:</strong> ${JSON.stringify(objetos)}<br><br>`;
    }
});
