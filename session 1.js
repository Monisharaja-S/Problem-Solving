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


module.exports = {positiveOrNegetive};