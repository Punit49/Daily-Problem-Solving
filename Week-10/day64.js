// ======================================================
// week-10, Day-64 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Left Shift an Array by One Position (swapping method)
// ------------------------------------------------------
function leftShiftAnArray(arr){
    for(let i = 0; i < arr.length - 1; i++){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    return arr;
}

// Example -
console.log(leftShiftAnArray([1, 2, 3, 4, "a"]));

// ------------------------------------------------------
// Q. Left Shift an Array by One Position (standard shifting method)
// ------------------------------------------------------
function leftShiftAnArray2(arr){
    if(!arr.length) return arr;

    let first = arr[0];

    for(let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = first;

    return arr;
}

// Example -
console.log(leftShiftAnArray2([1, 2, 3, 4, "a"]));
