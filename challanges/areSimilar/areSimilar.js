function areSimilar(a, b) {
  let [wrongA, wrongB] = [[], []];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      wrongA.push(a[i]);
      wrongB.push(b[i]);
    }
  }
  if (wrongA.length > 2) {
    return false;
  } else if (wrongA.length === 0 || wrongA[0] === wrongB[1] && wrongA[1] === wrongB[0]) {
   return true;
  }
  return false;
}