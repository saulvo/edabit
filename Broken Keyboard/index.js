// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

function findBrokenKeys(str1, str2) {
   let arr = [];
   let index = 0;

   for (const char of str1) {
      if (char !== str2[index]) {
         arr.push(char);
      }
      index++;
   }
   const set = new Set(arr)
   return [...set];
}

console.log(findBrokenKeys("starry night", "starrq light")) //➞ ["p"]
