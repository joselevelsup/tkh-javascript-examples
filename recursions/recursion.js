let i = 5;

function recycle(num) {
  console.log(num);
  let i = num;
  num = i - 1;
  console.log(num);
  if (num >= 1) {
    console.log(num);
    return recycle(num);
  }
  if (num == 0) {
    console.log(num);
    return num;
  }
}

// console.log(recycle(i));

function recycle(num) {
  if (num == 0) {
    return num;
  } else {
    console.log(num);
    return recycle(num - 1);
  }
}

// const data = [
//     {
//         firstName: "Jose",
//         lastName: "ortiz"
//     },
//     {
//         firstName: "Wren",
//         lastName: "Purcell"
//     },
//     {
//         firstName: "Tia",
//         lastName: "Preston"
//     }
// ]

// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     console.log(element);
// }

let data2 = [
    {
        firstName: "Jose",
        lastName: "ortiz",
        relationship: [
            {
                firstName: "Tia",
                lastName: "Preston",
                relationship: [
                    {
                        firstName: "Jacky",
                        lastName: "Peng",
                        relationship: [
                            {
                                firstName: "Robert",
                                lastName: "Quartey",
                                relationship: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        firstName: "Wren",
        lastName: "Purcell",
        relationship: [
            {
                firstName: "Luis",
                lastName: "Molinuevo",
                relationship: []
            }
        ]
    },
]

function getRelationship(familyOfFellows){
    for (let i = 0; i < familyOfFellows.length; i++) {
        const innerFamily = familyOfFellows[i];
        for (let j = 0; j < innerFamily.relationship.length; j++) {
            const innerInnerFamily = innerFamily.relationship[j];
            console.log(innerInnerFamily);
        }
    }
}

getRelationship(data2);


// const newNum = recycle();


let j = 12;
function countdown(num) {
  num = num - 1;
  if (num > 0) {
    console.log(num);
    return countdown(num);
  }
  if (num == 0) {
    return "blast off!";
  }
}
console.log(countdown(j));
