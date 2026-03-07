// ======================================================
// week-7, Day-48 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Find if One String Is a Substring of Another (Manual Method)
// ------------------------------------------------------
function isSubstring(mainStr, tarStr){
    mainStr = mainStr.trim().toLowerCase();
    tarStr = tarStr.trim().toLowerCase();
    if(mainStr.length === 0 || tarStr.length === 0) return false;  
    
    for(let i = 0; i <= mainStr.length - tarStr.length; i++){
        let word = "";
        for(let j = i; j < mainStr.length; j++){
            word += mainStr[j];
            if(word === tarStr){
                return true;
            }
        }
    }

    return false;
}

// Example
console.log(isSubstring("hellothere", "the"));