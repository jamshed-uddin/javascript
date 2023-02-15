document
  .getElementById("phonecase-btn-plus")
  .addEventListener("click", function () {
    const currentPhoneQuantity = quantityIncrease("phonecase-quantity");
    const totalPhoneCasePrice = currentPhoneQuantity * 59;
    setElemetnInnerText("phonecase-price", totalPhoneCasePrice);
    calculateTaxAndFinalTotal();
  });
document
  .getElementById("phonecase-btn-minus")
  .addEventListener("click", function () {
    const currentPhoneQuantity = quantityDecrease("phonecase-quantity");
    const totalPhoneCasePrice = currentPhoneQuantity * 59;
    setElemetnInnerText("phonecase-price", totalPhoneCasePrice);
    calculateTaxAndFinalTotal();
  });
