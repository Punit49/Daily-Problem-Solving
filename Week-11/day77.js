// ======================================================
// week-11, Day-77 of daily problem solving
// ======================================================

// ------------------------------------------------------
// Q. Write a function to Sort an Array of Objects by Age. (Ascending) 
// ------------------------------------------------------
function sortObjectByAge(obj){ 
   for(let i = 0; i < obj.length; i++){
    for(let j = 1; j < obj.length - i; j++){
        if(obj[j - 1].age > obj[j].age){
           [obj[j - 1], obj[j]] = [obj[j], obj[j - 1]];
        }
    }
   }
   return obj;
}    

// Example -
console.log(sortObjectByAge([
    { name: "A", age: 25 },
    { name: "B", age: 20 },
    { name: "C", age: 30 },
]));
 