// ======================================================
// week-8, Day-53 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Count Frequency of Each Word in a Sentence
// ------------------------------------------------------
function countFrequencyOfWords(sentence){
    sentence = sentence.trim();
    let count = {};
    let word = "";

    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];
        if(char === " "){
            if(word !== ""){
                count[word] = (count[word] || 0) + 1;
                word = "";
            }
        } else {
            word += char;
        }
    }
    
    if(word !== ""){
        count[word] = (count[word] || 0) + 1;
    }
    return count;
}

// Example
console.log(countFrequencyOfWords("i love coding and i love javascript and"));