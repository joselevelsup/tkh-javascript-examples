
function shouldIGreet(shouldI, toGreetFunc){
  if(shouldI){
    return function (name){  
      return `Hello ${name}`
    }
  } else {
    return function(name) { 
      return `You chose not to greet ${name}`
    }
  }
}

const goingToGreet = shouldIGreet(true, greet)

const greeting = goingToGreet("James")
console.log(greeting);

const doNotGreet = shouldIGreet(false)
console.log(doNotGreet("Max"))

