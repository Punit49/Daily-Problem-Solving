// ======================================================
// week-4, Day-23 of daily problem solving
// ======================================================


// ------------------------------------------------------
// Q1. Split Number into Digits
// ------------------------------------------------------

function splitNumIntoDigits(n){
    if(n < 10) return [n];
    let digits = [];

    while(n > 0){
         digits.unshift(n % 10);
         n = Math.floor(n / 10);
    }
    return digits;
}

// Example
console.log(splitNumIntoDigits(78145));


// ------------------------------------------------------
// Q2. Swap Variable without using third variable
// ------------------------------------------------------

function swapTwoVariablesWithoutThird(a, b){
    a = a + b;
    b = a - b;
    a = a - b; // or
    // [a, b] = [b, a]; 
    return {a, b};   
}

// Example
console.log(swapTwoVariablesWithoutThird(50, 25));
