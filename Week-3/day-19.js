// =======================================================
// Week-3, Day-19 of daily problem solving
// -------------------------------------------------------

// =======================================================
// Q1. Check if a Number is a Disarium Number
// -------------------------------------------------------

function isDisariumNumber(n){
    if(n < 1) return false;

    let digits = String(n);
    let sum = 0;

    for(let i = 0; i < digits.length; i++){
        sum += Math.pow(+digits[i], i + 1);
    }

    return sum === n;
}

// Example
console.log(isDisariumNumber(175));


// =======================================================
// Q2. Check if a Number is a Square-Free Number
// -------------------------------------------------------

function isSquareFreeNumber(n){
    if(n < 1) return false;
    if(n === 1) return true;
    let num = n;

    for(let i = 2; i * i <= num; i++){
        let count = 0;
        while(num % i === 0){
            count++;
            if(count > 1) return false;
            num /= i;
        }
    }

    return true;
}

// Example
console.log(isSquareFreeNumber(30));
