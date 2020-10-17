// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
   const arr = str.split('');
   let i = 0;
   
   for (const char of arr) {
      arr.splice(i, 1, char+char);
      i++;
   }

   return arr.join('');
}

console.log(doubleChar("String")) // ➞ "SSttrriinngg"