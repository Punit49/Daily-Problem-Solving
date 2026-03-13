// ======================================================
// week-8, Day-52 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Check If a String Is a Pangram
// ------------------------------------------------------
function isPangram(str){
    str = str.trim();
    let charSet = new Set();

    for (const char of str.toLowerCase()) {
        if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            charSet.add(char);
        } 
    }

    return charSet.size === 26;
}

// Exampleṇ
console.log(isPangram("The quick brown fox jumps over the lazy dog"));