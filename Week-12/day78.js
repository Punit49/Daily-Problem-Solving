// ======================================================
// week-12, Day-78 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array but Keep Zeros at the End
// ------------------------------------------------------
function bubbleSortFixedZero(arr){ 
    let zeroCount = 0;

    for (const element of arr) {
        if(element === 0){
            zeroCount++;
        }
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length - i; j++){
            if(arr[j - 1] > arr[j]){
                [arr[j - 1], arr[j] ] = [ arr[j], arr[j - 1]];
            }
        }
    }

    for (let i = 1; i <= zeroCount; i++) {
        arr.push(0);    
    }

    return arr.slice(zeroCount);
}    

// Example -
console.log(bubbleSortFixedZero([3, 0, 5, 0, 2, 1, 0, 9, 10, 7, 0]));
 