// ======================================================
// week-9, Day-63 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Check if Two Arrays Are Equal (Same Order)
// ------------------------------------------------------
function isArrayEqual(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

   for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
   }

   return true;
}

// Example -
console.log(isArrayEqual([1, 2, 12, 3], [1, 2, 11, 3]));
