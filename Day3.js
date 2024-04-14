//  Write a recursive function to calculate the nth Fibonacci number.
//  Write a recursive function to calculate the factorial of a number.
//  Write a recursive function to find the sum of digits of a number.
//  Write a recursive function to reverse a string.
//  Write a recursive function to calculate the power of a number.


// Problem 1

let n = 8
for(let i=0;i<n;i++){
    console.log(fiboRecursion(i))
}
function fiboRecursion(num){
    if(num < 2) return num
    else{
        return fiboRecursion(num-1) + fiboRecursion(num-2)
    }
}


// Problem 2

function factorialRecursion(num){
    if(num==0) return 1
    return num * factorialRecursion(num-1)
}

console.log(factorialRecursion(5))


// Problem 3

function sumofArrayRecursion(arr){
    if(arr.length == 0) return 0;

    return arr[0]+ sumofArrayRecursion(arr.slice(1))
}
console.log(sumofArrayRecursion([1,2,3,4,5,6,7]))
