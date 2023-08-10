document.addEventListener("DOMContentLoaded", () => {
  const ourTodoForm = document.querySelector(".todo-form");
  const ourTodoList = document.querySelector(".todo-list");

  function createNewTaskItem(newItemText) {
    const ourTaskItem = document.createElement("div");
    ourTaskItem.className = "todo-item";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    ourTaskItem.appendChild(checkBox);

    const labelText = document.createElement("label");
    labelText.innerText = newItemText;
    ourTaskItem.appendChild(labelText);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "X";
    ourTaskItem.appendChild(deleteButton);

    return ourTaskItem;
  }

  ourTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTasktext = document.getElementById("new-task");
    console.log("New input text is : ", newTasktext.value);

    if (newTasktext.value.trim() !== "") {
      const newlyCreatedItem = createNewTaskItem(newTasktext.value);

      ourTodoList.appendChild(newlyCreatedItem);

      newTasktext.value = "";
    }
  });

  ourTodoList.addEventListener("click", (event) => {
    if (event.target.matches(".delete-button")) {
      const ourItem = event.target.parentElement;
      console.log("Our parent Element ", ourItem);

      if (confirm("Do you want to delete it?")) {
        ourTodoList.removeChild(ourItem);
      }
    }
  });
});
