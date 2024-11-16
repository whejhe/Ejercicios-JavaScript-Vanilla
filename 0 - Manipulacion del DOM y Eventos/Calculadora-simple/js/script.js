// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = null;
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'C') {
                // Clear the display
                currentInput = '';
                previousInput = '';
                operator = null;
                display.value = '';
            } else if (value === '=') {
                // Perform the calculation
                if (currentInput && previousInput && operator) {
                    const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    display.value = result;
                    currentInput = result;
                    previousInput = '';
                    operator = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Set the operator
                if (currentInput) {
                    if (previousInput) {
                        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                        display.value = result;
                        previousInput = result;
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                    operator = value;
                }
            } else {
                // Append number or decimal point
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

    function calculate(num1, num2, operator) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num2 !== 0 ? num1 / num2 : 'Error';
            default:
                return 0;
        }
    }
});
