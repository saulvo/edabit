// Create a function that takes an array and returns a new array containing only prime numbers.

const isPrime = n => {
   if (n < 2) return false;
   for (i = 2; i < n - 1; i++) {
      if (n % i === 0) {
         return false;
      }
   }

   return true;
}

function filterPrimes(num) {
   return num.filter(n => isPrime(n));
}

console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27])) // ➞ [7, 3, 11]