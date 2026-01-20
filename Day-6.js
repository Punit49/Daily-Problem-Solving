// ===============================================
// 📌 Problem: Count Occurrences in an Array
// ===============================================
// Given an array of numbers, count how many times
// a specific number appears in the array.
//

function numCount(arr, n) {
  let count = 0;

  for (const ele of arr) {
    if (ele === n) {
      count++;
    }
  }

  return count;
}

// Example:
console.log(numCount(data, target)); // 3