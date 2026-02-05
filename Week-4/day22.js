// ======================================================
// week-4, Day-22 
// ======================================================


// ------------------------------------------------------
// Q1. Write a function to reverse a number
// ------------------------------------------------------

function getReversedNumber(n){
    if(n < 0) return -1;
    let num = "";

    while(n > 0){
        num += (n % 10);
        n = Math.floor(n / 10);
    }
    return Number(num);
}

// Example
console.log(getReversedNumber(123456));



// ------------------------------------------------------
// Q2. Count elements greater than 10 using built-ins
// ------------------------------------------------------

function numberGreaterThanTen(arr){
    if(arr.length === 0) return 0;

    let ar = arr.reduce((acc, cur) => {
        if(cur > 10){
            acc = acc + 1
        }
        return acc;
    }, 0);

    return ar;
}

// Example
console.log(numberGreaterThanTen([6, 7, 10, 8, 12, 19, 21]));
