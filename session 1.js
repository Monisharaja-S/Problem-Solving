//1.Determine if a number is positive or negetive?
function positiveOrNegetive(num){
    if(num>0){
        return "positive";
    }
    else if(num<0)
    {
        return "negetive";
    }
    else
    {
        return "zero";
    }   
}

//2.Find the sum of two Integers? eg for pure function
function sumOfTwoInteger(num1,num2){
    return num1 + num2;
}

//3.Find the sum of two Integers with random?
function sumOfTwoRandomInteger(num1,num2){
    return num1 + num2+Math.floor(Math.random()*1000)///input.txt(5,10)
}
console.log(sumOfTwoRandomInteger(5,10))
module.exports = {positiveOrNegetive,sumOfTwoInteger,sumOfTwoRandomInteger};