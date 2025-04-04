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

function minAndMax2(num1,num2,num3){
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


function minAndMax(num1,num2,num3){
    const max =(num1,num2)=> num1<=num2 ? num2:num1;
    const min =(num1,num2)=> num1>=num2 ? num2:num1; 
    //console.log(max,min);
    return{
        max: max(num1,max(num2,num3)),
        min: min(num1,min(num2,num3))
    }
}


function minMidMax(num1,num2,num3){
    const max =(num1,num2)=> num1<=num2 ? num2:num1;
    const min =(num1,num2)=> num1>=num2 ? num2:num1; 
   
    const obj={
        max: max(num1,max(num2,num3)),
        min: min(num1,min(num2,num3))
    }
    //console.log(obj.max,obj.min); 
    obj.mid= num1+num2+num3-obj.max-obj.min;
    console.log(obj);
}

//5.Count the number of digits in a number?
function countDigits(num){
    let count=0;
    while(num>0){
        num=Math.floor(num/10);
        count++;
    }
    return count;
}

function countDigit(num) {
    const floor = val => val - val % 1;
    let count = 0;
    while (num > 0) {
        num = floor(num / 10);
        count++;
    }
    return count;
}

//6.Check the contain only alphabet?
function isOnlyAlpha(str){
    for(const char of str){
        //if(!((char <= "Z" && char >= "A")||(char <= "z"&& char >= "a")))
        if((char >= "Z" || char <= "A")&&(char >= "z"|| char <= "a")){
            return "No" //false;
        }
    }
            return "Yes" //true;   

            return /^[A-Za-z]+$/.test(str)? "YES":"NO"; 
         }

//7.Calculate the area of a circle with a given radius?

function areaOfCircle(rad){
   // return Math.PI*rad*rad;
   return ((22/7)*rad*rad);
}

//8.Check if a charactor is a vowels?

function isVowels(char){
    //return char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U';
    return 'aeiouAEIOU'.indexOf(char) == -1 ? "NO":"YES";
}

//practice question
//1.Calculate the difference between two integers?
function differ(num1,num2){
    if(num1<num2){
        return num2-num1;
    }else{
        return num1-num2;
    }
}

//2.check if a number is even or odd?
function evenOrOdd(num){
    if(num%2===0){
        return "Even";
    }else{
        return "Odd";
    }
}

//3.Calculate the perimeter of a rectangle?
function perimeter(num1,num2){
    let l;
    let w;
    if(num1<num2){
        l=num2;
        w=num1;
    }else{
        l=num1;
        w=num2;
    }
    return 2*(l+w);
}

//4.Find the largest of four numbers?
const lar=(val1,val2)=> val1<val2 ? val2:val1;
function largest(num1,num2,num3,num4){
   return{ lar:(num1,lar(num2,lar(num3,num4)))
   }
}

//5.Calculate the average of three numbers?
function average(num1,num2,num3){
    return (num1+num2+num3)/2;
}
//6.count the number og vowels in a string?
function countVowels(str){
    let count=0;  
   for(const char of str){
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'){
        count++;
    }
}
    return count;
}

//7.Determine if a character is uppercase?
//8.Print the reverse of a string?
//9.Find the square of a number?

module.exports = {
    positiveOrNegetive,
    sumOfTwoInteger,
    sumOfTwoRandomInteger,
    minAndMax1,
    minAndMax2,
    minAndMax,
    minMidMax,
    countDigits,
    countDigit,
    isOnlyAlpha,
    areaOfCircle,
    isVowels,
    differ,
    evenOrOdd,
    perimeter,
    largest,
    average,
    countVowels
};