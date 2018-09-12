function isIPv4Address(inputString) {
  const copy = inputString.split('.');

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === '') {
      return false;
    }

    const regexp =/\D/g;
    const test = copy[i].match(regexp);

    if (test !== null) {
      return false;
    }

    if (copy[i] > 255 || copy[i > 0]) {
      return false;
    }
  }

  if (copy.length !== 4) {
    return false;
  }

  return true;
}