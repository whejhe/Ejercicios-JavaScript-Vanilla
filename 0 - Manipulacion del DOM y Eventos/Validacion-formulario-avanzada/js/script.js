document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Agregar tarea
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Por favor, escribe una tarea.');
        }
    });

    // Función para agregar tarea al DOM
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Marcar tarea como completada al hacer clic en el texto
        taskSpan.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&times;';

        // Eliminar tarea al hacer clic en el botón de eliminar
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }
});
