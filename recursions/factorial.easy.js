// Simple Factorial
let pass = 5;
let total = 1;

function factorial(){
  if(pass == 0){
    return total;
  } else {
    total = total * pass;
    pass = pass - 1;
    return factorial(pass);
  }
}

const num = factorial()
console.log(num);

//Better Factorial
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
