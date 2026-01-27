// Week 2, Day - 4 of daily probelm solving

// =====================================================
// ? Q. Find the Sum of Even Fibonacci Numbers up to N Terms.
// =====================================================

function sumOfEvenFibonacci(n){
    let pre = 0;
    let cur = 1;
    let sum = 0;

    for(let i = 1; i <= n; i++){
        let next = pre + cur;
        if(cur % 2 === 0) {
            sum += cur;
        }
        pre = cur;
        cur = next;
    }

    return sum;
}

// Example -
console.log(sumOfEvenFibonacci(20));


// -----------------------------------------------------
// ? Q2. Sum of All Numbers in an Array.
// -----------------------------------------------------

function sumOfArr(arr){
    return arr.reduce((acc, cur) => acc + cur, 0);
}

// Example -
console.log(sumOfArr([10, 3, 5, 7, 4, 1]));
