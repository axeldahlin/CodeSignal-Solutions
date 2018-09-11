function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  for (let i = 0; i < inputArray.length -1; i++) {
    const sortedItems = [inputArray[i], inputArray[i+1]].sort((a, b) => a - b);
    const diff = sortedItems[1] - sortedItems[0];
    if (diff > maxDiff) {
      maxDiff = diff;
    }
    return maxDiff;
  }
}
