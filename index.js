// Getting input via STDIN
const readline = require("readline");
const { positiveOrNegetive } = require("./session 1")
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

 const val=+userInput[0];
 console.log(positiveOrNegetive(val));
  //end-here
});