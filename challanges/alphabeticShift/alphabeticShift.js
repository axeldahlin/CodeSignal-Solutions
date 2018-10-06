function alphabeticShift(inputString) {

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return inputString.split('').map(letter => {

    const index = alphabet.indexOf(letter) + 1;

    if (alphabet[index] === undefined) {
      return letter = 'a';
    } else {
      return letter = alphabet[index];
    }
  }).join('');

}

