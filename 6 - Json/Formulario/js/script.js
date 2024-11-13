// Seleccionar el formulario y el contenedor de la lista de usuarios
const form = document.getElementById('user-form');
const userList = document.getElementById('user-list');

// Función para cargar y mostrar los usuarios almacenados en localStorage
function displayUsers() {
    userList.innerHTML = ''; // Limpiar la lista
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-item');
        userDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${user.name}</p>
            <p><strong>Correo:</strong> ${user.email}</p>
            <p><strong>Teléfono:</strong> ${user.phone}</p>
            <p><strong>Dirección:</strong> ${user.address}</p>
        `;
        userList.appendChild(userDiv);
    });
}

// Función para guardar un nuevo usuario en localStorage
function saveUser(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Crear un objeto usuario
    const user = { name, email, phone, address };

    // Obtener usuarios existentes y añadir el nuevo usuario
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);

    // Guardar en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Limpiar el formulario y actualizar la lista de usuarios
    form.reset();
    displayUsers();
}

// Llamar a displayUsers() para mostrar usuarios existentes al cargar la página
displayUsers();

// Añadir el evento de envío del formulario
form.addEventListener('submit', saveUser);
