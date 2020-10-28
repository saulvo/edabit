/**
 * Create a function that builds a staircase given the height and the type of building block.
*/

const createStair = num => {
   let arr = [];

   while (num > 0) {
      arr.push('_');
      num--;
   }
   return arr;
}

function buildStaircase(height, block) {
   if (height === 0) return [];

   let result = [];

   for (let i = 1; i <= height; i++) {
      let row = new Array(...createStair(height));
      for (let j = 1; j <= i; j++) {
         row[j - 1] = block;
      }
      result.push(row);
   }

   return result;
}

console.log(buildStaircase(4, "#"))
