// ======================================================
// week-12, Day-79 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array and Track How Many Comparisons Were Made - Output:
// Sorted array
// Total comparisons
// ------------------------------------------------------
function bubblsortTrackComparesions(arr){ 
    let comparisonCount = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            comparisonCount++;
            if(arr[j - 1] > arr[j]){
               [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }

    return {comparisonCount, sortedArray: arr};
}    

// Example -
console.log(bubblsortTrackComparesions([10, 2, 56, 12]));
 