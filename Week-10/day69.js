// ======================================================
// week-10, Day-69 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Find the First Repeating Element in an Array (whose FIRST occurrence appears earliest)
// ------------------------------------------------------
function getFirstRepeatingElement(arr){
    let seen = {};

    for (const element of arr) {
        seen[element] = (seen[element] || 0) + 1;
    }

    for (const element of arr) {
        if(seen[element] > 1){
            return element;
        }
    }

    return -1;
}    

// Example -
console.log(getFirstRepeatingElement([10, 5, 3, 4, 3, 5, 6]));

