function calculatorSetup(operator){
  switch(operator){
    case "add":
      return function(num1, num2){
        return num1 + num2;
      }
    case "subtract":
      return function(num1, num2){
        return num1 - num2;
      }
    default: 
      break;
  }
  
}

const addCalculator = calculatorSetup("add")

const addTwo = addCalculator(1, 2);

console.log(addTwo);

//Another way to utilize a currying function
const subtractTwo = calculatorSetup("subtract")(199, 99);

console.log(subtractTwo);
