// ==========================================================
// Week 2 – Day 7
// ==========================================================


// ----------------------------------------------------------
// Q. Find the Prime Factorization (Return as an Array).
// ----------------------------------------------------------

function primeFactorization(n){
    if(n <= 1) return [];

    let num = n;
    let primeFactors = [];

    function isPrime(n){
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) return false;
        } 
        return true;
    }

    for(let i = 2; i <= num; i++){
        if(isPrime(i)){
            while(num % i === 0 && num > 1){
                num = num / i;
                primeFactors.push(i);
            }
        }
    }

    return primeFactors;
}

// Example
console.log(primeFactorization(282));


// ----------------------------------------------------------
// Q. You have a password input and a button.
// ----------------------------------------------------------
// * If password is hidden → show it
// * If password is visible → hide it
// ----------------------------------------------------------

function hideUnhidePassword(){
    let input = document.querySelector("#input");
    let btn = document.querySelector("#btn");

    if(input.type === "password"){
        input.type = "text";
        btn.textContent = "Hide Password";
    } else {
        input.type = "password";
        btn.textContent = "Unhide Password"
    }
}
