import React from "react";
import Square from "./Square";
import CalculateWinner from "./CalculateWinner";
import Link from "next/link";

// Array(9).fill(null) creates an array with nine elements and sets each of them to null.
// The useState() call around it declares a squares state variable that’s initially set to that array.
// Each entry in the array corresponds to the value of a square.
// When you fill the board in later, the squares array will look like this:
// ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

// The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method.
// Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
// Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components
// that use the squares state (Board) as well as its child components (the Square components that make up the board).

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winner = CalculateWinner(squares);
  let status;
  let statusClass = "status";
  if (winner) {
    status = "Winner: " + winner;
    if (winner === "X") {
      statusClass += " x-color";
    } else {
      statusClass += " o-color";
    }
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
    statusClass += xIsNext ? " x-color" : " o-color";
  }

  return (
    <>
      <>
        <div className={statusClass}>{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div className="introLink">
          <Link href="/" className="introductionLink">
            Retour à l'introduction
          </Link>
        </div>
      </>
    </>
  );
}

// JavaScript supports closures which means an inner function (e.g. handleClick) has access to variables and functions
//  defined in a outer function (e.g. Board). The handleClick function can read the squares state and call the
//  setSquares method because they are both defined inside of the Board function.
