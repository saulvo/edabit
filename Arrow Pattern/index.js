/**
 * Create a function that creates a pattern as a 2D array for a given number.
 * Notes:
 * - Function argument will always be a number greater than 0.
*/

const setArrow = n => {
   if (n === 0) return;
   let str = '';

   while (n > 0) {
      str += '>'
      n--;
   }
   return str;
}

function arrow(n) {
   let arr = [];

   for (let i = 1; i <= n; i++) {
      arr.push(setArrow(i));
   }

   let temp = [...arr];
   if (temp.length % 2 !== 0) temp.pop();

   return [...arr, ...temp.reverse()];
}

console.log(arrow(4)) //➞ [">", ">>", ">>>", ">>", ">"]