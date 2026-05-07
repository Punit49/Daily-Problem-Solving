// ======================================================
// week-12, Day-85 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array in Ascending Order Using Selection Sort
// ------------------------------------------------------

function selectionSortAsc(arr) {
  if(!arr || !Array.isArray(arr)){
    return [];
  }

  let min;

  for(let i = 0; i < arr.length - 1; i++){
    min = i;

    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    
    if(min !== i){
        [arr[i], arr[min]] = [arr[min], arr[i]]; 
    } 
  }
  
  return arr;
}

function main(){
  const sortedArr = selectionSortAsc([7, 2, 9, -4, 1]);
  console.log(sortedArr);
}

main();
 