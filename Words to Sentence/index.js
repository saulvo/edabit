/**
 * Create a function that turns an array of words into a comma separated list,
 * where the last word is separated by the word "and".
 */

function wordsToSentence(words) {
   if (!Array.isArray(words) || words.length === 0) return ''
   if (words.length === 1) return words[0];

   const temp = words.filter((x, idx) => x !== '');

   return temp.length <= 2 ? temp.join(' and ') : `${temp.slice(0, -1).join(', ')} and ${temp[temp.length-1]}`;
}

console.log(
   wordsToSentence(["Hello", "Bye", "See you soon"])
)