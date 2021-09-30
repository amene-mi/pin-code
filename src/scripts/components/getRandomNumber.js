function getValueNumber() {
  const arr = [];
  do {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  } while (arr.length < 10);
  return arr;
}

module.exports = getValueNumber;