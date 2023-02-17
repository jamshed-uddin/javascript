function getPin() {
  const pin = generatePin();
  if (pin > 1000 && pin <= 9999) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const randomPin = Math.round(Math.random() * 10000);
  return randomPin;
}

document.getElementById("generate-btn").addEventListener("click", function () {
  const generatePin = getPin();
  setElementValue("generated-pin", generatePin);
});
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const calcNumber = event.target.innerText;
    const typedNumberField = getElement("calcInput");
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(calcNumber)) {
      if (calcNumber === "C") {
        typedNumberField.value = "";
      } else if (calcNumber === "<") {
        const previousTypedNumberSplit = previousTypedNumber.split("");
        const previousTypedNumberPop = previousTypedNumberSplit.pop();

        const previousTypedNumberJoin = previousTypedNumberSplit.join("");
        setElementValue("calcInput", previousTypedNumberJoin);
      }
    } else {
      const newTypedNumber = previousTypedNumber + calcNumber;
      setElementValue("calcInput", newTypedNumber);
    }
  });

document.getElementById("submit-btn").addEventListener("click", function () {
  const actions = getElementInnerText("actions");
  if (getElementValue("generated-pin") === getElementValue("calcInput")) {
    getElement("pin-right-alert").style.display = "block";
    getElement("pin-wrong-alert").style.display = "none";
  } else {
    getElement("pin-right-alert").style.display = "none";
    getElement("pin-wrong-alert").style.display = "block";
    const actionsTotal = getElementInnerText("actions");
    const leftActions = actions - 1;
    setElementInnerText("actions", leftActions);
    if (leftActions == 0) {
      getElement("submit-btn").setAttribute("disabled", "");
    }
  }
});
