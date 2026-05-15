// ======================================================
// week-14, Day-93 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort Only Elements at Even Indexes
// ------------------------------------------------------

function selectionSortEvenIndex(arr) {
   if(!arr || !Array.isArray(arr)){
    return [];
   }

   let min;

   for(let i = 0; i < arr.length - 2; i = i + 2){
        min = i;

        for(let j = i + 2; j < arr.length; j = j + 2){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        if(i !== min){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
   }

   return arr;
}

function main(){
  const sortedArr = selectionSortEvenIndex([9, 4, 7, 6, 3, 2]);
  console.log(sortedArr);
}

main();
 