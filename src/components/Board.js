import React, { useState, useEffect } from "react";
import Square from "./Square";
import { checkWinner } from "../assets/javascripts/custom";
export default function Board() {
  const maxRow = 3;
  const maxCol = 3;
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(0);

  // Tao mang 2 chieu tuong duong voi ban co
  const [squares2D, setSquares2D] = useState([]);
  useEffect(() => {
    const squares = document.querySelectorAll(".chess-board__square");
    let squaresIndex = 0;
    for (let i = 0; i < maxRow; i++) {
      const temp = [];
      for (let j = 0; j < maxCol; j++) {
        temp.push(squares[squaresIndex++]);
      }
      setSquares2D((oldSquare) => [...oldSquare, temp]);
    }
  }, []);

  // Reset cac State
  const resetState = () => {
    setCurrentPlayer(1);
    setCount(0);
    setWinner(0);
  };

  // Reset Game
  const resetGame = () => {
    const squares = document.querySelectorAll(".chess-board__square");
    squares.forEach((square) => {
      if (square.classList.contains("chess-board__square--x"))
        square.classList.remove("chess-board__square--x");
      else square.classList.remove("chess-board__square--o");
    });
  };

  // Xử lí có người chiến thắng
  useEffect(() => {
    if (winner === 1) {
      alert("Player 1 đã chiến thắng");
      resetGame();
      resetState();
    } else {
      if (winner === 2) alert("Player 2 đã chiến thắng");
      resetGame();
      resetState();
    }

    return;
  }, [winner]);

  // Xử lí hết game
  useEffect(() => {
    if (count === 9) {
      alert("Trò chơi đã kết thúc");
      resetGame();
      resetState();
      return;
    }
  }, [count]);

  const clickHandle = (e) => {
    e.preventDefault();

    const clickSquare = e.target;

    //Khong them class neu div cha bi bam
    // if (clickSquare.classList.contains("chess-board")) return;

    //Khong cho nguoi dung bam neu o do da duoc danh
    if (
      clickSquare.classList.contains("chess-board__square--x") ||
      clickSquare.classList.contains("chess-board__square--o")
    )
      return;

    //Doi player
    if (currentPlayer === 1) {
      clickSquare.classList.add("chess-board__square--x");
      const hasWinner = checkWinner(squares2D, clickSquare, 3, 3);
      if (hasWinner) setWinner(1);
      setCurrentPlayer(2);
    } else if (currentPlayer === 2) {
      clickSquare.classList.add("chess-board__square--o");
      const hasWinner = checkWinner(squares2D, clickSquare, 3, 3);
      if (hasWinner) setWinner(2);
      setCurrentPlayer(1);
    }
    let currentCount = count;
    currentCount++;
    setCount(currentCount);
  };

  // const clickHandle = (e) => {
  //   console.log(e);
  //   let stage = currentPlayer;
  //   setCurrentPlayer(++stage);
  // };

  return (
    <>
      <div className="chess-board">
        <Square clickHandle={clickHandle} />
      </div>
    </>
  );
}
