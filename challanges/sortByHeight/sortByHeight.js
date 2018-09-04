function sortByHeight(a) {
  let sc = a;
  sc = sc.filter((x) => (x !=-1) ? x : null).sort((a,b) => a-b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) continue;
    a[i] = sc[0];
    sc.shift();
  }
  return a;
}