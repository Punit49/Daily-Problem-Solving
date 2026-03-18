// ======================================================
// week-8, Day-56 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Check if an Array is Sorted (Ascending)
// ------------------------------------------------------
function isArraySorted(arr){
    if(arr.length === 0) return trye;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return false;
        }
    }
    
    return true;
}

// Example -
console.log(isArraySorted([1, 20, 3, 4, 5]));