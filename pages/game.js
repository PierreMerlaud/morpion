import React, { useState } from "react";
import BackgroundWinner from "../components/BackgroundWinner";
import CalculateWinner from "../components/CalculateWinner";
import Board from "../components/Board";
import Head from "next/head";
import Confettis from "../components/Confettis";
import Layout from "../components/LayoutTransition";

/* If you mutated the squares array, implementing time travel would be very difficult.

However, you used slice() to create a new copy of the squares array after every move, and treated it as immutable. 
This will allow you to store every past version of the squares array, and navigate between the turns that have already happened.

You’ll store the past squares arrays in another array called history, which you’ll store as a new state variable. 
The history array represents all board states, from the first to the last move, and has a shape like this:

[
  // Before first move
  [null, null, null, null, null, null, null, null, null],
  // After first move
  [null, null, null, null, 'X', null, null, null, null],
  // After second move
  [null, null, null, null, 'X', null, null, null, 'O'],
  // ...
]

If you “go back in time” and then make a new move from that point, you only want to keep the history up to that point. 
Instead of adding nextSquares after all items (... spread syntax) in history, you’ll add it 
after all items in history.slice(0, currentMove + 1) so that you’re only keeping that portion of the old history.
Each time a move is made, you need to update currentMove to point to the latest history entry.

*/

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    console.log("history", history);
  }

  const winner = CalculateWinner(currentSquares);

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    let CSS;
    let buttonBase = "buttonBase";
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    if (move === currentMove) {
      description = "You are at move #" + move;
    }

    if (move === 0) {
      CSS = buttonBase += " buttonStart";
    } else if (move % 2 === 0) {
      CSS = buttonBase += " buttonsO";
    } else {
      CSS = buttonBase += " buttonsX";
    }

    return (
      <>
        <li key={move}>
          {move === currentMove ? (
            <div className="currentMove">
              <strong>{description}</strong>
            </div>
          ) : (
            <button className={CSS} onClick={() => jumpTo(move)}>
              {description}
            </button>
          )}
        </li>
      </>
    );
  });

  return (
    <>
      <Head>
        <title>Morpion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* <div className="introLink">
          <Link href="/" className="introductionLink">
            Retour à l'introduction
          </Link>
        </div> */}
        <div className="game">
          {winner ? (
            <>
              <BackgroundWinner value={winner} />
              <div className="victoryDiv">
                <Confettis value={winner} />
                <button
                  className="buttonBase buttonStart"
                  onClick={() => jumpTo(0)}
                >
                  Go to game start
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="game-board">
                <Board
                  xIsNext={xIsNext}
                  squares={currentSquares}
                  onPlay={handlePlay}
                />
              </div>

              <div className="game-info">
                <ol>{moves}</ol>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
