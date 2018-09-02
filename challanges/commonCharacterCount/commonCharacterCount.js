function commonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if(s1[i] === s2[j]) {
        count++;
        s2.splice(j, 1);
        break;
      }
    }
  }
  return count;
}