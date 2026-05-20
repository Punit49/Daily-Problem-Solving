// ======================================================
// week-14, Day-94 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function Sort an Array of Characters by ASCII Value
// ------------------------------------------------------

function selectionSortASCIIValue(arr) {
    if(!arr || !Array.isArray(arr)){
        return [];
    }

    let min;

    for(let i = 0; i < arr.length - 1; i++){
        min = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j].codePointAt(0) < arr[min].codePointAt(0)){
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
  const sortedArr = selectionSortASCIIValue(['d', 'A', 'c', 'B', "!", "-", ">", "}", '^']);
  console.log(sortedArr);
}

main();
 