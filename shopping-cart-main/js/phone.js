document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    const currentPhoneQuantity = quantityIncrease("phone-quantity");
    const totalPhonePrice = currentPhoneQuantity * 1219;
    setElemetnInnerText("phone-price", totalPhonePrice);
    calculateTaxAndFinalTotal();
  });
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const currentPhoneQuantity = quantityDecrease("phone-quantity");
    const totalPhonePrice = currentPhoneQuantity * 1219;
    setElemetnInnerText("phone-price", totalPhonePrice);
    calculateTaxAndFinalTotal();
  });
