/**
 * Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X",
 *  "O", or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.
*/

const CELL_VALUE = {
   CROSS: 'X',
   CIRCLE: 'O',
}

function ticTacToe(board) {
   console.log()
   const cellValues = board.flat()

   const checkSets = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
   ];

   const winPosition = checkSets.find(set => {
      const first = cellValues[set[0]];
      const second = cellValues[set[1]];
      const third = cellValues[set[2]];

      return first === second && first === third && first !== CELL_VALUE.EMPTY;
   });

   if (Array.isArray(winPosition)) {
      const isXWin = cellValues[winPosition[0]] === CELL_VALUE.CROSS;
      return isXWin ? CELL_VALUE.CROSS : CELL_VALUE.CIRCLE;
   }

   return 'Draw';
}