// Week 2, day - 3 of daily probelm solving.

// ? Q. Find largest character in a string.
function largestChar(str){
    let largest = str[0];
    for (const char of str) {
        if(char > largest) {
            largest = char;
        }
    }
    return largest;
}

// Example - 
console.log(largestChar("abczdef"));