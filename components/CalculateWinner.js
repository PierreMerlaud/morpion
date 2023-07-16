export default function CalculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/* In JavaScript, the line uses destructuring assignment to assign the values of the i-th element of the lines array to variables a, b, and c.
  The lines array contains subarrays, each representing a winning combination in tic-tac-toe. 
  Each subarray has three elements, which correspond to the indices of the tic-tac-toe board that need to be 
  occupied by the same player in order to win.
  
  For example, let's consider the first element of the lines array: [0, 1, 2]. This indicates that in order to win, 
  the player must occupy the board positions with indices 0, 1, and 2.
  
  When we write const [a, b, c] = lines[i];, we are saying that we want to assign the values of the i-th element of lines to variables 
  a, b, and c respectively. This means that a will be assigned the value of the first element in the lines[i] array, 
  b will be assigned the value of the second element, and c will be assigned the value of the third element.
  
  So, if lines[i] is [0, 1, 2], after executing const [a, b, c] = lines[i];, a will be 0, b will be 1, and c will be 2. 
  
  The if statement checks if the element at index a in the squares array exists and is equal to the elements at indices b and c. 
  In other words, it checks if the same player occupies all three positions specified by the current line.
  */
