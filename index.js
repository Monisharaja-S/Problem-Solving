// Getting input via STDIN
const readline = require("readline");
const { areaOfCircle } = require("./session 1")
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

 
 console.log(areaOfCircle(userInput[0]));
  //end-here
});