document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawValue = getElementValueById("withdraw-field");
  if (isNaN(newWithdrawValue) || newWithdrawValue < 0) {
    alert("Please input a valid input");
    return;
  }
  const previousWithdrawValue = getElementInnerTextById("withdraw-total");

  const totalWithdrawValue = previousWithdrawValue + newWithdrawValue;

  setElementInnerTextById("withdraw-total", totalWithdrawValue);

  const previousBalance = getElementInnerTextById("balance-total");
  if (newWithdrawValue > previousBalance) {
    alert("You do not have suffiecient balance");
    return;
  }

  const newBalance = previousBalance - newWithdrawValue;
  setElementInnerTextById("balance-total", newBalance);
});
