// Write a function to reverse an array in place.
// Write a function to find the common elements between two arrays.
// Write a function to remove duplicates from an array.
// Write a function to rotate an array to the right by k steps.
// Write a function to merge two sorted arrays into a single sorted array.

// Problem 1

function revArray(arr){
    let arr2=[]
    for(let i=arr.length-1;i>=0;i--){
        arr2.push(arr[i])
    }
    return arr2
}
console.log(revArray([1,2,3,4,5]))


// problem 2

function commonEle(a,b){
    return a.filter(x => b.includes(x)==true)
}
console.log(commonEle([1,2,3],[2,3,4]))

// Problem 3

function removeDup(arr){
    let arr1=[]
    //  return arr.filter((a,i)=>
    //         arr.indexOf(a)== i)
    arr.forEach((a)=>{
        if(arr1.includes(a) == false) arr1.push(a)
    })
    return arr1
}
console.log(removeDup([1,1,2,3,4,2,3]))


// Problem 4

function rotateArr(arr,n){
    for(let i=0;i<n;i++){
        arr.push(arr.shift())
    }
    return arr
}
console.log(rotateArr([1,2,3,4,5],3))

// Problem 5

function twoSortedArr(a1,b1){
    let a = [...a1,...b1]
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
         if(a[j] > a[j+1]){
           let max = a[j]
         a[j] = a[j+1]
         a[j+1] = max
       }
     }
    }
    return a
}
console.log(twoSortedArr([1, 3, 5, 7, 9],[2, 4, 6, 8, 10]))