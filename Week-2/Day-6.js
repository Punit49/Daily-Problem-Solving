// =====================================================
// Week-2, Day 6 — Daily Problem Solving
// =====================================================


// -----------------------------------------------------
// Q1. Print First N Prime Fibonacci Numbers
// -----------------------------------------------------

// ? Q. Print First N Prime Fibonacci Numbers. 
function nPrimeFibonacciNums(n){
    function isPrime(n){
        if(n <= 1) return false;
        if(n === 2) return true;

        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) return false;
        }
        return true;
    }

    let pre = 1;
    let cur = 1;
    let fibonacci = [];

    while(fibonacci.length < n){
        let next = pre + cur;
        if(isPrime(next)) fibonacci.push(next);
        pre = cur;
        cur = next;
    }

    return fibonacci;
}

// Example
console.log(nPrimeFibonacciNums(10));


// -----------------------------------------------------
// Q2. Deep Clone an Object (Iterative Method)
// -----------------------------------------------------

// ? Q. Write a function to Deep Clone an Object using iterative method.
function deepClone(obj){
    const clone = Array.isArray(obj) ? [] : {};
    const stack = [{source: obj, target: clone}];

    while(stack.length >= 1){
        const { source, target } = stack.pop();

        for (let key in source) {
            if(typeof(source[key]) === "object" && source[key] !== null){
                target[key] = Array.isArray(source[key]) ? [] : {};

                stack.push({
                    source: source[key], 
                    target: target[key]
                });
            } else {
                target[key] = source[key];
            }
        }
    }

    return clone;
}

let originalObj = {
    name: "Punit",
    skills: ["JS", "Node"],
    address: {
        city: "Delhi",
        pin: 110001
    }
};

// Example
let clone = deepClone(originalObj);
clone.address.city = "Hawkins";

console.log(originalObj);
console.log(clone);