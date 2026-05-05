// ======================================================
// week-12, Day-84 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array of Strings by Length (Shortest to Longest)
// ------------------------------------------------------

function bubbleStringSort(arr){
  if(!arr || !Array.isArray(arr)){
      return [];
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length - i; j++){
      if(arr[j - 1].length > arr[j].length){
        [arr[j - 1], arr[j]]  = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}

function main(){
  const data = bubbleStringSort(["hi", "javascript", "is", "fun"]);
  console.log(data);
}

main();
 