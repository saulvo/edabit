/**
 * You are given an array representing the number of 0s, 1s, 2s, ..., 9s you have. The function will look like:
 * can_build([#0s, #1s, #2s, ..., #9s], [num1, num2, ...])
 * Write a function that returns true if you can build the following numbers using only the digits you have.
 */
const countNumber = (arr, num) => {
	return arr.filter((x) => x === num).length
}

function canBuild(digits, arr) {
   if(Array.isArray(arr) && arr.length === 0) return true
	const nums = arr
		.join('')
		.split('')
		.map((x) => Number.parseInt(x))
	const set = new Set(nums)

	for (let i = 0; i < [...set].length; i++) {
		const num = [...set][i]
		if (countNumber(digits, num) < countNumber(nums, num)) return false
	}

	return true
}