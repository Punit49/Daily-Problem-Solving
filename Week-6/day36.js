// ======================================================
// week-6, Day-36 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Remove All Duplicate Characters (Keep First Occurrence)
// ------------------------------------------------------
function removeDuplicateChars(str){
    if(str.length === 0) return 0;
    let seen = {};
    let newStr = "";

    for (let char of str) {
        if(seen[char] === undefined){
            newStr += char;
            seen[char] = true;
        }
    }
    
    return newStr;
}

// Example
console.log(removeDuplicateChars("programming"));

// ------------------------------------------------------
// Q. Write a function that returns the last non-zero digit of a number.
// ------------------------------------------------------
function lastNonZeroDigit(num){
    let n = Math.abs(num);

    while(n > 0){
        let lastDigit = n % 10;
        if(lastDigit !== 0) return lastDigit; 
        n = Math.floor(n / 10);
    }

    return null;
}

// Example
console.log(lastNonZeroDigit(1915030));
