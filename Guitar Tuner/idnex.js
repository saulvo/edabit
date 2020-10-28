/**
 * Create a function that takes guitar strings as an array of frequencies (numbers) and returns the display of a tuner as an array.
 * You can find the frequencies of the strings on the Wikipedia page (check the Resources tab).
 *
 * The guitar strings are played 1st to 6th, High E to Low E.
 * If the guitar string matches, return "OK" for that guitar string.
 * If it's too low, return ">•" for 1 or 2 percent off (the arrow means, tune up).
 * Return ">>•" if it's way off. For more than 3 percent.
 * If it's too high, return "•<" for 1 or 2 percent, and "•<<" for more, (tune down).
 * Check the rounded percentages.
 * If 0 is given, the guitar string isn't played, return " - ".
*/


function tune(arr) {
   const frq = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];

   return arr.map((x, i) => {
      if (x === 0) return ' - ';

      const p = Math.round(x * 100 / frq[i]) - 100;
      console.log(x * 100 / frq[i])

      if (p >= 3) return '•<<';
      if (p >= 1) return '•<';
      if (p <= -3) return '>>•';
      if (p <= -1) return '>•';

      return 'OK';
   });
}

console.log(tune([331, 248, 195, 147, 110, 84]))
// ['OK', 'OK', '>•', 'OK', 'OK', '•<' ])