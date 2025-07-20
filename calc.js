let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert("Invalid expression");
    display.value = '';
  }
}

// 🔑 Listen for Enter key to calculate
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    deleteLast();
  } else if (!isNaN(event.key) || ['+', '-', '*', '/', '.', '(', ')'].includes(event.key)) {
    append(event.key);
  }
});
