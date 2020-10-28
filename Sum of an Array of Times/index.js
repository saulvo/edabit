/**
 * Create a function that takes an array of strings representing times ('hours:minutes:seconds')
 * and returns their sum as an array of integers ([hours, minutes, seconds]).
 *
 */

function timeSum(times) {
	if (!Array.isArray(times)) return [0, 0, 0]

	return times.reduce(
		(sum, t) => {
			console.log(sum[0])
			let h = sum[0] + Number.parseInt(t.split(':')[0])
			let m = sum[1] + Number.parseInt(t.split(':')[1])
			let s = sum[2] + Number.parseInt(t.split(':')[2])

			if (m > 60) {
				h += Math.trunc(m / 60)
				m = Math.trunc(m % 60)
			}

			if (s > 60) {
				m += Math.trunc(s / 60)
				s = Math.trunc(s % 60)
			}

			return [h, m, s]
		},
		[0, 0, 0],
	)
}

console.log(
	timeSum(['5:39:42', '10:02:08', '8:26:33']), // ➞ [24, 8, 23]
)
