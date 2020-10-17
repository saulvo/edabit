/**
 * Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.
*/
function canConcatenate(arr, target) {
   const flatArr = arr.flat();

   flatArr.forEach((num, idx) => {

      if(num !== target[idx]) {
         return false;
         console.log(num, target[idx]);
      }
   });

   return true;
}

console.log(canConcatenate([[2, 1, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7])) // ➞ true