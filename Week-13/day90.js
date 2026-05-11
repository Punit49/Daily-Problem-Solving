// ======================================================
// week-13, Day-90 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array and Count How Many Times Minimum Changed
// ------------------------------------------------------

function selectionSortMinCount(arr) {
    if(!arr || !Array.isArray(arr)){
        return 0;
    }

    let min;
    let minCount = 0;

    for(let i = 0; i < arr.length - 1; i++){
        min = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
                minCount++;
            }
        }

        if(i !== min){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        } 
    }

    return {minCount, arr};
}

function main(){
  const sortedArr = selectionSortMinCount([8, 3, 5, 2, 6]);
  console.log(sortedArr);
}

main();