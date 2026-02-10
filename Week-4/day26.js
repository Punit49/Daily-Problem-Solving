// ======================================================
// week-4, Day-26 of daily problem solving
// ======================================================


// ------------------------------------------------------
// Q. Write a function to Check if a String is a Palindrome.
// ------------------------------------------------------
function isPalindrome(str){
    if(str.length === 0) return false;
    str = str.toLowerCase();
    let start = 0;
    let end = str.length - 1;

    while(start < end) {
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

// Example
console.log(isPalindrome("Madam"));