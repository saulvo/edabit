const recompose = string => {
  return string
    .match(/[aeiou]+|[^aeiou]+/gi)
    .map(v => [...v].reverse().join(""))
    .join("").match(/[A-Z][a-z]+/g).join(" ");
}

console.log(recompose("KiKdaola"))// ➞ "Kid Koala"