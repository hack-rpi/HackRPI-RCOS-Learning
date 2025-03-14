import { useState } from 'react'; // Built in react function to keep track of board state

function Square({ value, onSquareClick }) {
  return (
  <button className="square" onClick = {onSquareClick}>
    {value}
  </button>
  )
}

// pass each valu to each array index
// the arrow function is a short way to declare functions
// when the square is clicked, the function after the arrow is run
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // create static variable that defaults to array of 9 nulls
  const [xIsNext, setXIsNext] = useState(true); // keep track of who is playiing
  function handleClick(i){ // this function uupdates the squares array
    if(squares[i] || calculateWinner(squares)){ // return if the spot is already taken to prevent overwriting
      return;
    }
    const nextSquares = squares.slice(); // stores a copy of the squares array
    if(xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
   setSquares(nextSquares);
   setXIsNext(!xIsNext);
  
  }
  
  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = "Winner: " + winner;
  }else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="board-row"> 
        <Square value={squares[0]} onSquareClick = {() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick = {() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick = {() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick = {() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick = {() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick = {() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick = {() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick = {() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick = {() => handleClick(8)} />
      </div>
    </>
  );
}
function calculateWinner(squares){ // create all possible boards and iterate through them to find a winner
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i = 0; i < lines.length; ++i){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}