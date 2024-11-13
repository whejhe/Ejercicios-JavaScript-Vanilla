document.getElementById('user-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('phone').value;

    const usuario = {
        nombre,
        email,
        telefono
    };

    fetch('/guardar-usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('user-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
