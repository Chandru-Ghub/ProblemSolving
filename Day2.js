// Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.
// Write a function that takes a number as input and returns the factorial of that number.
// Write a function that checks if a given string is a palindrome.
// Write a function that finds the maximum and minimum elements in an array.
// Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

//Problem 1
function fibo(n){

    let arr = [0,1]
    for(let i=0;i<n;i++){
        let nxt = arr[i]+arr[i+1]
        arr.push(nxt)
    }
    return console.log(arr)
}
fibo(5)


// Problem 2

function factorial(n){
    let sum = 1;
    for(let i=1;i<=n;i++){
        sum=sum*i
    }
    return console.log(sum)
}
factorial(5)


// Problem 3

function palindrome(str){
    let str2 = str.split('').reverse().join('')
    if(str == str2) return console.log('palindrome')
    return console.log('Not a palidrome')
}
palindrome('dad')


// Problem 4

function elements(arr){
    let max =arr[0]
    let min =arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max) max = arr[i]
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] < min) min = arr[i]
    }
    return console.log([max, min])
}
elements([0.5,1,4,3,8,5])

// Problem 5

function anagram(...arr){
    let str1 = arr[0]
    let str2 = arr[1]
    if(str1.length != str2.length) return false

    for(let i of str1){

        if(str2.indexOf(i) == -1) return false
    }
    return true
}

console.log(anagram("silent", "listen")
)