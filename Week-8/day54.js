// ======================================================
// week-8, Day-54 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function that counts how many capital letters are in a string.
// ------------------------------------------------------
function capitalCharCount(str){
    str = str.trim();
    let capitalCount = 0;

    for (const char of str) {
        if(char >= "A" && char <= "Z"){
            capitalCount++;
        }
    }
    return capitalCount;
}

// Example
console.log(capitalCharCount("Hey HeLLo123"));