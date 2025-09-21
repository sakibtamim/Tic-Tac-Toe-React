import React, { useState } from "react";

const App = () => {
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
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
        setWinningLine([a, b, c]);
        return;
      }
    }
    if (!newBoard.includes(null)) {
      setWinner("Draw");
      setWinningLine([]);
      return;
    }

    setTurn(turn === "X" ? "O" : "X");
  };

  let handleReset = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
    setWinningLine([]);
  };

  const getLineStyle = () => {
    if (winningLine.length !== 3) return {};
    const [a, b, c] = winningLine;

    // Horizontal
    if (a === 0 && b === 1 && c === 2)
      return { top: "290px", left: "5px", width: "98%", height: "6px" };
    if (a === 3 && b === 4 && c === 5)
      return { top: "490px", left: "5px", width: "98%", height: "6px" };
    if (a === 6 && b === 7 && c === 8)
      return { top: "690px", left: "5px", width: "98%", height: "6px" };

    // Vertical
    if (a === 0 && b === 3 && c === 6)
      return { top: "185px", left: "100px", width: "6px", height: "98%" };
    if (a === 1 && b === 4 && c === 7)
      return { top: "185px", left: "300px", width: "6px", height: "98%" };
    if (a === 2 && b === 5 && c === 8)
      return { top: "185px", left: "500px", width: "6px", height: "98%" };

    // Diagonal
    if (a === 0 && b === 4 && c === 8)
      return {
        top: "280px",
        right: "500px",
        width: "6px",
        height: "100%",
        transform: "rotate(-45deg)",
        transformOrigin: "top right",
      };
    if (a === 2 && b === 4 && c === 6)
      return {
        top: "280px",
        left: "500px",
        width: "6px",
        height: "100%",
        transform: "rotate(45deg)",
        transformOrigin: "top left",
      };

    return {};
  };

  return (
    <div className="lg:w-[600px] w-[450px] lg:h-[600px] h-[450px] mx-auto lg:mt-[400px] mt-[50px] relative">
      <div className="lg:pb-[60px] pb-[40px]">
        <p className="lg:text-[80px] text-[50px]">
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
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-primary  lg:border-l-5 border-l-3 lg:border-t-5 border-t-3 border-white"
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[0] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[0]}
            </p>
          </div>
          <div
            onClick={() => handleClick(1)}
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-seconday lg:border-l-5 border-l-3 lg:border-t-5 border-t-3 lg:border-r-5 border-r-3    border-white "
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[1] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[1]}
            </p>
          </div>
          <div
            onClick={() => handleClick(2)}
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-primary  lg:border-r-5 border-r-3 lg:border-t-5 border-t-3 border-white "
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[2] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[2]}
            </p>
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleClick(3)}
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-seconday  lg:border-l-5 border-l-3 lg:border-t-5 border-t-3 border-white"
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[3] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[3]}
            </p>
          </div>
          <div
            onClick={() => handleClick(4)}
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-primary lg:border-l-5 border-l-3 lg:border-t-5 border-t-3 lg:border-r-5 border-r-3 border-white "
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[4] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[4]}
            </p>
          </div>
          <div
            onClick={() => handleClick(5)}
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-seconday  lg:border-r-5 border-r-3 lg:border-t-5 border-t-3 border-white "
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[5] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[5]}
            </p>
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleClick(6)}
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-primary lg:border-b-5 border-b-3 lg:border-l-5 border-l-3 lg:border-t-5 border-t-3 border-white"
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[6] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[6]}
            </p>
          </div>
          <div
            onClick={() => handleClick(7)}
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-seconday border-5 border-white "
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[7] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[7]}
            </p>
          </div>
          <div
            onClick={() => handleClick(8)}
            className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-primary lg:border-b-5 border-b-3 lg:border-r-5 border-r-3 lg:border-t-5 border-t-3 border-white "
          >
            <p
              className={`lg:text-[150px] text-[100px] text-center lg:leading-[200px] leading-[150px] ${
                board[8] === "X" ? "text-x" : "text-o"
              }`}
            >
              {board[8]}
            </p>
          </div>
        </div>
      </div>
      {winningLine.length === 3 && (
        <div
          className="absolute bg-winner z-10 lg:block hidden"
          style={getLineStyle()}
        ></div>
      )}
      <div
        onClick={handleReset}
        className="mt-[60px] lg:text-[24px] text-[16px] py-[6px] px-[12px] bg-black text-white cursor-pointer inline-block"
      >
        Reset
      </div>
    </div>
  );
};

export default App;
