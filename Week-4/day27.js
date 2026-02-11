// ======================================================
// week-4, Day-27 of daily problem solving
// ======================================================


// ------------------------------------------------------
// Q. Write a function to Find the First Non-Repeating Character.
// ------------------------------------------------------
function firstNonRepeatingChar(str){
    let seen = {};

    for (let char of str) {
        seen[char] = (seen[char] || 0) + 1;
    } 

    for (let char of str) {
        if(seen[char] === 1) return char;
    }

    return null;
}

// Example
console.log(firstNonRepeatingChar("aabbcdefcdf"));