const getAlert = () => {
  alert("hello world");
};

const getConfirm = () => {
  const confirmbtn = confirm("use cookies for better experience");

  if (confirmbtn === true) {
    alert("Thank you");
  } else {
    alert("ain't you a fuckface");
  }

  console.log(confirmbtn);
};

const getPrompt = () => {
  const getPrompt = prompt("Say my name!!");
  console.log(getPrompt);
  if (getPrompt === "heisenberg") {
    alert("You're goddamn right.");
  } else if (getPrompt === null) {
    alert("The cook is off then");
  }
};
