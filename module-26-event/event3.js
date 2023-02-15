// document.getElementById("delete-button").addEventListener("click", function () {
//   const deletetText = document.getElementById("delete-text");
//   deletetText.style.display = "none";
// });

// document
//   .getElementById("input-field")
//   .addEventListener("keyup", function (event) {
//     console.log(event.target.value);
//   });

document
  .getElementById("input-field")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const deleteBtn = document.getElementById("delete-button");
    if (text === "delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
  });

document.getElementById("delete-button").addEventListener("click", function () {
  const deletetText = document.getElementById("delete-text");
  deletetText.style.display = "none";
});
