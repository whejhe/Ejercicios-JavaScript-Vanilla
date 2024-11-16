// script.js

document.getElementById('advancedForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capturar los campos
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');

    // Validar cada campo
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isPhoneValid = validatePhone(phone);
    const isAddressValid = validateAddress(address);

    // Si todos los campos son válidos, mostrar éxito
    if (isNameValid && isEmailValid && isPasswordValid && isPhoneValid && isAddressValid) {
        alert('Formulario enviado correctamente');
        this.reset();
    }
});

function validateName(input) {
    const value = input.value.trim();
    const error = input.nextElementSibling;
    if (!value) {
        showError(input, error, 'El nombre es obligatorio.');
        return false;
    }
    clearError(input, error);
    return true;
}

function validateEmail(input) {
    const value = input.value.trim();
    const error = input.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
        showError(input, error, 'El correo electrónico es obligatorio.');
        return false;
    } else if (!emailRegex.test(value)) {
        showError(input, error, 'El correo electrónico no es válido.');
        return false;
    }
    clearError(input, error);
    return true;
}

function validatePassword(input) {
    const value = input.value.trim();
    const error = input.nextElementSibling;
    if (!value) {
        showError(input, error, 'La contraseña es obligatoria.');
        return false;
    } else if (value.length < 6) {
        showError(input, error, 'La contraseña debe tener al menos 6 caracteres.');
        return false;
    }
    clearError(input, error);
    return true;
}

function validatePhone(input) {
    const value = input.value.trim();
    const error = input.nextElementSibling;
    const phoneRegex = /^\d{10}$/;
    if (!value) {
        showError(input, error, 'El número de teléfono es obligatorio.');
        return false;
    } else if (!phoneRegex.test(value)) {
        showError(input, error, 'El número de teléfono debe tener 10 dígitos.');
        return false;
    }
    clearError(input, error);
    return true;
}

function validateAddress(input) {
    const value = input.value.trim();
    const error = input.nextElementSibling;
    if (!value) {
        showError(input, error, 'La dirección es obligatoria.');
        return false;
    }
    clearError(input, error);
    return true;
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}
