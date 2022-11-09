// Simple Factorial
let pass = 5; //pass being the starting number
let total = 1; // total being the starting total number

function factorial(){
  if(pass == 0){
    return total;
  } else {
    total = total * pass;
    pass = pass - 1;
    return factorial(pass);
  }
}

//steps of the recursion:
// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 3 * 2 * factorial(1)
// factorial(1) returns 3 * 2 * 1 * factorial(0)
// factorial(0) returns 3 * 2 * 1 * 1

const num = factorial()
console.log(num);

//Better/Refactored Factorial
function factorialRemix(number){
  if(number == 0 || number == 1){
    return number;
  } else {
    return number * factorialRemix(number - 1);
  }
}

const num2 = factorialRemix(5)
console.log(num2);


//Why is the factorialRemix better than the Simple?
