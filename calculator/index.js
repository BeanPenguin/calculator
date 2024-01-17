const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");

const resultElement = document.getElementById("result");

const times = () => {
  const firstNumber = parseInt(firstNumberInput.value);
  const secondNumber = parseInt(secondNumberInput.value);
  const result = firstNumber * secondNumber;

  resultElement.innerHTML = result;
};
