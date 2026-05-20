// ======================================================
// week-14, Day-95 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to reverse an string using two pointers algorithm.
// ------------------------------------------------------

function twoPointersReverse(str) {
    if(!str || str.length === 0){
        return null;
    }

    let newStr = str.split("");
    let start = 0;
    let end = newStr.length - 1;

    while(start < end){
        [newStr[start], newStr[end]] = [newStr[end], newStr[start]]
        start++;
        end--;
    }

    return newStr.join("");
}

function main(){
  const str = twoPointersReverse("Punit");
  console.log(str);
}

main();
 