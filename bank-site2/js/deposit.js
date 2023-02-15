document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositValue = getElementValueById("deposit-field");
  if (isNaN(newDepositValue) || newDepositValue < 0) {
    alert("Please input a valid input");
    return;
  }
  const previousDepositValue = getElementInnerTextById("deposite-total");

  const totalDepositValue = previousDepositValue + newDepositValue;

  setElementInnerTextById("deposite-total", totalDepositValue);

  const previousBalance = getElementInnerTextById("balance-total");
  const newBalance = previousBalance + newDepositValue;
  setElementInnerTextById("balance-total", newBalance);
});
