function getElement(elemId) {
  const elementById = document.getElementById(elemId);
  return elementById;
}

function getElementValue(inputId) {
  const elementValueById = document.getElementById(inputId).value;
  return elementValueById;
}
function setElementValue(inputId, value) {
  document.getElementById(inputId).value = value;
}
function setElementInnerText(elementId, text) {
  const innerText = (document.getElementById(elementId).innerText = text);
  return innerText;
}

function getElementInnerText(elementId) {
  const innerText = document.getElementById(elementId).innerText;
  return parseInt(innerText);
}
