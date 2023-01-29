let currentOpp = "";
let displayCleared = false;
let num1 = 0;
let num2 = 0;
let carryNum = ""; 
let carryOver = false;
let screenTotal = "";
const display = document.getElementById('display');

const operators = {
  '+': function(a, b) { return parseFloat(a) + parseFloat(b) },
  '-': function(a, b) { return parseFloat(a) - parseFloat(b) },
  '*': function(a, b) { return parseFloat(a) * parseFloat(b) },
  '/': function(a, b) { return parseFloat(a) / parseFloat(b) },
};

function allClear() {
  carryNum = "";
  carryOver = false;
  displayCleared = false;
  num1 = 0;
  num2 = 0;
  runningTotal = 0;
  screenTotal = "";
  display.innerHTML = "0";
};
function clearDisplay() {
  screenTotal = num1;
  document.getElementById('display').innerHTML = "0";
  displayCleared = true;
};
function equals() {
  if (num1 === 0) {
    num1 = screenTotal;
  } else {
    num2 = screenTotal;
  }
  if (num1 !== 0 && num2 !== 0) {
    num1 = operators[currentOpp](num1, num2);
  }
  carryOver = true;
  carryNum = num1;
  display.innerHTML = parseFloat(num1.toFixed(5));
  num1 = 0;
  num2 = 0;
  screenTotal = "";
};
function percent() {
  display.innerHTML = parseFloat((num1 * (screenTotal / 100)).toFixed(5));
  screenTotal *= num1 / 100;
};
function pressNum(num) {
  if (displayCleared) {
    screenTotal = num; 
    displayCleared = false;
  } else {
    screenTotal = screenTotal + num;
  }
  display.innerHTML = screenTotal;
  if (carryOver) {
    num1 = carryNum;
    num2 = screenTotal + num;
    display.innerHTML = screenTotal;
    carryOver = false;
  }
};
function pressOp(opp) { 
  displayCleared = false;
  if (carryOver) {
      num1 = 0;
      num2 = 0;
  } else { 
    num1 = screenTotal;
    num2 = 0;
  }
  currentOpp = opp;
  if (num1 === 0) {
    num1 = screenTotal;
  } else {
    num2 = screenTotal;
  }
  screenTotal = "";
};



