function evenDigitsOnly(n) {
  let array = n.toString().split('');
  
  for (let i = 0; i < array.length; i ++) {
   
   if (Number(array[i]) % 2 === 1) {
     return false;
   } 
  } 
  return true;
}