// ======================================================
// week-5, Day-35 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Find the Most Frequent Character in a String.
// ------------------------------------------------------
function mostFrequentCharacter(str){
    if(str.length === 0) return "-1";
    let seen = {};

    for (let char of str) {
        seen[char] = (seen[char] || 0) + 1;
    }

    let max = Math.max(...Object.values(seen));
    return Object.keys(seen).find(key => seen[key] === max);
}

// Example
console.log(mostFrequentCharacter("success"));

// ------------------------------------------------------
// Q. Write a function to check whether a number is even or odd.
// ------------------------------------------------------
function isEvenOrOdd(num){
    return num % 2 === 0 ? "Even" : "Odd";
}

// Example
console.log(isEvenOrOdd(-88));
