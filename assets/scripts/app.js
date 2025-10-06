const defaultResult = 100;
let currCalculatadResult = defaultResult;

function addition(num1, num2) {
  const result = num1 + num2;
  return result;
}

function substraction(num1, num2) {
  const result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  const result = num1 / num2;
  return result;
}

// User input
currCalculatadResult = currCalculatadResult + 7;

// Calculation description
// let calculationDescription = defaultResult + " + 7";
let calculationDescription = `${defaultResult} + 7`;

outputResult(currCalculatadResult, calculationDescription);
