/**
 * Create a function that takes an array of numbers and returns the second largest number.
*/
function secondLargest(arr) {
	return arr.sort((a,b) => a - b)[arr.length - 2];
}

console.log(secondLargest([25, 143, 89, 13, 105])) // ---> 105