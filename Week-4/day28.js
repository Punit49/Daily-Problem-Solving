// ======================================================
// week-4, Day-28 of daily problem solving
// ======================================================


// ------------------------------------------------------
// Q. Write a function to get sum of array element.
// ------------------------------------------------------
function arraySum(arr){
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}

// Example
console.log(arraySum([10, 2, 5, 3, 15]));

// ------------------------------------------------------
// Q. Write a function to Check if Number is Divisible by 5.
// ------------------------------------------------------
function isDivisible(num){
    if(num % 5 === 0) return true;
    else return false;
}

// Example
console.log(isDivisible(285));