document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = document.getElementById("income").value;
  const food = document.getElementById("food").value;
  const rent = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  //   calculatea expense

  const expense = parseInt(food) + parseInt(rent) + parseInt(clothes);
  //   console.log(expense);
  //   calculate balance
  const balance = parseInt(income) - expense;
  //   console.log(balance);
  //   validate income and expense
  if (expense > income) {
    alert("Expense is greater than income");
  } else {
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
  const savingPercentage = document.getElementById("save").value;
  //validate saving percentage
  if (savingPercentage < 0 || savingPercentage > 100) {
    alert("Enter proper saving percentage value");
    return;
  }
  const balanceString = document.getElementById("balance").innerText;
  const balance = parseInt(balanceString);
  const savingAmount = (savingPercentage / 100) * balance;
  //   console.log(savingAmount);
  const remainingBalance = balance - savingAmount;
  console.log(remainingBalance);

  //set saving amount and remaining balance
  document.getElementById("saving-amount").innerText = savingAmount;
  document.getElementById("remaining-balance").innerText = remainingBalance;
});
