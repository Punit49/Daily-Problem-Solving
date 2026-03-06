// ======================================================
// week-7, Day-47 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Find All Substrings of a String (No Built-ins).
// ------------------------------------------------------
function getSubstrings(str){
    str = str.trim();
    if(str.length === 0) return null;
    let subStr = [];
    
    for(let i = 0; i < str.length; i++){
        let word = "";
        for(let j = i; j < str.length; j++){
            word += str[j];
            subStr.push(word);
        }
    }

    return subStr;
}

// Example
console.log(getSubstrings("abc"));

// ------------------------------------------------------
// Q. Write a function that counts how many uppercase letters are present in a string.
// ------------------------------------------------------
function getUppercaseCount(str){
    str = str.trim();
    if(str.length === 0) return null;
    let uCount = 0;

    for(let i = 0; i < str.length; i++){
        let char = str[i];

        if(char >= "A" && char <= "Z"){
            uCount++;
        }
    }

    return uCount;
}

// Example
console.log(getUppercaseCount("JAVASCRIPT is fuN"));
