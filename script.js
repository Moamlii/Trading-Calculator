function appendNumber(num) {
  document.getElementById("display").value += num;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// This was previously "Up"
function calculateUp2() {
  let value = document.getElementById("display").value;
  if (!/^\d+$/.test(value)) return;
  let sum = [...value].reduce((acc, digit) => acc + parseInt(digit), 0);
  let total = parseInt(value) + sum + 11;
  document.getElementById("display").value = total;
}

// This was previously "Down"
function calculateDown2() {
  let value = document.getElementById("display").value;
  if (!/^\d+$/.test(value)) return;
  let sum = [...value].reduce((acc, digit) => acc + parseInt(digit), 0);
  let total = parseInt(value) - (sum + 11);
  document.getElementById("display").value = total;
}

// Up 1 = last two digits + 11, then add to number
function calculateUp1() {
  let value = document.getElementById("display").value;
  if (!/^\d+$/.test(value) || value.length < 2) return;
  let lastTwo = parseInt(value.slice(-2));
  let total = parseInt(value) + (lastTwo + 11);
  document.getElementById("display").value = total;
}

// Down 1 = last two digits + 11, then subtract from number
function calculateDown1() {
  let value = document.getElementById("display").value;
  if (!/^\d+$/.test(value) || value.length < 2) return;
  let lastTwo = parseInt(value.slice(-2));
  let total = parseInt(value) - (lastTwo + 11);
  document.getElementById("display").value = total;
}
