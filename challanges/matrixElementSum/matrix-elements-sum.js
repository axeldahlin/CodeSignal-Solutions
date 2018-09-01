function matrixElementsSum(matrix) {
  let sum = 0;
  let hauntedIndexs = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (hauntedIndexs.includes(j)) continue;
      if (matrix[i][j] === 0) hauntedIndexs.push(j);
      sum += matrix[i][j];
    }
  }
  return sum;
}