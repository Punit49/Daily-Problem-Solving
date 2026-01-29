/* =========================================================
   Week-3, Day 1 of daily problem solving
   ========================================================= */

/* =========================================================
   Q. Write a function to get prime Factorization in Exponent Form.
   ========================================================= */

function primeFactorizationInExponent(n){
    if(n <= 1) return null;

    let num = n;
    let primeFactors = {};

    for(let i = 2; i * i <= num; i++){
        while(num % i === 0){
            num = num / i;
            primeFactors[i] = (primeFactors[i] || 0) + 1;
        }
    }

    if(num > 1){
        primeFactors[num] = (primeFactors[num] || 0) + 1;
    }

    return primeFactors;
}

// Example
console.log(primeFactorizationInExponent(360));


/* =========================================================
   Q. First Non-Repeating Character (Index Version)
   ========================================================= */

function firstNonRepeatingIndex(str){
    let count = {};

    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    for(let i = 0; i < str.length; i++){
        if(count[str[i]] === 1){
            return i;
        }
    }

    return -1;
}   

// Example
console.log(firstNonRepeatingIndex("ppuunitt"));
