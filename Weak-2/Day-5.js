// ? Q. Check if the Sum of Two Consecutive Fibonacci Numbers is Prime.
function isSumOfTwoFibonacciIsPrime(a, b){
    function areFibonacci(a, b){
        let pre = 0;
        let cur = 1;

        while(cur <= Math.max(a, b)){
            if((pre === a && cur === b) || (pre === b && cur === a)){
                return true;
            }

            [pre, cur] = [cur, pre + cur];
        }

        return false;
    }

    function isPrime(n){
        if(n <= 1) return false;
        if(n == 2) return true;
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) return false;
        }
        return true;
    }
    
    if(isPrime(a + b) && areFibonacci(a, b)) return true;
    return false;    
}

console.log(isSumOfTwoFibonacciIsPrime(34, 55));

// ? Q. Write a function to Deep Clone an Object using recursion.
let originalObj = {
    name: "Punit",
    skills: ["JS", "Node"],
    address: {
        city: "Delhi",
        pin: 110001
    }
};

function deepClone(obj){
    if(obj === null || typeof(obj) !== "object") return obj;

    let clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}

console.log(deepClone(originalObj));