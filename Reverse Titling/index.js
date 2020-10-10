/**
 * Your stereotypical titleCase() function in JavaScript might capitalises the first letter of every word in a given sentence,
 * leaving all the other letters as lowercase.
 * The goal of this challenge, however, is to create a reverseTitle() function,
 * which achieves the complete opposite! Make the first letter of every word lowercase,
 *  and the rest uppercase!
*/

const transformWord = str => {
   const arr = str.split('');
   return arr.map((char, idx) => {
      return (idx !== 0) ? char.toUpperCase() : char.toLowerCase();
   }).join('');
}

function reverseTitle(s) {
   const arr = s.split(' ');
   return arr.map(word => transformWord(word)).join(' ');
}

console.log(reverseTitle("BOLD AND BRASH!"));