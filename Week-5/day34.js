// ======================================================
// week-5, Day-34 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to convert decimal base number into binary base number.
// ------------------------------------------------------
function decimalToBinary(num){
    if(num === 0) return "0";
    let isNegative = num < 0;
    let n = Math.abs(num);
    let binary = "";

    while(n !== 0){
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }

    return isNegative ? "-" + binary: binary;
}

// Example
console.log(decimalToBinary(-39));

// ------------------------------------------------------
// Q. Given an array where every number appears TWICE
// except ONE number which appears ONLY ONCE,
// find that unique number..
// ------------------------------------------------------

function singleNumber(arr){
    if(arr.length === 0) return null;
    let seen = {};

    for (let num of arr) {
        seen[num] = (seen[num] || 0) + 1;
    }

    for (const key in seen) {
        if(seen[key] === 1) return Number(key);
    }

    return -1;
}

// Example
console.log(singleNumber([10, 2, 10, 2, 3, 3, 4, 5, 5]));

// Using XOR -
function singleNumber2(arr){
    let result = 0;
    
    for (const num of arr) {
        result ^= num;
    }
    
    return result;
}

// Example
console.log(singleNumber2([10, 2, 10, 2, 3, 3, 4, 5, 5]));
