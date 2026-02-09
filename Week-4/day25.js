// ======================================================
// week-4, Day-25 of daily problem solving
// ======================================================


// ------------------------------------------------------
// Q1. Write a function that checks whether a given number is an Armstrong number.
// ------------------------------------------------------

function isArmstrong(n){
    if(n < 0) return false;
    let count = 0;
    let squareSum = 0;
    let num = n;

    while(num > 0){
        count++;
        num = Math.floor(num / 10);
    }

    num = n;

    while(num > 0){
        squareSum += Math.pow(num % 10, count);
        num = Math.floor(num / 10);
    }

    return squareSum === n;
}

// Example
console.log(isArmstrong(153));
