/**
 * Write a function that will return the longest word in a sentence. In cases where more than one word is found, return the first one.
*/

function findLongest(sentence) {
   const arr = sentence.split(/[', !.,]/);
   
   let longestStr = '';

   arr.forEach(str => {
      if(str.length > longestStr.length) {
         longestStr = str;
      }
   });

   return longestStr.toLocaleLowerCase();
}

console.log(findLongest("The pretty daughter's toy, a doll, is as pretty as her.")) // ➞ "darkness"

// let [strVector, resVector] = [[
//    "Hello darkness my old friend.", "Yourself is your soul's captain and fate's master.",
//    "The pretty daughter's toy, a doll, is as pretty as her.",
//    "A thing of beauty is a joy forever.", "Forgetfulness is by all means powerless!",
//    "Strengths is the longest and most commonly used word that contains only a single vowel."
//  ], [
//    "darkness", "yourself", "daughter", "forever", "forgetfulness", "strengths"
//  ]]
//  for (let i in strVector) Test.assertSimilar(findLongest(strVector[i]), resVector[i])