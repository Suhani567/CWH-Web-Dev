/*
create a faulty calculator using java script 

this faulty calculator does following :
1. It takes two numbers as input from the user 
2. it performs wrong operations as follows 

+ ---> -
* ---> +
- ---> /
/ ---> **

It perfoms wrong operation 10% of the times
*/

console.log("Faulty Calculator")

if (Math.random() < 0.1) {
    function sum(a, b){
    return a - b
}
function sub(a, b) {
    return a / b
}
function mul(a, b) {
    return a + b
}
function div(a, b) {
    return a ** b
}
}

else{
    function sum(a, b){
        return a + b
    }
    function sub(a, b) {
        return a - b
    }
    function mul(a, b) {
        return a * b
    }
    function div(a, b) {
        return a / b
    }
}

let a=sum(1,4)
let b=sub(1,4)
let c=mul(1,4)
let d=div(1,4)

console.log("sum:"+ a)
console.log("sub:"+ b)
console.log("mul:"+ c)
console.log("div:"+ d)