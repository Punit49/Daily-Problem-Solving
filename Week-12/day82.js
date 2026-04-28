// ======================================================
// week-12, Day-81 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array in Ascending Order but Stop After K Passes
// ------------------------------------------------------
function bubbleSortAndStopK(arr, k){ 
    let kPasses = 0;
    for(let i = 0; i < k; i++){
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j - 1] > arr[j]){
                [arr[j - 1], arr[j]]  =  [arr[j], arr[j - 1]];
            }
        }
    }

    return arr;
}    

// Example -
console.log(bubbleSortAndStopK([5, 4, 3, 2, 1], 2));
 