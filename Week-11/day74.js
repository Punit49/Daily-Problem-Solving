// ======================================================
// week-11, Day-74 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function that counts how many spaces exist between words in a string
// ------------------------------------------------------
function spaceCount(str){ 
    str = str.trim();
    let count = 0;

    for (const char of str) {
        if(char === " "){
            count++;
        }
    }

    return count;
}    

// Example -
console.log(spaceCount("  hi   there  "));
