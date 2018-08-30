function makeArrayConsecutive2(statues) {
  const max = Math.max(...statues);
  const min = Math.min(...statues);
  let missing = 0;

  for (var i = min; i < max; i++ ) {
    if (!statues.includes(i)) {
      missing += 1;
    }
  }
  return missing;
}