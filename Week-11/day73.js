// ======================================================
// week-11, Day-73 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array in Descending Order Using Bubble Sort
// ------------------------------------------------------
function bubbleSortDesc(arr){  
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j - 1] < arr[j]){
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }
    return arr;
}    

// Example -
console.log(bubbleSortDesc([3, 0, 5, 0, 2, 1]));
