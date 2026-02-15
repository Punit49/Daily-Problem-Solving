// ======================================================
// week-5, Day-31 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Find the number of Digits.
// ------------------------------------------------------
function numberOfDigits(num){
    if(num === 0) return 1;
    let n = num;
    let count = 0;

    while(n > 0){
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}

// Example
console.log(numberOfDigits(12345697));

// ------------------------------------------------------
// Q. Write a function to Find the Frequency of Each Digit.
// ------------------------------------------------------
function frequencyOfDigits(num){
    if(num === 0) return 1;
    let n = Math.abs(num);
    let count = {};

    while(n > 0){
        let digit = n % 10;
        count[digit] = (count[digit] || 0) + 1; 
        n = Math.floor(n / 10);
    }
    return count;
}

// Example
console.log(frequencyOfDigits(121344566));
