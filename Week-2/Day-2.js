// ======================================================
// week - 2, Day 2 – Daily Problem Solving (JavaScript)
// ======================================================


// ------------------------------------------------------
// Q1. Generate Fibonacci Numbers Within a Range
// ------------------------------------------------------

function fibonacciRange(start, end){
    if(start > end || end <= 0) return [];

    let pre = 0;
    let cur = 1;
    let fibonacci = [];

    if(start <= 0) fibonacci.push(0);
    if(start <= 1 && end >= 1) fibonacci.push(1);

    while(pre + cur <= end){
        let next = cur + pre;
        if(next >= start){
            fibonacci.push(next);
        }
        pre = cur;
        cur = next;
    }

    return fibonacci;
}

// Example 
console.log(fibonacciRange(0, 100));


// ------------------------------------------------------
// Q2. Find the Second Largest Element in an Array
// ------------------------------------------------------

function secondLargest(arr){
    if(arr.length === 0) return -1;

    let max = -Infinity;
    let secondMax = -Infinity;

    for (const num of arr) {
        if(num > max){
            secondMax = max;
            max = num;
        } else if(num > secondMax){
            secondMax = num;
        }
    }

    return secondMax;
}

// Example 
console.log(secondLargest([20, 10, 8]));
