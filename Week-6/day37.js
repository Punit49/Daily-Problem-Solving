// ======================================================
// week-6, Day-37 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function that returns the first character that repeats in a string.
// ------------------------------------------------------
function firstRepeatedChar(str){
    let seen = {};

    for (let char of str) {
        if(seen[char]) return char;
        seen[char] = true;
    }

    return null;
}

// Example
console.log(firstRepeatedChar("javascript"));

// ------------------------------------------------------
// Write a function that counts how many truthy values are present in an array.
// ------------------------------------------------------
function countTruthyValues(arr){
    let truthyCount = 0;

    for (let element of arr) {
        if(Boolean(element)) truthyCount++;
    }
    return truthyCount;
}

// Example
console.log(countTruthyValues([0, 1, false, 2, "", 3, null, " "]));
