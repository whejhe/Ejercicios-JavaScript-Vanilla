const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos y manejar datos del formulario
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el envío de datos del formulario
app.post('/guardar-usuario', (req, res) => {
    const nuevoUsuario = req.body;

    // Ruta del archivo JSON
    const filePath = path.join(__dirname, 'data', 'usuarios.json');

    // Leer los datos actuales y añadir el nuevo usuario
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo');
        }

        const usuarios = data ? JSON.parse(data) : [];
        usuarios.push(nuevoUsuario);

        // Guardar el nuevo array en el archivo JSON
        fs.writeFile(filePath, JSON.stringify(usuarios, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error al guardar el archivo');
            }

            res.send('Usuario guardado exitosamente');
        });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
