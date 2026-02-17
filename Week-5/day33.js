// ======================================================
// week-5, Day-33 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to convert binary number into decimal base number.
// ------------------------------------------------------
function binaryToDecimal(num){
    num = String(num);
    let series = 1;
    let decimalBase = 0;

    for(let i = num.length - 1; i >= 0; i--){
        if(num[i] !== "0" && num[i] !== "1") return null;
        if(num[i] === '1'){
            decimalBase += series;
        }
        series *= 2;
    }
    
    return decimalBase;
}

// Example
// console.log(binaryToDecimal("010110010"));

// ------------------------------------------------------
// Q. Write a function to check whether a given number is a Power of 2.
// ------------------------------------------------------
function isPowerOfTwo(num){
    if(num < 1) return false;
    let power = 1;

    while(power < num){
        power *= 2;
    }

    return power === num;
}

// Example
console.log(isPowerOfTwo(64));
