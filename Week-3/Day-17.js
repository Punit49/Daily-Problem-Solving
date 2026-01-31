// ============================================================
//  Q. Check if a Number Is a Powerful Number
// ------------------------------------------------------------

function isPowerfulNumber(n){
    if(n <= 1) return false;

    let num = n;
    let primeFactors = {};

    for(let i = 2; i * i <= num; i++){
        while(num % i === 0){
            primeFactors[i] = (primeFactors[i] || 0) + 1;
            num /= i;
        }
    }

    if(num > 1){
        primeFactors[num] = (primeFactors[num] || 0) + 1;
    }

    let result = Math.min(...Object.values(primeFactors)) >= 2;
    return result;
}

// Example 
console.log(isPowerfulNumber(36)); // true


// ============================================================
// Q. Calculate the Average of Array Elements
// ------------------------------------------------------------

function avgOfArray(arr){
    if(arr.length === 0) return 0;

    return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

// Example 
console.log(avgOfArray([10, 15, 20, 30, 35])); // 22
