// ======================================================
// week-7, Day-49 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function that replaces every space in a string with a hyphen (-).
// ------------------------------------------------------
function replaceSpace(str){
    str = str.trim();
    let newStr = "";

    for (let char of str) {
        if(char === " "){
            newStr += "-";
        } else {
            newStr += char;
        }
    }

    return newStr;
}

// Example
console.log(replaceSpace("I love coding"));