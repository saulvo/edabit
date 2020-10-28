/**
 * Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.
 */
const compareArray = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false

	arr1.forEach((item, idx) => {
		if (item !== arr2[idx]) return false
	})

	return true
}

function canConcatenate(arr, target) {
	let temp = []

	arr.forEach((item) => {
		temp = [...temp, ...item]
	})

	return compareArray(temp, target)
}

console.log(
	// canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7])// ➞ true

	canConcatenate(
		[
			[2, 1, 3],
			[5, 4, 7, 6],
		],
		[7, 6, 5, 4, 3, 2, 1],
	), // ➞ true

	// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7])// ➞ false

	// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7])// ➞ false
)
