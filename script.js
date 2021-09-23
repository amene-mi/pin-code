const inputs = document.querySelectorAll("input");
const container = document.getElementById("button-container");
var numberRegex= new RegExp('[0-9]');
let focusedInput;

function removeNotDigitValue(){
  inputs.forEach((input)=>{
    input.addEventListener('input',function(event){
      if(!numberRegex.test(parseInt(event.target.value))){
        event.target.value=null;
      };
    });
  });
}
removeNotDigitValue();
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

const setFocusOnPreviousInput = (currentInput) => {
  let currentInputIndex;
  const currentInputRegEx = new RegExp(currentInput.id);

  inputs.forEach((input, index) => {
    if (currentInputRegEx.test(input.id)) {
      if (input.value.trim() !== "") {
        currentInputIndex = index;
      }
      else {
        currentInputIndex = index - 1;
      }
    }
  });

  if ((currentInputIndex) < 0) return;
  inputs[currentInputIndex].value = null;
  inputs[currentInputIndex].focus();
}

const setInputValue = async (value) => {
  focusedInput.value = value;
  if(value ===null) return;

  setFocusOnNextInput(focusedInput);
}

const handleClick = function () {
  if (this.id === 'clear') {
    setFocusOnPreviousInput(focusedInput);
    return;
  }
  setInputValue(this.innerText);
}

const onkeyPress = function (event) {
  if(event.key==="Backspace"){
    setFocusOnPreviousInput(focusedInput);
    return;
  }
  else if(numberRegex.test(parseInt(event.key))){
      setInputValue(event.key);
  }
  else{
      //setInputValue(null);
      return;
  }
};

document.addEventListener('keypress', onkeyPress);

document.getElementById("clear").addEventListener('click', handleClick);
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
