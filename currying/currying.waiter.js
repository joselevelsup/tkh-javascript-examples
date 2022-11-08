const menu = [
  {
    name: "Beef Wellington",
    price: 55
  },
  {
    name: "Spaghetti",
    price: 25
  },
  {
    name: "Filet Mingon",
    price: 57
  },
  {
    name: "Risotto",
    price: 20
  },
  {
    name: "fountain soda",
    price: 8
  }
]

//1. We want a name to be inputted so we can output how much the bill is to the customer
function waitPerson(){
  //2. We want to create an empty array so the items the user ordered, can be saved to be used for later
  //3. We want to make sure that the food that the user ordered is on the menu.
  return function(){
    //4. This function should take 1 param of food name
    //5. Use the find method on the menu array using the food name we got in the param
    //6. Make sure to push the found food into the empty array we created. Saves the order

    return function(){
      //7. we want to return a function that allows the user to finally pay for the bill
      //8. inside the function above, we want to tally the bill using the reduce method. 
    }
  }
}









function waitPerson(name){
  console.log("created bill");
  const bill = [];
  return function(foodName){
    console.log("getting bill");
    const foodItem = menu.find(function(food){
      return food.name.toLowerCase() == foodName.toLowerCase();
    })

    bill.push(foodItem);

    return function(){
      const totalBill = bill.reduce(function(prev, curr){
        return prev + curr.price
      }, 0)

      return `${name}, the total bill is ${totalBill} dollars`;
    }
  }
}

const getOrder = waitPerson("Jackson");

console.log("Can I get your order?");

getOrder("beef wellington");

const tallyBill = getOrder("fountain soda");

console.log(tallyBill());
