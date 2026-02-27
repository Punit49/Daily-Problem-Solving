// ======================================================
// week-6, Day-41 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Check if a String Contains Only Alphabets (No Regex).
// ------------------------------------------------------
function isOnlyAlphabets(str){
    if(str.length === 0) return false;
    for (let char of str) {
        let code = char.toLowerCase().charCodeAt(0);
        if(code < 97 || code > 122) return false; 
    }
    return true;
}

// Example
console.log(isOnlyAlphabets("iampunit"));

// ------------------------------------------------------
// Q. Write a function to Convert a string to camelCase.
// ------------------------------------------------------
function toCamelCase(str){
    if(!str || str.length === 0) return null;
    str = str.toLowerCase().trim();
    let camelCased = "";
    let makeUpper = false;

    for (let char of str) {
        if(char === " " || char === "-" || char === "_"){
            makeUpper = true;
        } else {
            if(makeUpper){
                char = char.toUpperCase();
                makeUpper = false;
            } 
            camelCased += char;
        }
    }

    return camelCased;
}

// Example
console.log(toCamelCase("hello-my namE_is  punit"));
