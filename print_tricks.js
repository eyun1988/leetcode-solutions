let i = 1;
let j = 2;

// console.log("false", "true")[i == j];

const sentence = "I'm looking for my cats.";

const word = "cats";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

const greeting = "        Hello to the world!       ";

console.log(greeting.trim());
