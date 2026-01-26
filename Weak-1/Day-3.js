// ==================================================
//  Day 3 — Daily Problem Solving
// ==================================================


// --------------------------------------------------
// Q. Find the Nth Fibonacci Number
// --------------------------------------------------

function nthFibonacci(n){
    let pre = 0;
    let cur = 1;

    for(let i = 2; i < n; i++){
        [pre, cur] = [cur, pre + cur];
    }

    return cur;
}

// Example - [output - 13]
console.log(nthFibonacci(8));


// --------------------------------------------------
// Q. Check if a Number Belongs to the Fibonacci Series
// --------------------------------------------------

function isFibonacci(n){
    if(n === 0 || n === 1) return true;
    let pre = 0;
    let cur = 1;

    while(cur <= n){
        if(cur === n) return true;
        [pre, cur] = [cur, pre + cur];
    }
    
    return false;
}

// Example - [output - true]
console.log(isFibonacci(13));