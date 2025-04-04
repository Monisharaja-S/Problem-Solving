// Getting input via STDIN
const readline = require("readline");
const { countVowels } = require("./session 1")
const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
//const char=(userInput[0]).split("");

 console.log(countVowels(userInput[0]));
  //end-here
});