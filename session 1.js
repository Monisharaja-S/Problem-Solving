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

//2.Find the sum of two Integers?
function sumOfTwoInteger(num1,num2){
    return num1 + num2;
}


module.exports = {positiveOrNegetive,sumOfTwoInteger};