// ======================================================
// week-12, Day-86 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array in Descending Order
// ------------------------------------------------------

function myFunction(arr) {
  if(!arr || !Array.isArray(arr)) {
    return [];
  } 

  let max;
  for(let i = 0; i < arr.length - 1; i++){
    max = i;

    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] > arr[max]){
        max = j;
      }
    }

    if(i !== max){
      [arr[i], arr[max]] = [arr[max], arr[i]]
    }
  }
  return arr;
}

function main(){
  const sortedArr = myFunction([7, -2, 9, 40, 1]);
  console.log(sortedArr); 
}

main();