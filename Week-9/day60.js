// ======================================================
// week-9, Day-60 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Count How Many Times an Element Appears in an Array
// ------------------------------------------------------
function elementFrequency(arr, element){
    let elementCount = 0;

    for (const ele of arr) {
        if(ele === element) {
            elementCount++;
        }
    }

    return elementCount;
}

// Example -
console.log(elementFrequency([1, 4, 4, 4, 2], 4));
