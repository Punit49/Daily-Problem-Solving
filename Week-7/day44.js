// ======================================================
// week-7, Day-44 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function that takes a string as input and 
//    returns a string where each unique character is followed 
//    by its total number of occurrences in the input string.
// ------------------------------------------------------
function compressString(str){
    let count = {};
    let compressed = "";

    for (let char of str) {
        count[char] = (count[char] || 0) + 1; 
    }

    Object.keys(count).forEach((key) => {
        compressed += (key + count[key]);
    });

    return compressed;
}

// Example
console.log(compressString("aaabbccccd"));


// ------------------------------------------------------
// Q. Write a function to Compress a String (Basic Run-Length Encoding).
// ------------------------------------------------------
function compressString2(str){
    str = str.trim();
    let count = 1;
    let compressed = "";
    let preChar = str[0];

    for (let i = 1; i < str.length; i++) {
        let char = str[i];

        if(char !== " "){
            if(char === preChar){
                count++;
            } else {
                compressed += preChar + count;
                preChar = char;
                count = 1;
            }
        }
    }
    
    compressed += (preChar + count);
    return compressed;
}

// Example
console.log(compressString2(" aaababbccccd "));

