/**
 * You will be given an array of string "east" formatted differently every time.
 * Create a function that returns "west" wherever there is "east". Format the string according to the input.
 * Check the examples below to better understand the question.
**/


const toWest = str => {
   const arr = str.toLowerCase().split('');

   const west = arr.map(char => {
      if (char === 'e') return 'w';
      if (char === 'a') return 'e';

      return char;
   })

   let result = '';

   str.split('').forEach((char, idx) => {
      let temp = west[idx];
      if (char.toUpperCase() === char) {
         temp = temp.toUpperCase();
      }
      result += temp;
   });

   return result;
}

function direction(arr) {
   if (!Array.isArray(arr) || arr.length === 0) return [];

   return arr.map(item => {
      return toWest(item);
   });
}

console.log(
   direction(["east EAST", "e a s t", "E A S T"])
)