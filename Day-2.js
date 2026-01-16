/* =========================================================
   JavaScript Problem Solving
   ========================================================= */

/* ---------------------------------------------------------
   Q1. Print Fibonacci Series up to N Terms
   --------------------------------------------------------- */

function fibonacci(n) {
  let prev = 0;
  let fib = [0, 1];

  for (let i = 1; i < n - 1; i++) {
    fib.push(prev + fib[i]);
    prev = fib[i];
  }

  return fib;
}

// Example
console.log(fibonacci(7));
// Output: [0, 1, 1, 2, 3, 5, 8]


/* ---------------------------------------------------------
   Q2. Count Occurrence of Each Character in a String
   --------------------------------------------------------- */

function charCount(str) {
  let count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

// Example
console.log(charCount("Hello"));
// Output: { H: 1, e: 1, l: 2, o: 1 }