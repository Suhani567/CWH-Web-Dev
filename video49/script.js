 function nice(name) {
    console.log("hey "  + name + " you are nice!")
    console.log("hey " + name + " you are good!")
    console.log("hey " + name + " you are looking like a wow!")
    console.log("hey " + name + " your course is cool!")
 }
// console.log("hey you are nice!")
// console.log("hey you are good!")
// console.log("hey you are looking like a wow!")
// console.log("hey your course is cool!")

function sum(a,b,c=3) {
    // console.log(a+b)
    return a+b+c
}
result1=sum(3,6)
result2=sum(9,6)
result3=sum(3,8)

console.log("the sum of these numners is:",result1)
console.log("the sum of these numners is:",result2)
console.log("the sum of these numners is:",result3) 

// arrow function
const func1= (x)=>{
    console.log("i am an arrow function",x)
}

func1(34);
func1(67);
func1(90);