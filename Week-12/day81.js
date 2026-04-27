// ======================================================
// week-12, Day-81 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort a 2D Array by the First Element of Each Subarray
// ------------------------------------------------------
function sort2DArrayBubbleSort(arr){ 
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j - 1][0] > arr[j][0]){
               [arr[j - 1], arr[j]]  =  [arr[j], arr[j - 1]];
            }
        }
    }

    return arr;
}    

// Example -
console.log(sort2DArrayBubbleSort([[3, "c"], [1, "a"], [2, "b"]]));
 