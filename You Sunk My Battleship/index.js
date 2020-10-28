/**
 * Remember the game Battleship? Ships are floating in a matrix. You have to fire torpedos at their suspected coordinates, to try and hit them.
 * Create a function that takes an array of arrays (matrix) and a coordinate as a string.
 *  If the coordinate contains only water " . ", return "splash" and if the coordinate contains a ship " * ", return "BOOM".
 */

function fire(matrix, coordinates) {
	const char = ['A', 'B', 'C', 'D', 'E']
	const num = [1, 2, 3, 4, 5]
	const [x, y] = [char.indexOf(coordinates[0]), num.indexOf(Number.parseInt(coordinates[1]))]

	return matrix[x][y] === '*' ? 'BOOM' : 'splash'
}

const matrix = [
	['.', '.', '.', '*', '*'],
	['.', '*', '.', '.', '.'],
	['.', '*', '.', '.', '.'],
	['.', '*', '.', '.', '.'],
	['.', '.', '*', '*', '.'],
]

const coordinates = 'D2'

console.log(fire(matrix, coordinates))
