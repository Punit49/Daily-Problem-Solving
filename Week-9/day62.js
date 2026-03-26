// ======================================================
// week-9, Day-62 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Rotate an Array to the Right by K Steps (OPTIMIZED)
// ------------------------------------------------------
function rotateArrayByKSteps(arr, k){
    if(!arr.length) return [];
    let n = arr.length;
    
    k = k % n;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    function reverse(arr, start, end){
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    return arr;
}

// Example -
console.log(rotateArrayByKSteps([10, 12, 67, 9, 56, 49, 88], 4));

// ------------------------------------------------------
// Q. Rotate an Array to the Right by K Steps
// ------------------------------------------------------
function rotateArrayByKSteps2(arr, k){
    if(!arr.length) return [];
    k = k % arr.length;
    let newArr = [];
    let startIdx = arr.length - k;

    for(let i = startIdx; i < arr.length; i++){
        newArr.push(arr[i]);
    }

    for(let i = 0; i < startIdx; i++){
        newArr.push(arr[i]);
    }

    return newArr;
}

// Example -
console.log(rotateArrayByKSteps2([1, 2, 3], 10));
