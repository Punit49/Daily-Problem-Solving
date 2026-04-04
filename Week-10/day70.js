// ======================================================
// week-10, Day-70 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Implement an algorithm to find the "Kth" largest element in an array.
// ------------------------------------------------------
function getKthLargestElement(arr, k){    
    arr = new Set([...arr.sort((a, b) => b - a)]);
    arr = [...arr];
    return arr[k - 1];
}    

// Example -
console.log(getKthLargestElement([10, 5, 3, 4, 3, 5, 6], 3));
