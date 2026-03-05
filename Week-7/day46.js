// ======================================================
// week-7, Day-46 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Check if a String Starts with a Vowel
// ------------------------------------------------------
function isStartVowel(str){
    str = str.trim();
    if(str.length === 0) return false;
    let char = str[0].toLowerCase();
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        return true;
    } else {
        return false;
    }
}

// Example
console.log(isStartVowel("apple"));
