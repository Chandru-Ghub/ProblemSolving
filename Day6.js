// Implement the bubble sort algorithm.

// Implement the selection sort algorithm.

// Implement the insertion sort algorithm.

// Explain the concept of merge sort and implement it.

// Explain the concept of quick sort and implement it.


// PROBLEM 1

let a = [4,6,1,3,9,5]

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                let max = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = max
            }
        }
    }
    return arr
}
console.log(bubbleSort(a))

// PROBLEM 2
//[4,6,1,3,9,5]
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let max = i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[max]){
                max = j
            }
        }
        if(max != i){
            [arr[i],arr[max]] = [arr[max],arr[i]]
        }
        
    }
    return arr
}
console.log(selectionSort(a))


// PROBLEM 3
//[4,6,1,3,9,5]

function insertionSorting(arr){
    for(let i=1;i<arr.length;i++){
        let current = arr[i]
        let j
        for(j=i-1;j >= 0 && arr[j] > current;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = current
}
return arr
}
console.log(insertionSorting(a))
