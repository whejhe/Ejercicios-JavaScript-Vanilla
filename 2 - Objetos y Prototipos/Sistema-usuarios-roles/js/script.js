class Usuario {
    constructor(nombre, edad, rol) {
        this.nombre = nombre;
        this.edad = edad;
        this.rol = rol;
    }

    cambiarRol(nuevoRol) {
        this.rol = nuevoRol;
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: ${this.rol}`;
    }
}

const formulario = document.getElementById('formulario');
const boton = document.getElementById('boton');
const informacion = document.getElementById('informacion');

boton.addEventListener('click', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const rol = document.getElementById('rol').value;

    const usuario = new Usuario(nombre, edad, rol);
    informacion.innerText = usuario.mostrarInformacion();

    // Aquí puedes agregar la lógica para cambiar de rol
    // Por ejemplo:
    // usuario.cambiarRol('admin');
    // informacion.innerText = usuario.mostrarInformacion();
});