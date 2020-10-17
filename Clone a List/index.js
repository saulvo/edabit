
/**
 * The Code tab has a code which attempts to add a clone of an array to itself.
 * There is no error message, but the results are not as expected. Can you fix the code?
*/
function clone(arr) {
	return [...arr, arr]
}

console.log(clone([]))