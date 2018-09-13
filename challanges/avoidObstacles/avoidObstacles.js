function avoidObstacles(inputArray) {
  let position = 0; 
  let jumpLength = 1;
  let max = Math.max(...inputArray);

  while (position < max) {
    position += jumpLength;
    if (inputArray.includes(position)) {
      position = 0;
      jumpLength++;
    }
  }
  return jumpLength;
}