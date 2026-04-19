// ======================================================
// week-11, Day-76 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array and Count the Number of Swaps Performed.
// ------------------------------------------------------
function bubbleSortAndCountSwaps(arr){ 
   let swapCount = 0;

   for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j - 1] > arr[j]){
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                swapCount++;
            }
        }
   }

   return {sortedArray: arr, swapCount};
}    

// Example -
console.log(bubbleSortAndCountSwaps([4, 3, 2, 1]));
 