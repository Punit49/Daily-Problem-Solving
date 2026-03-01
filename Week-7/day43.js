// ======================================================
// week-7, Day-43 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Reverse Only the Words in a Sentence.
// ------------------------------------------------------
function reverseWords(sentence){
    sentence = sentence.trim();
    let reversed = "";
    let word = "";

    for (let i = 0; i <= sentence.length; i++) {
        let char = sentence[i];

        if(char !== " " && char !== undefined){
            word += char;
        } else if(word.length > 0){
            reversed = word + (reversed ? " " : "") + reversed;
            word = "";
        }
    }
    
    return reversed;
}

// Example
console.log(reverseWords(" I    Love  Programming "));

// ------------------------------------------------------
// Q. Count all the Consonants in string.
// ------------------------------------------------------
function numberOfConsonants(str){
    str = str.toLowerCase();
    let count = 0;

    for (let char of str) {
        let code = char.charCodeAt(0);
        if(code >= 97 && code <= 122){
            if(code !== 101 && code !== 105 && code !== 111 && code !== 117 && code !== 97){
                count++;
            }
        }
    }

    return count;
}

// Example
console.log(numberOfConsonants("AEIOU xyz"));

// ------------------------------------------------------
// Q. Count all the Consonants in string using set
// ------------------------------------------------------
function numberOfConsonants2(str){
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    for (let char of str.toLowerCase()) {
        if(char >= 'a' && char <= "z" && !vowels.has(char)){
            count++;
        }
    }

    return count;
}

// Example
console.log(numberOfConsonants2("AEIOU xyz"));

