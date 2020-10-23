function totalVolume(...boxes) {
   return [...boxes].reduce((a, b) => {
      return a + (b.reduce((c, d) => {
         return c * d;
      }, 1))
   }, 0)
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));