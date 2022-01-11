const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");
let toDoData = [];

const render = function () {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";
  
  toDoData.forEach(function (item, index) {
      const li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      " </div>";

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });

    li.querySelector(".todo-remove").addEventListener("click", function () {
        toDoData.splice(index, 1)
        render()
      });
  });
  
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  if (headerInput.value.trim() === "") {
    alert("Введите что-либо");
    render();
    return;
  }

  const newTodo = {
    text: headerInput.value,
    completed: false,
  };
    toDoData.push(newTodo);
localStorage.setItem("toDoData", JSON.stringify(toDoData))
  headerInput.value = "";

  render();
});

if (toDoData = JSON.parse(localStorage.getItem("toDoData"))) {
    render()
    localStorage.clear()
} else {
    toDoData = [] 
}

console.log("[todoCompleted]", todoCompleted);
console.log("[headerInput]", headerInput);
console.log("[todoControl]", todoControl);
console.log("[todoList]", todoList);