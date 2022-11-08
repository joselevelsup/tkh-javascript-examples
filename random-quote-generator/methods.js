//Using String methods
const str = "tHiS iS aWesOme";

console.log(str.split(" ")); //split - takes a string and converts to an array based on the string indentifier param. In this case, using a space. 

// slice - takes a string and only gets the parts that you ask for using the first position and then all the way to the last position. Both positions are numbers. In this case, we are saying to go to the 5th place and start there then go to the end of the string thus the 'str.length'
console.log(str.slice(5, str.length)); 

//toUpperCase - takes the string and turns all letters to upper case
console.log(str.toUpperCase());

//toLowerCase - takes the string and turns all letters to lower case 
console.log(str.toLowerCase());

//THIS IS NOT A METHOD. This is a property
console.log(str.length);

if(str.toLowerCase() == "this is awesome"){
    console.log("this really is awesome");
}

const arr = [2, 4, 6, 8];

//map - loops through an array and asks for a return to place to a new array. Once the loop is completed, it returns the new array.
// for this example, we are looping through the array and making each element be multiplied by 2
const newArr = arr.map(function(el){
    return el * 2;
})

console.log(newArr);

//Example of what a map can also look like without using the map method
let arr2 = [2, 4, 6, 8];
let arr3 = [];

for(let i = 0; i < arr2.length; i++){
    arr3.push(arr2[i] * 2);
}

console.log(arr3);

//forEach is similar to just a standard for loop EXCEPT you cannot control how the loop flows. It does not use returns at all. forEach just loops through the array.
//forEach is VOID - meaning it only performs code. It does not return anything.
arr3.forEach(function(el){
    console.log(el * 2);
});

let studentNames = [
    //0
    {
        firstName: "Jacky",
        lastName: "Peng",
        grade: 80
    },
    //1
    {
        firstName: "Gracelyn",
        lastName: "Prajna",
        grade: 100,
    },
    {
        firstName: "Rafael",
        lastName: "Lopez",
        grade: 70
    },
    {
        firstName: "Luis",
        lastName: "Molinuevo",
        grade: 55
    }
]


studentNames.forEach(function(student){
    console.log(`${student.firstName} ${student.lastName}`);
})

const newStudentList = studentNames.map(function(student){
    return `${student.firstName} ${student.lastName}`;
});

// console.log(newStudentList);

const str2 = "10";

parseInt(str2); // 10

// filter - removes any element in the array that matches the condition provided.
const newStudents = studentNames.filter(function(student){
    return student.grade >= 70;
});

// console.log(newStudents);

//Chaining Methods
const sentence = "My class is amazing";

let newSentence = sentence.split(" ").map(function(str, index, array){
    if(str.toLowerCase() == "amazing"){
        return "full of awesomeness";
    } else {
        return str;
    }
}).join(" ");

let newSentence2 = sentence
  .split(" ")
  .map(function(str, index, array){
      if(str.toLowerCase() == "amazing"){
          return "full of awesomeness";
      } else {
          return str;
      }
  })
  .join(" ");

console.log(newSentence);


let fellows = [
    {
        firstName: "James",
        lastName: "McAvoy",
        grade: 65
    },
    {
        firstName: "Jimmy",
        lastName: "Neutron",
        grade: 100
    },
    {
        firstName: "Barbara",
        lastName: "Townsend",
        grade: 4
    },
    {
        firstName: "Nancy",
        lastName: "Norris",
        grade: "77"
    },
    {
        firstName: "Mariana",
        lastName: "Rodriguez",
        grade: "99",
    },
    {
        firstName: "Jose",
        lastName: "Ortiz",
        grade: 73
    },
    {
        firstName: "Issac",
        lastName: "Newton",
        grade: 100
    }
];

const studentGrades = fellows.map(function(student){
    return parseInt(student.grade); // [10, 20, 30, 40]
}).filter(function(studentGrade){
    return studentGrade > 65 && studentGrade < 80;
});

console.log(studentGrades);

//For Rafael or anyone who was around when the question was asked.
// Turns out I was right but I forgot to account for the previous value
// previousValue will always be a number while currentValue will be the object
const totalGrade2 = fellows.map(function(student){
    return {...student, grade: parseInt(student.grade)} 
}).filter(function(student){
    return student.grade > 65 && student.grade < 80;
}).reduce(function(previousValue, currentValue){
    return previousValue + currentValue.grade;
}, 0);

console.log(totalGrade2);


const totalGrade = studentGrades.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
}, 0);

console.log(totalGrade/studentGrades.length);

//Example of how the reduce method works for numbers
// [10, 20, 30, 40];

// previousValue = 0;
// currentValue = 10;

// previousValue = 10;
// currentValue = 20;

// previousValue = 30;
// currentValue = 30;

// previousValue = 60;
// currentValue = 40;

// returned value 100;

