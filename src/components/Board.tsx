import React from "react";
import { calculateWinner } from "../utils.ts";
import Square from "./Square.tsx";

export default function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    function handleSquareClick(i) {
        if (calculateWinner(squares) || squares[i]) {
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

    return <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square content={squares[0]} onSquareClick={() => handleSquareClick(0)}/>
            <Square content={squares[1]} onSquareClick={() => handleSquareClick(1)}/>
            <Square content={squares[2]} onSquareClick={() => handleSquareClick(2)}/>
        </div>
        <div className="board-row">
            <Square content={squares[3]} onSquareClick={() => handleSquareClick(3)}/>
            <Square content={squares[4]} onSquareClick={() => handleSquareClick(4)}/>
            <Square content={squares[5]} onSquareClick={() => handleSquareClick(5)}/>
        </div>
        <div className="board-row">
            <Square content={squares[6]} onSquareClick={() => handleSquareClick(6)}/>
            <Square content={squares[7]} onSquareClick={() => handleSquareClick(7)}/>
            <Square content={squares[8]} onSquareClick={() => handleSquareClick(8)}/>
        </div>
    </>
}