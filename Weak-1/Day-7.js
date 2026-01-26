/* ============================================================
   Day 7 – Prime Numbers & String Manipulation
   ------------------------------------------------------------
   Problems Covered:
   1. Check if Two Numbers are Twin Primes
   2. Reverse a String (Without Using Array)
   3. Reverse a String (Using Array & Two Pointers algorithm)
   ============================================================ */


/* ------------------------------------------------------------
   Q1. Check if Two Numbers are Twin Primes
   ------------------------------------------------------------ */

function isTwinPrime(a, b) {

    function isPrime(n) {
        if (n < 2) return false;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }

        return true;
    }

    return isPrime(a) && isPrime(b) && Math.abs(a - b) === 2;
}

// Examples
console.log(isTwinPrime(17, 19)); // true
console.log(isTwinPrime(11, 13)); // true
console.log(isTwinPrime(7, 11));  // false

/* ------------------------------------------------------------
   Q2. Reverse a String (Without Using Array)
   ------------------------------------------------------------ */

function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Examples
console.log(reverseString("hello"));     // olleh
console.log(reverseString("javascript")); // tpircsavaj


/* ------------------------------------------------------------
   Q3. Reverse a String (Using Array & Two Pointers algorithm)
   ------------------------------------------------------------ */

function reverseString2(str) {
    let chars = str.split("");
    let start = 0;
    let end = chars.length - 1;

    while (start <= end) {
        [chars[start], chars[end]] = [chars[end], chars[start]];
        start++;
        end--;
    }

    return chars.join("");
}

// Examples
console.log(reverseString2("hello"));     // olleh
console.log(reverseString2("coding"));    // gnidoc