
// Problem 1

function prime(num){
    let count=0
    if(num ==2) return true
    if(num % 2 ==0) return false
    for(let i=3;i*i<=num;i+=2){
        count++
    if(num % i == 0) return [count,false]
    }
    return [count, true]
}
console.log(prime(101))


// Problem 2

function largestNumber(num){
   let max = num[0]
   for(let i=0;i<num.length;i++){
        if(num[i] > max) max=num[i]
   }
   return max
}
console.log(largestNumber([1,4,77,88,123,45]))


// Problem 3

function secondLargestNumber(num){
    let max = num[0]
    let sec = -Infinity
    for(let i=0;i<num.length;i++){
        if(num[i] > max) {
            sec = max
            max = num[i]
        }else if(num[i] < max && num[i] > sec){
            sec = num[i]
        }
    }
    return sec
}
console.log(secondLargestNumber([1,4,77,88,123,45]))

// Problem 4

function fibo(n){

let arr=[0,1]
for(let i=0;i<n;i++){
    let tre = arr[i]+arr[i+1]
    arr.push(tre)
}
return arr
}
console.log(fibo(10))


// Problem 5

function factorial(n){
    let sum=1
    for(let i=1;i<=n;i++){
        sum*=i
    }
    return sum
}
console.log(factorial(9))

