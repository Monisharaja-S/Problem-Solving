// Getting input via STDIN
const readline = require("readline");
const { sumOfTwoRandomInteger } = require("./session 1")
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

 const [val1,val2] =userInput[0].split(" ").map(Number);
 console.log(sumOfTwoRandomInteger(val1,val2));
  //end-here
});