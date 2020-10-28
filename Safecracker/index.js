/**
 * Traditional safes use a three-wheel locking mechanism, with the safe combination entered using a dial on the door of the safe.
 * The dial is marked with clockwise increments between 0 and 99. The three-number combination is entered by first dialling to the right (clockwise),
 * then to the left (anti-clockwise), and then to the right (clockwise) again. Combination numbers are read from the top of the dial:
 * Given the starting (top) position of the dial and the increments used for each turn of the dial,
 * return an array containing the combination of the safe.
 *
 */

// https://edabit.com/challenge/ggDcLksKsBd8xAiFd

function safecracker(start, increments) {
	let temp = start

	return increments.map((num, idx) => {
		temp = idx % 2 === 0 ? temp - num : temp + num

		return temp < 0 ? 100 + temp : Math.trunc(temp % 100)
	})
}

console.log(
	safecracker(96, [54, 48, 77]), // ➞ [42, 90, 13]
)
