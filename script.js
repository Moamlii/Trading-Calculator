// History log
function addToHistory(entry) {
  const history = document.getElementById("history-log");
  const item = document.createElement("li");
  item.textContent = entry;
  history.prepend(item); // newest on top
}

// Calculator functions
function appendNumber(num) {
  document.getElementById("display").value += num;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    if (result === undefined) return;
    document.getElementById("display").value = result;
    addToHistory(`Calculated: ${result}`);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Up 2: sum of digits + 11
function calculateUp2() {
  let value = document.getElementById("display").value;
  if (!/^\d+$/.test(value)) return;
  let sum = [...value].reduce((acc, digit) => acc + parseInt(digit), 0);
  let total = parseInt(value) + sum + 11;
  document.getElementById("display").value = total;
  addToHistory(`Up 2 applied: ${total}`);
}

// Down 2: subtract sum of digits + 11
function calculateDown2() {
  let value = document.getElementById("display").value;
  if (!/^\d+$/.test(value)) return;
  let sum = [...value].reduce((acc, digit) => acc + parseInt(digit), 0);
  let total = parseInt(value) - (sum + 11);
  document.getElementById("display").value = total;
  addToHistory(`Down 2 applied: ${total}`);
}

// Up 1: sum last 2 digits + 9, then add
function calculateUp1() {
  let value = document.getElementById("display").value;
  if (!/^\d+$/.test(value) || value.length < 2) return;
  let lastTwo = value.slice(-2);
  let digitSum = parseInt(lastTwo[0]) + parseInt(lastTwo[1]);
  let resultAdd = digitSum + 9;
  let total = parseInt(value) + resultAdd;
  document.getElementById("display").value = total;
  addToHistory(`Up 1 applied: ${total}`);
}

// Down 1: sum last 2 digits + 9, then subtract
function calculateDown1() {
  let value = document.getElementById("display").value;
  if (!/^\d+$/.test(value) || value.length < 2) return;
  let lastTwo = value.slice(-2);
  let digitSum = parseInt(lastTwo[0]) + parseInt(lastTwo[1]);
  let resultSub = digitSum + 9;
  let total = parseInt(value) - resultSub;
  document.getElementById("display").value = total;
  addToHistory(`Down 1 applied: ${total}`);
}

// PIN Check
function checkPin() {
  const correctPin = "7788";
  const enteredPin = document.getElementById("pin-input").value;

  if (enteredPin === correctPin) {
    document.getElementById("pin-screen").style.display = "none";
    document.getElementById("calculator-container").style.display = "block";
  } else {
    document.getElementById("error-msg").style.display = "block";
  }
}

