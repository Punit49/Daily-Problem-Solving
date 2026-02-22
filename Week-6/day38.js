// ======================================================
// week-6, Day-38 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Write a function to Find the longest word in a sentence.
// ------------------------------------------------------
function longestWord(sentence){
    if(sentence.length === 0) return null;
    let longest = "";
    let words = sentence.trim().split(" ");

    for (let word of words) {
        if(word.length > longest.length) longest = word;
    }
    return longest;
}

// Example
console.log(longestWord("I love JavaScript programming"));