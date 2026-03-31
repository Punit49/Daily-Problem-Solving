// ======================================================
// week-10, Day-66 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Find All Unique Pairs Whose Sum Equals a Target using two pointer algorithm
// ------------------------------------------------------
function unqiuePairsSumTarget(arr, target){
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    let result = [];

    while(start < end){
        let sum = arr[start] + arr[end];

        if(sum === target){
            result.push([arr[start], arr[end]]);

            while(arr[start] === arr[start + 1]) start++;
            while(arr[end] === arr[end - 1]) end--;

            start++;
            end--;
        } else if(sum < target){
            start++;
        } else {
            end--;
        }
    }

    return result;
}

// Example -
console.log(unqiuePairsSumTarget([3, 2, 4, 6, 8], 10));
