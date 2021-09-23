const inputs = document.querySelectorAll("input");
const container = document.getElementById("button-container");

let focusedInput;

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

const onInputFocus = (event) => {
  focusedInput = event.target;
}

const listenToInputFocus = () => {
  inputs.forEach((input) => {
    input.addEventListener('focus', onInputFocus);
  });
}

const setFocusOnNextInput = (currentInput) => {
  let currentInputIndex;
  const currentInputRegEx = new RegExp(currentInput.id);

  inputs.forEach((input, index) => {
    if (currentInputRegEx.test(input.id)) {
      currentInputIndex = index;
    }
  });

  if ((currentInputIndex + 1) === inputs.length) return;

  inputs[currentInputIndex + 1].focus();
}

const setInputValue = async (value) => {
  focusedInput.value = value;
  setFocusOnNextInput(focusedInput);
}


let handleClick = function handleClick() {
  setInputValue(this.innerText);
}

function createBtn() {
  var numbers = getValueNumber();
  for (var i = 0; i < numbers.length; i++) {
    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = numbers[i];
    btn.id = "num#" + numbers[i];
    btn.onclick = handleClick;
    container.appendChild(btn);
  }
}

createBtn();
listenToInputFocus();
inputs[0].focus();
