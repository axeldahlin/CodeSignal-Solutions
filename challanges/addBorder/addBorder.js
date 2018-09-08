function addBorder(picture) {
  picture.push('*'.repeat(picture[0].length));
  picture.unshift('*'.repeat(picture[0].length));
  for (let i = 0; i < picture.length; i++) {
    picture[i] = `*${picture[i]}*`;
  }
  return picture;
}