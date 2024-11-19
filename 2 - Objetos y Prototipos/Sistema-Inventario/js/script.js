class Inventario {
    constructor() {
        this.productos = {};
    }

    agregarProducto(nombre, cantidad) {
        if (this.productos[nombre]) {
            this.productos[nombre] += cantidad;
        } else {
            this.productos[nombre] = cantidad;
        }
    }

    eliminarProducto(nombre) {
        if (this.productos[nombre]) {
            delete this.productos[nombre];
        }
    }

    buscarProducto(nombre) {
        return this.productos[nombre] || "Producto no encontrado";
    }

    mostrarInventario() {
        const inventario = document.getElementById("inventario");
        inventario.innerHTML = "";
        for (const producto in this.productos) {
            const elemento = document.createElement("p");
            elemento.textContent = `${producto}: ${this.productos[producto]}`;
            inventario.appendChild(elemento);
        }
    }
}

const inventario = new Inventario();

document.getElementById("agregar").addEventListener("click", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    inventario.agregarProducto(nombre, cantidad);
    inventario.mostrarInventario();
});

document.getElementById("eliminar").addEventListener("click", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    inventario.eliminarProducto(nombre);
    inventario.mostrarInventario();
});

document.getElementById("buscar").addEventListener("click", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const resultado = inventario.buscarProducto(nombre);
    alert(resultado);
});