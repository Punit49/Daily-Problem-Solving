// ======================================================
// week-12, Day-83 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)
// ------------------------------------------------------
function bubbleSortEvenNums(arr){ 
   for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            let pre = arr[j - 1];
            let cur = arr[j];

            if(cur % 2 === 0 && pre % 2 === 0){
                if(pre > cur){
                    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                }
            }
        }
   }

   return arr;
}    

// Example -
console.log(bubbleSortEvenNums([9, 4, 2, 7, 6, 5]));
 