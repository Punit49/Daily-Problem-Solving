// ======================================================
// week-6, Day-40 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Check if Two Strings Are Anagrams (Without Sorting).
// ------------------------------------------------------
function isAnagrams(str1, str2){
    if(str1.length !== str2.length) return false;
    let freq = {};

    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of str2) {
        if(!freq[char]) return false;
        freq[char]--;
    }

    return true;
}

// Example
console.log(isAnagrams("racecar", "carrace"));


// ------------------------------------------------------
// Q. Write a function to Find the intersection of two arrays.
// ------------------------------------------------------
function arrayIntersection(arr1, arr2){
    if(arr1.length === 0 || arr2.length === 0) return [];
    let seen = {};
    let intersection = [];

    for (let element of arr1) {
        seen[element] = true;
    }

    for (let element of arr2) {
        if(seen[element]) {
            intersection.push(element);
            seen[element] = false;
        }
    }

    return intersection;
}

// Example
console.log(arrayIntersection(["a", "b", "x", "z", "d", "d"], ["c", "e", "z", "d", "f"]));
