// ======================================================
// week-11, Day-72 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to sort an array in ascending order using bubble sort
// ------------------------------------------------------
function bubbleSortAsc(arr){  
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j - 1] > arr[j]){
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }
    return arr;
}    

// Example -
console.log(bubbleSortAsc([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
