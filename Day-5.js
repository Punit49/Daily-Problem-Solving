/* =========================================================
   Day 5 – Daily JavaScript Problem Solving
   =========================================================
   Q1: Sum of All Prime Numbers till N
   Q2: Count the Number of Digits in a Number
   ========================================================= */


/* ---------------------------------------------------------
    Q1. Sum of All Prime Numbers till N (Naive Approach)
   --------------------------------------------------------- */

function sumOfPrimeNumbers(n){
    if(n < 2) return null;

    let sum = 0;

    function isPrime(num){
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }

    for(let i = 2; i <= n; i++){
        if(isPrime(i)){
            sum += i;
        }
    }

    return sum;
}

// Example
console.log(sumOfPrimeNumbers(15)); // 41


/* ---------------------------------------------------------
     Optimized Version: Sieve of Eratosthenes
     Time Complexity: O(n log log n)
     Space Complexity: O(n)
   --------------------------------------------------------- */

function sieveOfEratosthenes(n){
    let isPrimes = Array(n + 1).fill(true);
    isPrimes[0] = isPrimes[1] = false;

    for(let i = 2; i * i <= n; i++){
        if(isPrimes[i]){
            for(let j = i * i; j <= n; j += i){
                isPrimes[j] = false;
            }
        }
    }

    let sum = 0;

    for(let i = 0; i < isPrimes.length; i++){
        if(isPrimes[i]) sum += i;
    }

    return sum;
}

// Example
console.log(sieveOfEratosthenes(15)); // 41


/* ---------------------------------------------------------
    Q2. Count the Number of Digits in a Number
   --------------------------------------------------------- */

function countNumberOfDigits(n){
    if(n === 0) return 1;

    let digitCount = 0;

    while(n !== 0){
        digitCount++;
        n = Math.floor(n / 10);
    }

    return digitCount;
}

// Example
console.log(countNumberOfDigits(89845945)); // 8