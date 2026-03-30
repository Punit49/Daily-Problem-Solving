// ======================================================
// week-10, Day-65 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Find All Unique Pairs Whose Sum Equals a Target (Optimized Code)
// ------------------------------------------------------
function unqiuePairsSumTarget(arr, target){
    let seen = new Set();
    let pairs = new Set();

    for (const num of arr) {
        let complement = target - num;

        if(seen.has(complement)){
            let pair = [Math.min(num, complement), Math.max(num, complement)];
            pairs.add(pair.toString());
        }

        seen.add(num);
    }

    return [...pairs].map(pair => pair.split(",").map(Number));
}

// Example -
console.log(unqiuePairsSumTarget([2, 3, 2, 3], 5));

// ------------------------------------------------------
// Q. Find All Unique Pairs Whose Sum Equals a Target
// ------------------------------------------------------
function unqiuePairsSumTarget2(arr, target){
    let UniquePairs = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] + arr[i] === target){
                UniquePairs.push([arr[i], arr[j]]);
            }
        }
    }
    return UniquePairs;
}

// Example -
console.log(unqiuePairsSumTarget2([1, 2, 3, 4, 5], 5));
