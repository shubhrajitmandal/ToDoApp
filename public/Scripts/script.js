const delBtns = document.querySelectorAll(".delete");
const edit = document.querySelector(".edit");

delBtns.forEach(del => {
  del.addEventListener("click", () => {
    del.parentNode.remove();
    // todos.splice(indexOf(del) - 1, 1);
  });
});
edit.addEventListener("click", () => {
  prompt("Edit Task:");
});
