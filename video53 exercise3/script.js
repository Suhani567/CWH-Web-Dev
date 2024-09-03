// factorial with for loop
function factorial(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(6));
// factorial with reduce
function factorialReduce(n){
    if(n==0) 
        return 1;
    return n * factorialReduce(n-1);
}
console.log(factorialReduce(6));
