// ======================================================
// week-13, Day-88 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to perform Selection Sort but Track Index of Minimum for Each Pass
// ------------------------------------------------------

function selectionSortMinTrack(arr) {
    if(!arr || !Array.isArray(arr)){
        return [];
    }

    let min;

    for(let i = 0; i < arr.length - 1; i++){
        min = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        console.log(`Pass ${i + 1} -> Min Index = ${min}`);

        if(min !== i){
            [arr[i], arr[min]] =  [arr[min], arr[i]];
        }
    }

    return arr;
}

function main(){
  const sortedArr = selectionSortMinTrack([4, 2, 5, 3, 1]);
  console.log(sortedArr);
}

main();
 