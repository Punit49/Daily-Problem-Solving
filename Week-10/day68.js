// ======================================================
// week-10, Day-68 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Move All Zeroes to End (Optimized)
// ------------------------------------------------------
function moveZeroesToEnd(arr){
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0){
            arr[index++] = arr[i];
        }
    }

    while(index < arr.length){
        arr[index++] = 0;
    }

    return arr;
}    

// Example -
console.log(moveZeroesToEnd([0, 1, 0, 3, 12, -19]));

// ------------------------------------------------------
// Q. Write a function to Move All Zeroes to End (Bruteforce)
// ------------------------------------------------------
function moveZeroesToEnd2(arr){
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        let num = arr[i];

        if(num === 0){
            newArr.push(num);
        } else {
            newArr.unshift(num);
        }
    }

    return newArr;
}    

// Example -
console.log(moveZeroesToEnd2([0, 1, 0, 3, 12, -19]));

