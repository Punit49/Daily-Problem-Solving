// ======================================================
// week-8, Day-50 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Characters That Appear Only Once
// ------------------------------------------------------
function appearOnce(str){
    str = str.trim();
    let seen = {};
    let newStr = "";

    for (let char of str) {
        seen[char] = (seen[char] || 0) + 1;
    }

    for (let char of str) {
        if(seen[char] === 1){
            newStr += char;
        }
    }

    return newStr;
}

// Example
console.log(appearOnce("aabccdbe"));