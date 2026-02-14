// ======================================================
// week-5, Day-30 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Find the Sum of Digits.
// ------------------------------------------------------
function sumOfDigits(num){
    let n = Math.abs(num);
    let sum = 0;

    while(n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}

// Example
console.log(sumOfDigits(455));

// ------------------------------------------------------
// Q. Write a function to Find the Average of Digits.
// ------------------------------------------------------
function getAverage(num){
    let n = Math.abs(num);
    let count = 0;
    let sum = 0;

    while(n > 0){
        count++;
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum / count;
}

// Example
console.log(getAverage(455));
