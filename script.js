const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons .btn');
const clearBtn = document.getElementById('clear');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const btnText = button.textContent;

    if (btnText === 'Clear') {
      currentInput = '';
      display.value = '';
      return;
    }

    if (btnText === '=') {
      try {
        // Evaluate normal math expression
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
      return;
    }

    // Handle special buttons:
    if (btnText === 'Up') {
      if (currentInput === '') return;

      // Sum digits + 11, then add result to number
      const num = parseInt(currentInput);
      const digits = currentInput.split('').map(Number);
      const sum = digits.reduce((a, b) => a + b, 0);
      const result = num + (sum + 11);
      currentInput = result.toString();
      display.value = currentInput;
      return;
    }

    if (btnText === 'Down') {
      if (currentInput === '') return;

      const num = parseInt(currentInput);
      const digits = currentInput.split('').map(Number);
      const sum = digits.reduce((a, b) => a + b, 0);
      const result = num - (sum + 11);
      currentInput = result.toString();
      display.value = currentInput;
      return;
    }

    if (btnText === 'Up 1') {
      if (currentInput === '') return;

      // Sum first two digits + 9, then add to number
      const num = parseInt(currentInput);
      const digits = currentInput.split('').map(Number);
      const sumFirstTwo = (digits[0] || 0) + (digits[1] || 0);
      const result = num + (sumFirstTwo + 9);
      currentInput = result.toString();
      display.value = currentInput;
      return;
    }

    if (btnText === 'Down 1') {
      if (currentInput === '') return;

      const num = parseInt(currentInput);
      const digits = currentInput.split('').map(Number);
      const sumFirstTwo = (digits[0] || 0) + (digits[1] || 0);
      const result = num - (sumFirstTwo + 9);
      currentInput = result.toString();
      display.value = currentInput;
      return;
    }

    // For normal buttons: append text (numbers, operators)
    currentInput += btnText;
    display.value = currentInput;
  });
});

clearBtn.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});
