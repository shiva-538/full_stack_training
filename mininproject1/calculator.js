let result = document.getElementById('result');
let expression = '';

function addNumber(num) {
  expression += num;
  result.innerHTML = expression;
}

function addOperator(operator) {
  if (expression !== '' && !isNaN(expression[expression.length - 1])) {
    expression += operator;
    result.innerHTML = expression;
  }
}

function calculate() {
  if (expression !== '' && !isNaN(expression[expression.length - 1])) {
    expression = eval(expression);
    result.innerHTML = expression;
  }
}

function clearResult() {
  expression = '';
  result.innerHTML = expression;
}
