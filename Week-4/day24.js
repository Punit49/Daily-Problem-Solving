// ======================================================
// week-4, Day-24 of daily problem solving
// ======================================================


// ------------------------------------------------------
// Q1. Remove the Decimal Point Mathematically
// ------------------------------------------------------

function removeDecimal(n){
    while(!Number.isInteger(n)){
        n = n * 10;
    }
    return n;
}

// Example
console.log(removeDecimal(12912.34));
