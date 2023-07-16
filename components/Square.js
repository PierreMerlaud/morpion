export default function Square({ value, onSquareClick }) {
  let squareClass = "square";
  if (value === "X") {
    squareClass += " x-color";
  } else if (value === "O") {
    squareClass += " o-color";
  }

  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
}
