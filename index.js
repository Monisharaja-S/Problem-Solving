// Getting input via STDIN
const readline = require("readline");
const { largest} = require("./session 1")
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

const [val1,val2,val3,val4]=(userInput[0].split(" ").map(Number));
 console.log(largest(val1,val2,val3,val4));
  //end-here
});