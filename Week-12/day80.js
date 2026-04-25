// ======================================================
// week-12, Day-79 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array of Characters Case-Insensitive
// ------------------------------------------------------
function sortLetters(arr){ 
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j - 1].toLowerCase() > arr[j].toLowerCase()){
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }

    return arr;
}    

// Example -
console.log(sortLetters(['b', 'A', 'd', 'C']));
 