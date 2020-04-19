// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const darkModeSwitch = document.querySelector(".darkmodeswitch");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);
darkModeSwitch.addEventListener("click", darkMode);

//Functions
function addTodo(e) {
  e.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // ADD todo to localStorage
  saveLocalTodos(todoInput.value);
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
    //remove local todos
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // Check
  if (item.classList[0] === "completed-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    alert("comple");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  // check if already have something
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  // check if already have something
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
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
  });
}

function removeLocalTodos(todo) {
  // check if already have something
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function darkMode() {
  document.querySelector("html").classList.toggle("darkmode");
}
