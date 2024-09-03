console.log("hello i am a conditional tutorial")

let age=17;
let grace=2;


//1.arithmetic operator
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age**grace)
console.log(age%grace)


if (age>18){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}

//2. assignment operator
age +=grace
console.log(age)

//3. Comparison operator
if (age==18){
    console.log("you can't drive")
}
if (age!=18){
    console.log("you can drive")
}
else if(age==0){
    console.log("are you kidding")
}


else{
    console.log("you can't drive")
}

//3. logical operator 
// a!=b && b!=a

// "True"
// }

//comment
/*
i am a 
multiline comment
*/


//ternary statement
a=6;
b=8;
let c= a > b? (a-b):(b-a);

/*
translates to:
if(a>b){
    let c=a-b;
}
 else{
    let c=a-b;

    }
*/