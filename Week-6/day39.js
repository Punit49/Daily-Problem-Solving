// ======================================================
// week-6, Day-39 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Write a function that takes an object and a key.
// If the key exists and its value is not null or undefined, return the value.
// Otherwise, return "Not Available"
// ------------------------------------------------------
function isValueExists(obj, key){

    if(obj[key] !== undefined && obj[key] !== null){
        return obj[key];
    } else {
        return "Not Available"
    }
}

// Example
console.log(isValueExists({ name: "Punit", age: 22, rollNo: null }, "rollNo"));

// ------------------------------------------------------
// Write a function that takes two arrays and returns a new array where:
// ------------------------------------------------------
function mergeArrays(arr1, arr2){
    return [...new Set([...arr1, ...arr2])];
}

// Example
console.log(mergeArrays(["a", "b"], ["b", "c", "a"]));