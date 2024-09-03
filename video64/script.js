let a =prompt("enter first number")

let b=prompt("enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

function main(){

    let x=7;
    try {
        console.log("The sum is :",sum*x) 
        
    } catch (error) {
        console.log("error aagyii brooo!!!") 
        return false
    }
    
    // finally{
  //     console.log("files are being closed and db connection is beninvsaat")
  // }
}

let c= main()