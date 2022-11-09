const stack = [];

stack.push(1) //[1]
stack.push(2) //[1, 2]
stack.push(3) //[1, 2, 3]
stack.push(4) //[1, 2, 3, 4]

console.log(stack)

stack.pop() //[1, 2, 3]
console.log(stack);
stack.pop() //[1, 2]
console.log(stack);
stack.pop() //[1]
console.log(stack);
stack.pop() //[]
console.log(stack);


//Reverses a string using a stack
function reverse(str) {
  let stack = [];
  // push letter into stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  // pop letter from the stack
  let reverseStr = '';
  while (stack.length > 0) {
    reverseStr += stack.pop();
  }
  return reverseStr;
}

//Another way of reversing a string 
//"hello".split("").reverse().join(""); //"olleh"








//Why make a class stack?
//Class Stacks only utilize operations: Push, Pop, Peek. You can still access the elements in the array BUT it deals with elements regarding the end of the stack 
//Think of a stack as wooden blocks on top of each other. If you take it from different places in the stack, its likely to fall over. Please don't utilize jenga. That doesn't count.
//An array, you can access the stack from any where. Think of wooden blocks just laid out for you. You can take a block anytime.


















class Stack {
  constructor() {
    this.items = [];
  }

  // push function
  push(element) {
    // push element into the items
    this.items.push(element);
  }

  // pop function
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
      return null;
    return this.items.pop();
  }

  // peek function
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // return true if stack is empty
    return this.items.length == 0;
  }
}


const classStack = new Stack();

classStack.push(1);
classStack.push(2);
classStack.push(3);
classStack.push(4);

console.log(classStack);

