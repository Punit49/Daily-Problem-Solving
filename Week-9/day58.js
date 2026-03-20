// ======================================================
// week-9, Day-58 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Merge Two Arrays Without Using concat or spread
// ------------------------------------------------------
function mergeArrays(arr1, arr2){
    let newArr = [];

    for (const element of arr1) {
        newArr.push(element);
    }

    for (const element of arr2) {
        newArr.push(element);
    }

    return newArr;
}

// Example -
console.log(mergeArrays([1, 2, 3], ["a", "b", "c"]));
