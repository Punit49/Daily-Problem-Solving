// ======================================================
// week-4, Day-27 of daily problem solving
// ======================================================


// ------------------------------------------------------
// Q. Write a function to check if a number is a kaprekar number.
// ------------------------------------------------------
function isKaprekar(num){
    if(num < 1) return false;
    let len = String(num).length; 
    let sq = num * num;
    let pow = 10 ** len;
    let right = sq % pow;

    sq = Math.floor(sq / pow);
    return sq + right === num;
}

// Example
console.log(isKaprekar(999));

// ------------------------------------------------------
// Q. Write a function to check whether a number is a Duck number.
// ------------------------------------------------------
function isDuckNumber(num){
    if(num < 1) return false;
    let n = num;

    while(n > 0){
        let ld = n % 10;
        if(ld === 0) return true;
        n = Math.floor(n / 10);
    }

    return false;
}

// Example
console.log(isDuckNumber(405));
