function palindromeRearranging(inputString) {
  let charCount = {};
  for (let i = 0; i < inputString.length; i++) {
    inputString[i] in charCount ? charCount[inputString[i]]++ : charCount[inputString[i]] = '1';
  }

  let oddChars = 0;
  for (key in charCount) {
    if (charCount[key] % 2 !== 0) {
      oddChars++;
    }
  }
  return oddChars <= 1 ? true : false;
}