function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const me = [yourLeft, yourRight].sort((a,b) => a - b);
  const friend = [friendsLeft, friendsRight].sort((a,b) => a - b);
  if (me[0] === friend[0] && me[1] === friend[1]) {
    return true;
  }
  return false;
}

