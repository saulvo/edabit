// Keeping Count

const countChar = (char, str) => {
   const arr = str.split('');
   return arr.filter(item => item === char).length;
}

function digitCount(num) {
   if (Math.trunc(num / 10) === 0) return 1;

   let result = 0;
   const str = num.toString();

   for (const char of str) {
      result = result * 10 + countChar(char, str);
   }


   return result;
}

console.log(digitCount(136116))