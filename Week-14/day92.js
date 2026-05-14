// ======================================================
// week-14, Day-92 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort a 2D Array by Second Element in Each Subarray
// ------------------------------------------------------

function selectionSort2ndElement(arr) {
    if(!arr || !Array.isArray(arr)){
        return [];
    }

    let min;

    for(let i = 0; i < arr.length - 1; i++){
        min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j][1] < arr[min][1]){
                min = j;
            }
        }
        if(min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
}

function main(){
  const sortedArr = selectionSort2ndElement([[3, 9], [1, 4], [10, 20], [2, 5], [0, 2]]);
  console.log(sortedArr);
}

main();
 