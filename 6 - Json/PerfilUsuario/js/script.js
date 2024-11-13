// Cargar el archivo JSON y procesar los datos
fetch('users.json')
    .then(response => response.json())
    .then(data => displayUserData(data.users[0]))
    .catch(error => console.error('Error al cargar el JSON:', error));

// Función para mostrar los datos del usuario en la página
function displayUserData(user) {
    document.getElementById('user-image').src = user.imagenPerfil;
    document.getElementById('user-name').textContent = `${user.nombre} ${user.primerApellido} ${user.segundoApellido}`;
    document.getElementById('user-description').innerHTML = user.descripcion;
    document.getElementById('user-phone').textContent = user.telefono;

    // Formatear dirección
    const direccion = user.direccion;
    document.getElementById('user-address').textContent = `${direccion.calle}, ${direccion.numero}, ${direccion.piso}, ${direccion.localidad}, ${direccion.provincia}, ${direccion.pais}, ${direccion.codigoPostal}`;

    // Listar hobbies
    const hobbiesList = document.getElementById('hobbies-list');
    user.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });

    // Listar experiencia laboral
    const experienceList = document.getElementById('experience-list');
    user.experienciaLaboral.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${job.puesto}</strong> en ${job.empresa} (${job.fechaInicio} - ${job.fechaFin}): ${job.descripcion}`;
        experienceList.appendChild(li);
    });

    // Enlaces de redes sociales
    const socialLinks = document.getElementById('social-links');
    Object.keys(user.redesSociales).forEach(key => {
        const a = document.createElement('a');
        a.href = user.redesSociales[key];
        a.target = "_blank";
        a.textContent = key;
        socialLinks.appendChild(a);
    });
}
