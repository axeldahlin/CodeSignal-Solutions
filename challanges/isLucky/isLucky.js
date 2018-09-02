function isLucky(n) {
  const arr1 = n.toString().split('').map(x => Number(x));
  const arr2 = arr1.splice(arr1.length / 2);
  const sum1 = arr1.reduce((acc, current) => acc + current);
  const sum2 = arr2.reduce((acc, current) => acc + current);
  return sum1 === sum2;
}
