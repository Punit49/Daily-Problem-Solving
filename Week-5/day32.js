// ======================================================
// week-5, Day-32 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to check if a number is a happy number.
// ------------------------------------------------------
function isHappyNumber(num){
    if(num < 1) return false;
    let seen = {};
    let sum = num;

    while(sum > 0){
        let n = sum;
        sum = 0;

        while(n > 0){
            let lastDigit = n % 10;
            sum += lastDigit * lastDigit;
            n = Math.floor(n / 10);
        }

        if(sum === 1) return true;
        if(seen[sum]) return false;
        seen[sum] = true;
    }

    return false;
}

// Example
console.log(isHappyNumber(7));

// ------------------------------------------------------
// Q. Write a function to determine whether a number is a power of 3.
// ------------------------------------------------------
function isPowerOfThree(num){
    if(num < 1) return false;
    
    let product = 1;

    while(product < num){
        product *= 3;
    }

    return product === num;
}

// Example
console.log(isPowerOfThree(27));
