// ======================================================
// week-9, Day-57 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Remove All Duplicates From an Array
// ------------------------------------------------------
function removeDuplicateFromArray(arr){
    if(arr.length === 0) return [];
    let seen = {};
    let newArr = [];

    for (const element of arr) {
        seen[element] = (seen[element] || 0) + 1;
        if(seen[element] === 1){
            newArr.push(element);
        }
    }

    return newArr;
}

// Example -
console.log(removeDuplicateFromArray([1, 20, 3, 4, 4, 1, 20]));

// ------------------------------------------------------
// Q. Remove All Duplicates From an Array using set
// ------------------------------------------------------
function removeDuplicateFromArray2(arr){
    if(arr.length === 0) return [];
    return [...new Set(arr)];
}

// Example -
console.log(removeDuplicateFromArray2([1, 20, 3, 4, 4, 1, 20]));

// ------------------------------------------------------
// Q. Remove All Duplicates From an Array using filter
// ------------------------------------------------------
function removeDuplicateFromArray3(arr){
    return arr.filter((element, idx) => {
        return arr.indexOf(element) === idx; 
    });
}

// Example -
console.log(removeDuplicateFromArray3([1, 20, 3, 4, 4, 1, 20]));