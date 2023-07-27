// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  const num1 = 10;
  const operator = '+';
  const num2 = 5;
  const result = calculator(num1, operator, num2);
  console.log("Result:", result);