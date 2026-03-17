// ======================================================
// week-8, Day-55 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q.2 Reverse an Array (Manual Method Only)
// ------------------------------------------------------
function arrayReverse(arr){
    if(arr.length === 0) return [];
    let newArr = [];

    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }

    return newArr;
}

// Example
console.log(arrayReverse([10, 25, 3, 18]));