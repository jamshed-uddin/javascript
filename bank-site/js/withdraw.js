// step-1 get the withdraw button

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // step-2 get the withdraw input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  // empty the input field
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please input numbers");
    return;
  }

  //   step - 3 get the total withdraw Element
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawAmountString = withdrawTotalElement.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

  // step -5 get the balance by the id

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("You do not have sufficient balance");
    return;
  }
  // step - 4 add the new and previous withdraw
  const currentTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;
  withdrawTotalElement.innerText = currentTotalWithdraw;

  //step - 6 deduct withdraw from total balance

  const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentTotalBalance;
});
