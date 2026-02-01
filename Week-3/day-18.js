/******************************************************************************************
  Week 3 Day 18 of Daily Problem Solving - 
  ----------------------------------------------------------------------------------------
*/

/* ========================================================================================
   Q1. Find the Product of All Distinct Prime Factors
   ----------------------------------------------------------------------------------------
*/

function distinctPrimeFactorsProduct(n){
    if(n <= 1) return null;
    let product = 1;
    let num = n;

    for(let i = 2; i * i <= num; i++){
        if(num % i === 0){
            product *= i;
            while(num % i === 0){
                num /= i;
            }
        }
    }
    if(num > 1) product *= num;
    return product;
}

// Example
console.log(distinctPrimeFactorsProduct(99));


/* ========================================================================================
   Q2. Capitalize the First Letter of Every Word in a Sentence
   ----------------------------------------------------------------------------------------
*/

function capitalizeFirstLetter(str){
    if(str.length === 0) return "";
    str = str.trim();

    let newStr = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++){
        let word = str[i];
        if(str[i] !== " " && str[i - 1] === " "){
            word = word.toUpperCase();
        } 
        newStr += word;
    }

    return newStr;
}

// Example
console.log(capitalizeFirstLetter("javaScript is awesome"));


/* ========================================================================================
   Short & Optimized Approach 
   ----------------------------------------------------------------------------------------
*/

function capitalizeFirstLetter2(str){
    return str
            .trim()
            .split(" ")
            .map(word => word ? word[0].toUpperCase() + word.slice(1) : "")
            .join(" ");
}

// Example
console.log(capitalizeFirstLetter2("javaScript is awesome"));
