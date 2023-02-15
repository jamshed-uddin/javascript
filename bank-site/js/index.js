document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  location.href = "inside.html";

  if (email == "" && password == "") {
    location.href = "inside.html";
  } else {
  }
});
