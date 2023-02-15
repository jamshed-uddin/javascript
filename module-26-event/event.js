document.getElementById("comment-btn").addEventListener("click", function () {
  //step 2 - get the comment inside the comment area
  const commentText = document.getElementById("comment-box");
  const newComment = commentText.value;
  //set the comment inside the comment container
  //   1.get the comment container
  //   2.create a new element (p)
  //   3.set the new comment as the innner text of p
  //   4. appendChild the p in comment container
  const commentContainer = document.getElementById("comment-container");
  const para = document.createElement("p");
  para.innerText = newComment;
  commentContainer.appendChild(para);
  //   step 4 - clear the comment box
  commentText.value = "";
});
