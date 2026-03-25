// ======================================================
// week-9, Day-61 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function that swaps the first and last character of a string.
// ------------------------------------------------------
function swapFirstAndLast(str){
    str = str.trim();
    if(str.length === 0) return str;
    let newStr = str[str.length - 1]; 

    for(let i = 1; i < str.length - 1; i++) {
        newStr += str[i];
    }

    newStr += str[0];
    return newStr;
}

// Example -
console.log(swapFirstAndLast("Punit"));
