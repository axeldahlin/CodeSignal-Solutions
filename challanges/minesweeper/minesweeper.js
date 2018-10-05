function minesweeper(matrix) {
  let answer = [];
 
  for (let y = 0; y < matrix.length; y++) {

    answer.push([]);
    for (let x = 0; x < matrix[y].length; x++) {

      answer[y][x] = 0;

      // above right
      if (matrix[y-1] !== undefined) {
        if (matrix[y-1][x-1] === true) {
          answer[y][x]++;
        }
      }

      // above
      if (matrix[y-1] !== undefined) {
        if (matrix[y-1][x] === true) {
          answer[y][x]++;
        }
      }

      // above left
      if (matrix[y-1] !== undefined) {
        if (matrix[y-1][x+1] === true) {
          answer[y][x]++;
        }
      }

      // left
      if (matrix[y][x-1] !== undefined) {
        if (matrix[y][x-1] === true) {
          answer[y][x]++;
        }
      }

      // right
      if (matrix[y][x+1] !== undefined) {
        if (matrix[y][x+1] === true) {
          answer[y][x]++;
        }
      }

      // below left
      if (matrix[y+1] !== undefined) {
        if (matrix[y+1][x-1] === true) {
          answer[y][x]++;
        }
      }

      // below
      if (matrix[y+1] !== undefined) {
        if (matrix[y+1][x] === true) {
          answer[y][x]++;
        }
      }

      // below right
       if (matrix[y+1] !== undefined) {
        if (matrix[y+1][x+1] === true) {
          answer[y][x]++;
        }
      }
    }
  }
  return answer;
}


