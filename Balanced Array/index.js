/**
 * Given an array of unknown length, but with an even amount of elements (numbers),
 * copy the half with the highest sum of numbers to the other half of the array.
 * If the sum of the first half equals the sum of the second half, return the original array.
*/
const sumArray = arr => {
   return arr.reduce((a, b) => a + b)
}
function balanced(arr) {
   const arr1 = arr.slice(0, arr.length / 2);
   const arr2 = arr.slice(-arr.length / 2);

   if(sumArray(arr1) === sumArray(arr2)) return arr;
   
   return (sumArray(arr1) > sumArray(arr2))
      ? [...arr1, ...arr1]
      : [...arr2, ...arr2];
}

console.log(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6])) // ➞ [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]