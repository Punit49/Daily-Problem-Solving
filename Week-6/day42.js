// ======================================================
// week-6, Day-42 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Check if a string has all unique characters.
// ------------------------------------------------------
function isUnique(str){
    if(str.length === 0) return true;
    let seen = {};

    for (let char of str) {
        if(seen[char]) return false;
        seen[char] = true;
    }

    return true;
}

// Example
console.log(isUnique("iampunit"));
