







const sentence = "The people here is horrible";

const reMadeSentence = sentence.split(" ").map(function(word) {
  if (word.toLowerCase() === "is") {
    return "are";
  }
  if (word.toLowerCase() === "horrible") {
    return "awesome";
  }

  return word;
}).join(" ");

console.log(reMadeSentence);


const word = "ThisIsAString!";

function countString(str) {
  let length = 0;
  str.split("").forEach(function() {
    length += 1;
  });

  return length;
}

console.log(countString(word));














