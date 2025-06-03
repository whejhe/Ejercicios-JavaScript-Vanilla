// customAlert.js
export function showCustomAlert(message, callback) {
    const alertContainer = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('custom-alert-message');
    const okButton = document.getElementById('custom-alert-ok');
  
    alertMessage.innerText = message;
    alertContainer.classList.add('show');
  
    okButton.onclick = () => {
      alertContainer.classList.remove('show');
      if (callback) callback();
    };
  }
  