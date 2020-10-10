function commonElements(arr1, arr2) {
   if (arr1.length === 0 || arr2.length === 0) return [];

   const arr = arr1.filter(number => {
      return arr2.includes(number);
   });

   const set = new Set(arr);

   return [...set];
}

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))// ➞ [3]