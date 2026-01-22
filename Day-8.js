/* ============================================================================
   📘 Day XX – JavaScript Problem Solving
   ----------------------------------------------------------------------------
   ✅ Topics Covered:
   1️⃣ Fibonacci Number Generation (Up to a Given Limit)
   2️⃣ First Non-Repeating Element in an Array

   ---------------------------------------------------------------------------
   🔹 Q1. Print All Fibonacci Numbers up to a Given Limit
   ---------------------------------------------------------------------------
   Approach:
   - Iterative Fibonacci generation (Bottom-Up / Dynamic Programming)
   - Stops when the next Fibonacci number exceeds the limit

   Time Complexity : O(n)
   Space Complexity: O(n)
   ============================================================================ */

function fibonacciUptoLimit(limit){
    let pre = 0;
    let cur = 1;
    let fib = [0, 1];

    while(pre + cur < limit){
        let next = pre + cur;
        fib.push(next);
        pre = cur;
        cur = next;
    }

    return fib;
}

console.log(fibonacciUptoLimit(100));

/* ============================================================================
   ---------------------------------------------------------------------------
   🔹 Q2. Find the First Non-Repeating Element in an Array
   ---------------------------------------------------------------------------
   Approach:
   - Use hashing (object) to count occurrences
   - Traverse the array again to preserve original order
   - Return the first element with frequency = 1

   Time Complexity : O(n)
   Space Complexity: O(n)
   ============================================================================ */

function firstUniqueElement(arr){
    let elements = {};

    for (const ele of arr) {
        elements[ele] = (elements[ele] || 0) + 1;
    }
  
    for (const ele of arr) {
        if(elements[ele] === 1) return ele;
    }

    return -1;  
}


// Example -
console.log(firstUniqueElement([10, 2, 10, 36, 2, 3, 5])); 
