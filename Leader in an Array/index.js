// Leader in an Array
// Create a function that finds all elements in the given array, such that each element is greater than all elements to the right of it.

function leader(arr) {
   return arr.filter((num, idx, arr) => {
      return arr.slice(idx + 1).filter(x => x > num).length === 0;
   });
}

console.log(leader([2, 3, 20, 15, 8, 25, 3]))