// ======================================================
// week-12, Day-87 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Find the Kth Smallest Element Using Selection Logic
// ------------------------------------------------------

function selectionSortKthSmallest(arr, k) {
    if(!arr || !Array.isArray(arr) || k > arr.length || k < 1){
        return null;
    }

    let min;
     
    for(let i = 0; i < arr.length - 1; i++){
        min = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        if(min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }

        if(i === (k - 1)){
            return arr[i];
        }
    }

    return null;
}

function main(){
  const sortedArr = selectionSortKthSmallest([9, 4, 7, 1, 3], 4);
  console.log(sortedArr);
}

main();
 