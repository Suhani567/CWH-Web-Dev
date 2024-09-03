async function sleep(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })

}
function sum(a,b,c){
    return a+b+c
}
// 1. immidiately invoked function expression (iife)
(async function main(){
    
    // console.log(a1)
//    let a=await sleep()
//    console.log(a)
//    let b=await sleep()
//    console.log(b)

// 2. DEstructuring
// let [x,y, ...rest]=[1,5,3,4,65,7,3]
// console.log(x,y,rest)
// })()

let obj={
    a:1,
    b:2,
    c:3
}
let {a,b}=obj
console.log(a,b)

let arr =[1,4,6]
console.log(sum(arr[0]+arr[1]+arr[2]))
console.log(sum( ...arr))
})()
//3.hoisting
var a1=5;

const sleep=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            resolve(45)
        },1000);
    })
}
const sum = async(a, b, c)=>
{
    return a+b+c
}
// gives error as let and const mai hoisting nhi hoti hai 