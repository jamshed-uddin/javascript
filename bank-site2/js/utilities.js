function getElementValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = inputField.value;
  inputField.value = "";
  return parseFloat(inputFieldValue);
}

function getElementInnerTextById(id) {
  const getInnerText = document.getElementById(id).innerText;
  return parseFloat(getInnerText);
}

function setElementInnerTextById(id, newText) {
  document.getElementById(id).innerText = newText;
}
