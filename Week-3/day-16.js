// ==========================================================
// Q. Distinct Prime Factor Count
// ==========================================================

function distinctPrimeFactorCount(n){
    let count = 0;

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            count++;
            while(n % i === 0){
                n /= i;
            }
        }
    }

    if(n > 1) count++;

    return count;
}

console.log(distinctPrimeFactorCount(780));


// ==========================================================
// Q. Disable Button After Click
// ----------------------------------------------------------
// When a button is clicked once:
//    • it should become disabled
//    • change text to “Submitted”
// ==========================================================

const btn = document.querySelector("#myBtn");

function disableBtn(btn){
    btn.disabled = true;
    btn.value = "Submitted";
}

btn.addEventListener("click", () => {
    disableBtn(btn);
});
