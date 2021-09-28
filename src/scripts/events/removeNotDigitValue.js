function removeNotDigitValue(inputs, numberRegex) {
  inputs.forEach((input) => {
    input.addEventListener('input', function (event) {
      console.log("input " + event.target.value);
      if (!numberRegex.test(parseInt(event.target.value))) {
        event.target.value = null;
      };
    });
  });
}

module.exports = removeNotDigitValue;