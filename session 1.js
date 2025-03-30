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
//console.log(sumOfTwoRandomInteger(5,10))

//4.Find the min and max from given three numbers?

function minAndMax1(num1,num2,num3){
//console.log(num1,num2,num3);
let max;
let min;
if(num1<=num2){
    if(num2<=num3){
        max=num3;
    }
    else {
        max=num2;
    }
}else { if(num1<=num3)
        {
        max=num3;
    }
    else {
        max=num1;}
    }
if(num1>=num2){
    if(num2>=num3){
        min=num3;
    }
    else {
        min=num2;
    }
 } else {if(num1>=num3)
        {
        min=num3;
    }
    else {
        min=num1;}
    
    }
   return { min, max };
//console.log(`max=${max},min=${min}`);
}

function minAndMax(num1,num2,num3){
    let min;
    let max;
    if(num1<=num2 && num1<=num3){
        min=num1;
    }else if(num2<=num3){
        min=num2;
    }else{
        min=num3;
    }

    if(num1>=num2 && num1>=num3){
        max=num1;
    }else if(num2>=num3){
        max=num2;
    }else{
        max=num3;
    }
return{max,min}
}

module.exports = {positiveOrNegetive,sumOfTwoInteger,sumOfTwoRandomInteger,minAndMax1,minAndMax};