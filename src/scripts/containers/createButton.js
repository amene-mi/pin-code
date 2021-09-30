const container = document.getElementById("button-container");
const getValueNumber = require('../components/getRandomNumber');
const handleClick = require('./handleClick');

function createBtn() {
  const numbers = getValueNumber();
  for (let i = 0; i < numbers.length; i++) {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = numbers[i];
    btn.id = "num#" + numbers[i];
    btn.onclick = handleClick;
    container.appendChild(btn);
  }
}

module.exports = createBtn;