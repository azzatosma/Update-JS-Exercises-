const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => {
    addTaskToDom(task);
  });
}

todoForm.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const taskText = todoInput.value.trim();
  console.log(taskText);
  // console.log(new Date(Date.now()));

  if (taskText !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    // Add task to the DOM
    addTaskToDom(task);
    saveTaskToLocalStorage(task);
    todoInput.value = "";
  }
}

function addTaskToDom(task) {
  const li = document.createElement("li");
  li.className = `todo-item ${task.completed ? "completed" : ""}`;
  li.dataset.id = task.id;
  li.innerHTML = `
    <input type="checkbox" name="completeCheckbox">
    <span class="task">${task.text}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
    `;
  todoList.appendChild(li);

  attachEventListener(li, task);
}
function attachEventListener(li, task) {
  const deleteBtn = li.querySelector(".delete-btn");
  const editBtn = li.querySelector(".edit-btn");
  const checkbox = li.querySelector(".completeCheckbox");
  deleteBtn.addEventListener("click", function () {
    handleDelete(task.id, li);
  });
  editBtn.addEventListener("click", function () {
    handleEdit(task.id, li);
  });
  checkbox.addEventListener("change", function () {
    toggleTaskCompletion(task.id, li, checkbox.checked);
  });
}
function handleDelete(id, li) {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((task) => task.id != id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  li.remove();
}
function handleEdit(taskId, li) {
  const taskSpan = li.querySelector(".task");
  const newTaskText = prompt("Edit new task text:", taskSpan.textContent);
  if (newTaskText != null && newTaskText.trim() !== "") {
    updateTask(taskId, newTaskText);
    taskSpan.textContent = newTaskText;
    // Update task in local storage as well.
    // const tasks = getTasksFromLocalStorage();
    // tasks.forEach(task => {
    //   if(task.id === taskId){
    //     task.text = newTaskText;
    //   }
    // });
    // localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function updateTask(id, newTaskText) {
    const tasks = getTasksFromLocalStorage();
    const task = tasks.find((task) => task.id == id);
    if (task) {
      task.text = newTaskText;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
}
function toggleTaskCompletion(Id, li, isCompleted) {
  const tasks = getTasksFromLocalStorage();
  const task = tasks.find((task) => task.id == Id);
  if (task) {
    task.completed = isCompleted;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    li.classList.toggle("completed", isCompleted);
  }
}
function saveTaskToLocalStorage(task) {
  const oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  oldTasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}
function getTasksFromLocalStorage(task) {
  const oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return oldTasks;
}
