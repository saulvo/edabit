/**
 * Create a function that takes two integers, num and n, and returns an integer
 * which is divisible by n and is the closest to num. If there are two numbers equidistant
 * from num and divisible by n, select the larger one.
*/

function roundNumber(num, n) {
   let temp = 0;
   let i = 0;
   let arr1 = [];
   while (temp < num) {
      temp = n * i;
      arr1.push(temp);
      i++;
   }

   const arr2 = arr1.splice(arr1.length - 2);

   return (num - arr2[0] < arr2[1] - num) ? arr2[0] : arr2[1];
}