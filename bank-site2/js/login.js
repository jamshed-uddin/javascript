document.getElementById("login-btn").addEventListener("click", function () {
  const userEmail = getElementValueById("user-email");
  const userPassword = getElementValueById("user-password");
  if (typeof userEmail == "string" && typeof userPassword == "string") {
    location.href = "transaction.html";
  }
});

function getElementValueById(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}
