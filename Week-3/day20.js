// ==========================================================
// Week-3 Day-20 of Daily Problem Solving
// ----------------------------------------------------------

// ==========================================================
// 🔢 Q. Check if a Number Is a Smith Number
// ----------------------------------------------------------

function isSmithNumber(n){
    if(n < 4) return false;
  
    function isPrime(y){
        for(let i = 2; i <= Math.sqrt(y); i++){
            if(y % i === 0) return false;  
        } 
        return true;
    }

    function digitSum(x){
        let sum = 0;
        while(x > 0){
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        return sum;
    }

    if(isPrime(n)) return false; 

    let num = n;
    let sumOfPrimeFactors = 0;

    for(let i = 2; i * i <= num; i++){
        while(num % i === 0){
            sumOfPrimeFactors += digitSum(i);
            num /= i;
        }
    }

    if(num > 1){
        sumOfPrimeFactors += digitSum(num);
    }

    return sumOfPrimeFactors === digitSum(n);
}

// Test Case
console.log(isSmithNumber(666));


// ==========================================================
//  Q. Check if a Number Is a Spy Number
// ----------------------------------------------------------

function isSpyNumber(n){
    if(n < 1) return false;

    let num = n;
    let sum = 0;
    let product = 1;

    while(num > 0){
        sum += num % 10;
        product *= num % 10;
        num = Math.floor(num / 10);
    }

    return sum === product;
}

// Test Case
console.log(isSpyNumber(55));
