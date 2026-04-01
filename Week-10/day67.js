// ======================================================
// week-10, Day-67 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Find Missing Number from Range 1 to N (When Sorted).
// ------------------------------------------------------
function findMissingNumOneToN3(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let missing = [];
    let seen = {};

    for (const num of arr) {
        seen[num] = (seen[num] || 0) + 1;
    }

    for(let i = min; i <= max; i++){
        if(!seen[i]){
            missing.push(i);
        }
    }

    return missing;
}    

// Example -
console.log(findMissingNumOneToN3([5, 2, 4, 20, 14]));

// ------------------------------------------------------
// Q. Find Missing Number from Range 1 to N (Bruteforce 1).
// ------------------------------------------------------
function findMissingNumOneToN3(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let missing = [];
    let seen = {};

    for (const num of arr) {
        seen[num] = (seen[num] || 0) + 1;
    }

    for(let i = min; i <= max; i++){
        if(!seen[i]){
            missing.push(i);
        }
    }

    return missing;
}    

// Example -
console.log(findMissingNumOneToN3([5, 2, 4, 20, 14]));

// ------------------------------------------------------
// Q. Find Missing Number from Range 1 to N (Bruteforce 2).
// ------------------------------------------------------
function findMissingNumOneToN4(arr){
    arr = arr.sort((a, b) => a - b);
    let min = Math.min(...arr);
    let missing = [];

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(min !== num){
            missing.push(min);
            i--;
        } 
        min++;
    }

    return missing;
}    

// Example -
console.log(findMissingNumOneToN4([5, 2, 4, 20, 14]));


