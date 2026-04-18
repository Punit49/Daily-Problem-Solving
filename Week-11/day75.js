// ======================================================
// week-11, Day-75 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort a String Alphabetically Using Bubble Sort Logic
// ------------------------------------------------------
function sortStr(str){ 
    let arr = str.trim().split("");
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j - 1] > arr[j]){
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }
    return arr.join("");
}    

// Example -
console.log(sortStr("Punit"));
 