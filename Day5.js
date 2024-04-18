//  Write a function that performs a linear search on an array.
// Write a function that performs a binary search on a sorted array.
// Explain the concept of Big O notation and analyze the time complexity of the linear and binary search algorithms.

// PROBLEM 1

let arr = [3,4,6,2,3,1,8,2,1]
let n = 8
function linearSearch(arr,n){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == n){
            return i
        }
    }
    return -1;
}

let result = linearSearch(arr,n)
if(result == -1) console.log('Element not found')
else console.log('Element found index ',result)

// PROBLEM 2
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  const arr1 = [1, 3, 5, 7, 9];
  const target = 5;
  
  const re = binarySearch(arr1, target);
  
  if (result === -1) {
    console.log('Target not found');
  } else {
    console.log('Target found at index', result);
  }