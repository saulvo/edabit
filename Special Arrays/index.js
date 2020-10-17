/**
 * An array is special if every even index contains an even number and every odd index contains an odd number.
 * Create a function that returns true if an array is special, and false otherwise.
*/

const isEven = num => num % 2 === 0;
function isSpecialArray(arr) {
   return arr.filter((num, idx) => {
      return (isEven(num) && isEven(idx)) || (!isEven(num) && !isEven(idx));
   }).length === arr.length;

}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]))// ➞ true