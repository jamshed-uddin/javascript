//step-1 get the deposite button by getelementbyid
document.getElementById("deposite-btn").addEventListener("click", function () {
  // step-2 get the value of input field
  const depositeField = document.getElementById("deposite-field");
  const newDepositeAmountString = depositeField.value; //input field values are a string
  const newDepositeAmount = parseFloat(newDepositeAmountString); //turn the string into a number

  //   step-3 get the current deposite
  const depositeTotalElement = document.getElementById("deposite-total");
  const previousDepositeTotalString = depositeTotalElement.innerText; //innertext is also a string even it is a number

  const previousDepositeTotal = parseFloat(previousDepositeTotalString); //turn the string into a number
  // step -4  add the previous deposite and new deposite amount
  const currentDepositeAmount = previousDepositeTotal + newDepositeAmount;
  depositeTotalElement.innerText = currentDepositeAmount; //set the total deposite amount as total deposite
  //step-5   get the total balance

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6 calculate total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  depositeField.value = "";
});
