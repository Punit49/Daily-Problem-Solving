/* ============================================================================
   Week-2 Day 1 – Daily Problem Solving
   ---------------------------------------------------------------------------
   Q1. Print All Fibonacci Numbers up to a Given Limit
   ---------------------------------------------------------------------------
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
   Q2. Find the First Non-Repeating Element in an Array
   ---------------------------------------------------------------------------
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
console.log(firstUniqueElement([10, 2, 10, 36, 2, 3, 5])); // 36
