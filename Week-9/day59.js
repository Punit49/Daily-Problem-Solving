// ======================================================
// week-9, Day-59 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Count Even and Odd Numbers in an Array
// ------------------------------------------------------
function countEvenAndOdd(arr){
    let evenCount = 0;
    let oddCount = 0;

    for (const element of arr) {
        if(Number(element)){
            if(element % 2 === 0){
                evenCount++;
            } else if(element % 2 !== 0){
                oddCount++;
            }
        }
    }

    return { evenCount, oddCount };
}

// Example -
console.log(countEvenAndOdd([2, 5, 6, 8, 9, 10]));
