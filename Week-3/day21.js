// =====================================================
// Q. Check if a Number Is an Ugly Number
// =====================================================

function isUglyNumber(n){
    if(n < 1) return false;
    let num = n;

    for(let i = 2; i * i <= num; i++){
        if(num % i === 0){
            if(i > 5) return false;
            while(num % i === 0){
                num /= i;
            }
        }
    }

    if(num > 5) return false;
    return true;
}

console.log(isUglyNumber(40));


// -----------------------------------------------------
// Optimized Way
// -----------------------------------------------------

function isUglyNumber2(n){
    if(n < 1) return false;

    for (let num of [2, 3, 5]) {
        while(n % num === 0){
            n /= num;
        }
    }
    return n === 1;
}

console.log(isUglyNumber2(21));


// =====================================================
//  Q. Remove Duplicates from an Array
// =====================================================

function removeDuplicatesFromArray(arr){
    let seen = {};
    let newArr = [];

    for (let ele of arr) {
        if(!(ele in seen)){
            seen[ele] = true;
            newArr.push(ele);
        }
    }
    
    return newArr;
}

console.log(removeDuplicatesFromArray([10, 12, 15, 18, 10, 15, 12]));
