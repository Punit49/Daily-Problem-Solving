// ======================================================
// week-7, Day-45 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Count the Number of Words (Manually Without split)
// ------------------------------------------------------
function getWordsCount(str){
    if(str.length === 0) return 0;
    let wordCount = 0;
    
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        let nextChar = str[i + 1];

        if(char !== " " && (nextChar === " " || nextChar === undefined)){
            wordCount++;
        }
    }

    return wordCount;
}

// Example
console.log(getWordsCount("  hi   there  world "));

// ------------------------------------------------------
// Q. Write a function that moves all zeros in an array to 
// the end while keeping the order of other elements the same.
// ------------------------------------------------------
function moveZerosToEnd(arr){
    if(arr.length === 0) return arr;
    let newArr = [];
    let zeroCount = 0;

    for (let element of arr) {
        if(element !== 0){
            newArr.push(element);
        } else {
            zeroCount++;
        }
    }

    for(let i = 1; i <= zeroCount; i++){
        newArr.push(0);
    }

    return newArr;
}

// Example
console.log(moveZerosToEnd([1,0,2,0,3,4]));
