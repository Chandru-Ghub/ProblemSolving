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

console.log('factorial',factorialRecursion(5))


// Problem 3

function sumofArrayRecursion(arr){
    if(arr.length == 0) return 0;

    return arr[0]+ sumofArrayRecursion(arr.slice(1))
}
console.log('sum of array',sumofArrayRecursion([1,2,3,4,5,6,7]))


// Problem 4

function revStrRecursion(str){
    if(str == '') return ''
    return revStrRecursion(str.substring(1)) + str.charAt(0)
}
let res = revStrRecursion('hello')
console.log('reverse string>>',res)


// Problem 5
function power(base,pow){
    if(pow == 0) return 1
    return base * power(base,pow-1)
}
let pw = power(2,5)
console.log('power',pw)