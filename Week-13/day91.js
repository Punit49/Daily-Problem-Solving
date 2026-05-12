// ======================================================
// week-13, Day-91 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Find the K Largest Elements Without Full Sorting
// ------------------------------------------------------

function selectionSortKLargest(arr, k) {
    if(!arr || !Array.isArray(arr)){
        return [];
    }

    let max;

    for(let i = 0; i < k; i++){
        max = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[max]){
                max = j;
            }
        }

        if(i !== max){
            [arr[i], arr[max]] = [arr[max], arr[i]]
        }
    }

    return arr.slice(0, k);
}

function main(){
  const sortedArr = selectionSortKLargest([5, 1, 9, 3, 7], 0);
  console.log(sortedArr);
}

main();
 