const textArea = document.getElementById("textarea");

function bold() {
  if (textArea.style.fontWeight == "bold") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "bold";
  }
}

function italic() {
  if (textArea.style.fontStyle == "italic") {
    textArea.style.fontStyle = "normal";
  } else {
    textArea.style.fontStyle = "italic";
  }
}
function underline() {
  if (textArea.style.textDecoration == "underline") {
    textArea.style.textDecoration = "none";
  } else {
    textArea.style.textDecoration = "underline";
  }
}
function left() {
  textArea.style.textAlign = "left";
}
function center() {
  textArea.style.textAlign = "center";
}
function right() {
  textArea.style.textAlign = "right";
}
function justify() {
  textArea.style.textAlign = "justify";
}
function capital() {
  if (textArea.style.textTransform == "uppercase") {
    textArea.style.textTransform = "lowercase";
  } else {
    textArea.style.textTransform = "uppercase";
  }
}
function fontSize() {
  const inputValue = document.getElementById("font-size").value;
  textArea.style.fontSize = inputValue + "px";
}

function fontColor() {
  const inputColor = document.getElementById("font-color").value;
  textArea.style.color = inputColor;
}

document.getElementById("clear-btn").addEventListener("click", function () {
  textArea.style.color = "black";
  textArea.style.fontWeight = "normal";
  textArea.style.fontStyle = "normal";
  textArea.style.textDecoration = "none";
  textArea.style.fontSize = "16px";
  textArea.style.textAlign = "left";
  textArea.value = "";
});

// function clear() {
//   textArea.value = "";
// }
