// script.js

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close-btn');

    // Abrir el modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Cerrar el modal al hacer clic en el botón de cierre
    closeModalBtn.addEventListener('click', () => {
        closeModal();
    });

    // Cerrar el modal al hacer clic fuera de la ventana del contenido
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
    }
});
