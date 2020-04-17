// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(e) {
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Btn check mark
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-button");
  todoDiv.appendChild(completedButton);
  // Btn delete
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-button");
  todoDiv.appendChild(deleteButton);
  // Append to List
  todoList.appendChild(todoDiv);
  // Clear input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Delete
  if (item.classList[0] === "delete-button") {
    const todo = item.parentElement;
    todo.classList.add("delete");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // Check
  if (item.classList[0] === "completed-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
