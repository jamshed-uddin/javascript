document.getElementById("note-btn").addEventListener("click", function () {
  const noteText = document.getElementById("note-box");
  const newNote = noteText.value;

  const noteContainer = document.getElementById("note-container");
  const para = document.createElement("p");
  para.innerText = newNote;
  noteContainer.appendChild(para);
  noteText.value = "";
});
