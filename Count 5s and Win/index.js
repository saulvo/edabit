/**
 * Arun is obsessed with primes, especially five. He considers a number to be luckiest if it has the highest number of five in it.
 * If two numbers have the same frequency of five, Arun considers the larger of them to be luckiest, and if there is no five in any number,
 * the first given number is considered luckiest. Help him choose the luckiest number.
*/
const hasDuplicates = arr => {
   var counts = [];

   for (var i = 0; i <= arr.length; i++) {
      if (counts[arr[i]] === undefined) {
         counts[arr[i]] = 1;
      } else {
         return true;
      }
   }
   return false;
}

const hasNumberFive = num => {
   let temp = Math.abs(num);

   while (temp > 0) {
      if (Math.trunc(temp % 10) === 5) {
         return true;
      }
      temp = Math.trunc(temp / 10);
   }

   return false;
}

const countNumberFive = num => {
   let temp = Math.abs(num);

   let result = 0;

   while (temp > 0) {
      if (Math.trunc(temp % 10) === 5) {
         result++;
      }
      temp = Math.trunc(temp / 10);
   }

   return result;
}

const findIndexMaxLucky = (arr, numberFives) => {
   let max = 0;
   let luckyNum =  numberFives[0];

   arr.forEach((num, idx) => {
      if (num > max) {
         max = num;
         luckyNum = numberFives[idx];
      } else if ((num === max) && (numberFives[idx] > luckyNum)) {
         luckyNum = numberFives[idx];
      }
   });

   return luckyNum;
}

function getLuckiest(arr) {
   if (!Array.isArray(arr) || arr.length === 0) return null;

   const numberFives = arr.filter(num => {
      return hasNumberFive(num);
   });

   if (numberFives.length === 0) return arr[0];

   const luckyLevel = numberFives.map(num => {
      return countNumberFive(num);
   });

   return findIndexMaxLucky(luckyLevel, numberFives);

}

console.log(getLuckiest([-55, -155, 45, 31, 67]));