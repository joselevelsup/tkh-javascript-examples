function exponentizeMeCaptain(baseNum, exponent){
  let total = baseNum;
  if(exponent == 0 || exponent == 1){
    return total;
  }

  exponent = exponent - 1;
  return baseNum * exponentizeMeCaptain(baseNum, exponent);
}

const num = 8;
const expo = 4;

console.log(exponentizeMeCaptain(num, expo))
