// write a function to fins mean of 5 numbers 
function calculatemean(num1,num2,num3,num4,num5){
    let sum = num1+num2+num3+num4+num5;

    let mean=sum/5

    return mean;
}

let mean=calculatemean(20,4,5,7,3);
console.log("the mean is:",mean);