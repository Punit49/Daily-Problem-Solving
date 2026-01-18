/* =========================================================
    Day 4 – Daily Problem Solving (JavaScript)
 =========================================================
 Topics Covered:
 • Prime Numbers (Brute Force)
 • Prime Numbers (Sieve of Eratosthenes)
 • Vowel Count in a String
 ========================================================= */


/* =========================================================
    Q1. Print All Prime Numbers up to N (Brute Force)
 ========================================================= */

function getPrimeUptoN(n){
    if(n < 2) return [];
    let primes = [];

    function isPrime(a){
        for(let i = 2; i <= Math.sqrt(a); i++){
            if(a % i === 0) return false;
        }
        return true;
    }

    for(let i = 2; i <= n; i++){
        if(isPrime(i)) primes.push(i);
    }

    return primes;
}

console.log("Primes up to 13:", getPrimeUptoN(13));


/* =========================================================
    Q2. Prime Numbers using Sieve of Eratosthenes
 ========================================================= */

function getPrimesTillN(n){
    if(n < 2) return []; 

    let nums = Array(n + 1).fill(true);
    nums[0] = nums[1] = false;

    for(let i = 2; i * i <= n; i++){
        if(nums[i]){
            for(let j = i * i; j <= n; j += i){
                nums[j] = false;
            }
        }
    }

    let primes = [];
    for(let i = 0; i <= n; i++){
        if(nums[i]) primes.push(i);
    }

    return primes;
}

console.log("Primes up to 17 (Sieve):", getPrimesTillN(17));


/* =========================================================
    Q3. Count Vowels in a String
 ========================================================= */

function vowelCount(str){
    let count = 0;
    str = str.toLowercase();

    for (const char of str) {
        if("aeiou".includes(char)){ // if-else can also be used
            count++;
        }
    }

    return count;
}

console.log("Vowel Count:", vowelCount("punitSahu"));


/* =========================================================
    Day 4 Completed
 =========================================================
 ✔ Prime Number Generation
 ✔ Optimized Sieve Algorithm
 ✔ String Traversal & Logic
 ========================================================= */
 