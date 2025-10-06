const defaultResult = 0;
let currCalculatadResult = defaultResult;

function addition() {
  currCalculatadResult = currCalculatadResult + userInput.value;
  outputResult(currCalculatadResult, "");
}

function substraction() {
  currCalculatadResult = currCalculatadResult - userInput.value;
  outputResult(currCalculatadResult, "");
}

function multiply() {
  currCalculatadResult = currCalculatadResult * userInput.value;
  outputResult(currCalculatadResult, "");
}

function divide() {
  currCalculatadResult = currCalculatadResult / userInput.value;
  outputResult(currCalculatadResult, "");
}

addBtn.addEventListener("click", addition);

// let calculationDescription = defaultResult + " + 7";
// let calculationDescription = `${defaultResult} + 7`;
