function arrayChange(inputArray) {

 let count = 0;
 for (let i = 0; i < inputArray.length -1; i++) {
   if (inputArray[i] >= inputArray[i+1] ) {
     let differens = inputArray[i] + 1 - inputArray[i +1];
     inputArray[i+1] += differens;
     count+= differens;
   }
 }
 return count;
}




const arr = [3, 2 , 1];

console.log(arrayChange(arr));



// iterate array
// check differense between current item and next item
  // add the differnce to item + 1
  // skip add the differense to the count
// return count