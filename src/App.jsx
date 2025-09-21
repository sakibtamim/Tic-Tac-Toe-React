import React, { useState } from "react";

const App = () => {
  const [winner, setWinner] = useState(null);
  console.log(winner);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  let handleClick = (value) => {
    if (board[value] || winner) return;
    const newBoard = [...board];
    newBoard[value] = turn;
    setBoard(newBoard);

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
    for (let [a, b, c] of lines) {
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
      } else if (!newBoard.includes(null)) {
        setWinner("Draw");
      }
    }

    setTurn(turn === "X" ? "O" : "X");
  };

  let handleReset = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
  };
  return (
    <div className="w-[600px] h-[600px] mx-auto mt-[400px]">
      <div className="pb-[60px]">
        <p className="text-[80px]">
          {winner === "Draw"
            ? "It's a Draw!"
            : winner
            ? `Winner: ${winner}`
            : `Player: ${turn === "X" ? "1" : "2"}`}
        </p>
      </div>
      <div className="">
        <div className="flex">
          <div
            onClick={() => handleClick(0)}
            className="w-[200px] h-[200px]  border-l-5 border-t-5 border-black"
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[0]}
            </p>
          </div>
          <div
            onClick={() => handleClick(1)}
            className="w-[200px] h-[200px] border-l-5 border-t-5 border-r-5    border-black "
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[1]}
            </p>
          </div>
          <div
            onClick={() => handleClick(2)}
            className="w-[200px] h-[200px]  border-r-5 border-t-5 border-black "
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[2]}
            </p>
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleClick(3)}
            className="w-[200px] h-[200px]  border-l-5 border-t-5 border-black"
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[3]}
            </p>
          </div>
          <div
            onClick={() => handleClick(4)}
            className="w-[200px] h-[200px] border-l-5 border-t-5 border-r-5 border-black "
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[4]}
            </p>
          </div>
          <div
            onClick={() => handleClick(5)}
            className="w-[200px] h-[200px]  border-r-5 border-t-5 border-black "
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[5]}
            </p>
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleClick(6)}
            className="w-[200px] h-[200px] border-b-5 border-l-5 border-t-5 border-black"
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[6]}
            </p>
          </div>
          <div
            onClick={() => handleClick(7)}
            className="w-[200px] h-[200px] border-5 border-black "
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[7]}
            </p>
          </div>
          <div
            onClick={() => handleClick(8)}
            className="w-[200px] h-[200px] border-b-5 border-r-5 border-t-5 border-black "
          >
            <p className="text-[150px] text-center leading-[200px]">
              {board[8]}
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={handleReset}
        className="mt-[60px] text-[24px] py-[6px] px-[12px] bg-black text-white cursor-pointer inline-block"
      >
        Reset
      </div>
    </div>
  );
};

export default App;
