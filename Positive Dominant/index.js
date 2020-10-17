/**
 * An array is positive dominant if it contains strictly more unique positive values than unique negative values.
 * Write a function that returns true if an array is positive dominant.
*/

const countNumber = (arr, n) => {
   const set = new Set(arr);

   if (n > 0) {
      return [...set].filter(number => number > 0).length;
   } else {
      return [...set].filter(number => number < 0).length;
   }
}

function isPositiveDominant(a) {
   return countNumber(a, 1) > countNumber(a, -1);
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]))