// function to get innertext
function elementInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return parseInt(innerText);
}
// function to set innertext
function setElemetnInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function quantityIncrease(elementId) {
  const phoneQuantityElement = document.getElementById(elementId);
  const phoneQuantityString = phoneQuantityElement.value;
  const phoneQuantity = parseFloat(phoneQuantityString);
  const previousPhoneQuantity = phoneQuantity;
  const currentPhoneQuantity = previousPhoneQuantity + 1;
  phoneQuantityElement.value = currentPhoneQuantity;
  return currentPhoneQuantity;
}

function quantityDecrease(elementId) {
  const phoneQuantityElement = document.getElementById(elementId);
  const phoneQuantityString = phoneQuantityElement.value;
  const phoneQuantity = parseFloat(phoneQuantityString);
  const previousPhoneQuantity = phoneQuantity;
  const currentPhoneQuantity = previousPhoneQuantity - 1;
  phoneQuantityElement.value = currentPhoneQuantity;
  return currentPhoneQuantity;
}

// function to calculate subtotal

function calculateSubtotal() {
  const currentTotalPhonePrice = elementInnerText("phone-price");
  const currentTotalPhoneCasePrice = elementInnerText("phonecase-price");
  const subtotal = currentTotalPhonePrice + currentTotalPhoneCasePrice;
  setElemetnInnerText("subtotal", subtotal);
  return parseInt(subtotal);
}

// function to calculate tax and final total

function calculateTaxAndFinalTotal() {
  const subTotal = calculateSubtotal();
  const taxString = (subTotal * 0.05).toFixed(2);
  const tax = parseFloat(taxString);
  setElemetnInnerText("tax", tax);
  const total = elementInnerText("total");
  const finalTotal = total + tax;
  setElemetnInnerText("total", finalTotal);
}

// function disableMinusButton(inputFieldId) {
//   const inputValue = document.getElementById(inputFieldId).value;
//   if ((inputValue = 1)) {
//     document.getElementById("phone-btn-minus").setAttribute("disabled", "");
//   } else {
//     document
//       .getElementById("phone-btn-minus")
//       .removeAttribute("disabled", true);
//   }
// }
