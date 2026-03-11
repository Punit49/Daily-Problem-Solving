// ======================================================
// week-8, Day-51 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Check If Two Strings Have one Same Character (Order Doesn't Matter)
// ------------------------------------------------------
function isSameChar(str1, str2){
    str1 = str1.trim();
    str2 = str2.trim();
    let seen = {};
    
    for (let char of str1.toLowerCase()) {
        seen[char] = char;
    }

    for (let char of str2.toLowerCase()) {
        if(seen[char] === char){
            return true;
        }
    }

    return false;
}

// Exampleṇ
console.log(isSameChar("listen", "pop"));