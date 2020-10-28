/**
 * There are many different styles of music and many albums exhibit multiple styles.
 * Create a function that takes an array of musical styles from albums and returns how many styles are unique.
 */

function uniqueStyles(albums) {
   const set = new Set(albums.join().split(','));
   return [...set].length;
}

console.log(
	uniqueStyles([
		'Dub,Dancehall',
		'Industrial,Heavy Metal',
		'Techno,Dubstep',
		'Synth-pop,Euro-Disco',
		'Industrial,Techno,Minimal',
	]), // ➞ 9
)