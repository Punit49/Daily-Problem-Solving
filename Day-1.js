/* ============================================================
   📘 Day 1 – Number Theory Basics
   ------------------------------------------------------------
   Problems Covered:
   1️⃣ Check if a number is Prime
   2️⃣ Check if two numbers are Co-Prime
   ============================================================ */


/* ------------------------------------------------------------
   🔹 Q1. Check if a number is Prime
   ------------------------------------------------------------ */

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

// Examples
console.log(isPrime(18)); // false
console.log(isPrime(17)); // true

/*
    Time Complexity : O(√n)
    Space Complexity: O(1)
*/


/* ------------------------------------------------------------
   🔹 Q2. Check if two numbers are Co-Prime
   ------------------------------------------------------------ */

function isCoPrime(a, b) {
    let dividend = a > b ? a : b;
    let divisor = a < b ? a : b;

    while (dividend % divisor !== 0) {
        const remainder = dividend % divisor;
        dividend = divisor;
        divisor = remainder;
    }

    return divisor === 1;
}

// Examples
console.log(isCoPrime(8, 15));   // true
console.log(isCoPrime(12, 18));  // false

/*
    Time Complexity : O(log(min(a, b)))
    Space Complexity: O(1)
*/