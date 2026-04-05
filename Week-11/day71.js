// ======================================================
// week-11, Day-71 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Implement an algorithm to find the "Kth" smallest element in an array.
// ------------------------------------------------------
function getKthSmallestElement(arr, k){  
    if (k <= 0 || k > arr.length) return null;  
    arr = [...new Set(arr.sort((a, b) => a - b))];
    return arr[k - 1];
}    

// Example -
console.log(getKthSmallestElement([10, 5, 3, 4, 3, 5, 6], 3));
