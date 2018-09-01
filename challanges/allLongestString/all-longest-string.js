function allLongestStrings(inputArray) {
  let longest = 0;
  let newArr = [];

  for (let i = 0; i < inputArray.length; i++) {

    console.log(inputArray[i]);
    if (inputArray[i].length > longest) {
      longest = inputArray[i].length;
      newArr = [];
    }

    if (inputArray[i].length === longest) {
      newArr.push(inputArray[i]);
    }
  }
  return newArr;
}


let arr = ["aba", 
"aa", 
"ad", 
"vcd", 
"aba"];

console.log(allLongestStrings(arr));