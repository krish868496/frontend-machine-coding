import React, { useState } from "react";
import Cell from "./Cell";
import { generateCombinators } from "../../utils/static";

const SIZE = 3;

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(SIZE * SIZE).fill(null));

  const [isXNext, setIsXNext] = useState(true);
const calculateWinner = () => {
  // Generate all possible winning combinations
  // Example for 3x3:
  // [
  //   [0,1,2],
  //   [3,4,5],
  //   [6,7,8],
  //   [0,3,6],
  //   [1,4,7],
  //   [2,5,8],
  //   [0,4,8],
  //   [2,4,6]
  // ]
  const combinations = generateCombinators(SIZE);

  // Loop through each winning combination
  for (const combination of combinations) {
    // Get the first cell value of the current combination
    //
    // Example:
    // combination = [0,1,2]
    // firstCell = board[0]
    //
    // board:
    // ["X", "X", "X", ...]
    //
    // firstCell = "X"
    const firstCell = board[combination[0]];

    // If first cell is empty,
    // there is no point checking the remaining cells
    //
    // Example:
    // [null, null, null]
    //
    // Skip this combination and move to the next one
    if (!firstCell) continue;

    // Check whether EVERY cell in the current combination
    // matches the first cell
    //
    // Example:
    // combination = [0,1,2]
    // firstCell = "X"
    //
    // Checks:
    // board[0] === "X" ✔
    // board[1] === "X" ✔
    // board[2] === "X" ✔
    //
    // Result = true
    const isWinningLine = combination.every(
      (index) => board[index] === firstCell,
    );

    // If all cells are same,
    // we found a winner
    if (isWinningLine) {
      return firstCell;
    }
  }

  // No winning combination found
  return null;
};

  const winner = calculateWinner();

  const handleClick = (index: number) => {
    if (board[index]) return;

    if (winner) return;

    const newBoard = [...board];

    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);

    setIsXNext((prev) => !prev);
  };

  const handleReset = () => {
    setBoard(Array(SIZE * SIZE).fill(null));

    setIsXNext(true);
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8 p-4">
      <h1 className="text-3xl font-bold text-center">Tic Tac Toe</h1>

      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">
          {winner ? `${winner} Wins 🎉` : `${isXNext ? "X" : "O"} Turn`}
        </p>

        <button
          onClick={handleReset}
          className="px-5 py-2 bg-red-600 text-white rounded-lg cursor-pointer border-red-700"
        >
          Reset
        </button>
      </div>

      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))`,
        }}
      >
        {board.map((cell, index) => (
          <Cell key={index} b={cell} index={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Tictactoe;
