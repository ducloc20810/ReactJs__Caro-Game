export function findPos(target, maxRow, maxCol) {
  let id = 1;
  let posRow = 0;
  let posCol = 0;
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxCol; j++) {
      if (parseInt(target.id) === id) {
        posRow = i;
        posCol = j;
        return { posRow, posCol };
      }
      id++;
    }
  }
}

export function checkRow(squares, target, posRow, posCol, maxCol) {
  let count = 1;
  for (let j = posCol + 1; j < maxCol; ++j) {
    if (target.classList.contains("chess-board__square--o")) {
      if (squares[posRow][j].classList.contains("chess-board__square--o"))
        count++;
    } else {
      if (squares[posRow][j].classList.contains("chess-board__square--x"))
        count++;
    }
  }

  for (let j = posCol - 1; j >= 0; --j) {
    if (target.classList.contains("chess-board__square--o")) {
      if (squares[posRow][j].classList.contains("chess-board__square--o"))
        count++;
    } else {
      if (squares[posRow][j].classList.contains("chess-board__square--x"))
        count++;
    }
  }
  if (count === maxCol) return true;
}

export function checkCol(squares, target, posRow, posCol, maxRow) {
  let count = 1;
  for (let j = posRow + 1; j < maxRow; ++j) {
    if (target.classList.contains("chess-board__square--o")) {
      if (squares[j][posCol].classList.contains("chess-board__square--o"))
        count++;
    } else {
      if (squares[j][posCol].classList.contains("chess-board__square--x"))
        count++;
    }
  }

  for (let j = posRow - 1; j >= 0; --j) {
    if (target.classList.contains("chess-board__square--o")) {
      if (squares[j][posCol].classList.contains("chess-board__square--o"))
        count++;
    } else {
      if (squares[j][posCol].classList.contains("chess-board__square--x"))
        count++;
    }
  }
  if (count === maxRow) return true;
}

function checkDiagonal(squares, target, posRow, posCol, maxRow, maxCol) {
  let countLeft = 1;
  let countRight = 1;
  // Chéo trái xuống
  for (let i = posRow + 1, j = posCol - 1; i < maxRow && j >= 0; ++i, --j) {
    if (target.classList.contains("chess-board__square--o")) {
      if (squares[i][j].classList.contains("chess-board__square--o"))
        countLeft++;
    } else {
      if (squares[i][j].classList.contains("chess-board__square--x"))
        countLeft++;
    }
  }

  // Chéo trái lên

  for (let i = posRow - 1, j = posCol + 1; i >= 0 && j < maxCol; --i, ++j) {
    console.log(i, j);
    if (target.classList.contains("chess-board__square--o")) {
      if (squares[i][j].classList.contains("chess-board__square--o"))
        countLeft++;
    } else {
      if (squares[i][j].classList.contains("chess-board__square--x"))
        countLeft++;
    }
  }

  // Chéo phải xuống
  for (let i = posRow + 1, j = posCol + 1; i < maxRow && j < maxCol; ++i, ++j) {
    if (target.classList.contains("chess-board__square--o")) {
      if (squares[i][j].classList.contains("chess-board__square--o"))
        countRight++;
    } else {
      if (squares[i][j].classList.contains("chess-board__square--x"))
        countRight++;
    }
  }

  // Chéo phải lên
  for (let i = posRow - 1, j = posCol - 1; i >= 0 && j >= 0; --i, --j) {
    if (target.classList.contains("chess-board__square--o")) {
      if (squares[i][j].classList.contains("chess-board__square--o"))
        countRight++;
    } else {
      if (squares[i][j].classList.contains("chess-board__square--x"))
        countRight++;
    }
  }

  console.log("--------------------------------");
  if (countRight === maxRow || countLeft === maxRow) return true;
}
export function checkWinner(squares, target, maxRow, maxCol) {
  const { posRow, posCol } = findPos(target, maxRow, maxCol);
  console.log(posRow, posCol);
  const fullRow = checkRow(squares, target, posRow, posCol, maxCol);
  if (fullRow) return 1;
  const fullCol = checkCol(squares, target, posRow, posCol, maxRow);
  if (fullCol) return 1;
  const fullDiagonal = checkDiagonal(
    squares,
    target,
    posRow,
    posCol,
    maxRow,
    maxCol
  );
  if (fullDiagonal) return 1;
  return 0;
}
