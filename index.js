
const taskNameInput = document.getElementById("taskName");
const taskTagInput = document.getElementById("taskTag");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let completedCount = 0;

function createTask(name, tag) {

  const task = document.createElement("div");
  task.classList.add("task");

  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");

  const title = document.createElement("h3");
  title.textContent = name;

  const tagEl = document.createElement("span");
  tagEl.classList.add("tag");
  tagEl.textContent = tag || "sem etiqueta";

  const createdAt = document.createElement("p");
  const date = new Date();
  createdAt.textContent = `Criado em: ${date.toLocaleDateString("pt-BR")}`;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Concluir";

  
  taskInfo.appendChild(title);
  taskInfo.appendChild(tagEl);
  taskInfo.appendChild(createdAt);

  task.appendChild(taskInfo);
  task.appendChild(completeBtn);
  taskList.appendChild(task);

  completeBtn.addEventListener("click", () => {
    if (!task.classList.contains("completed")) {
      task.classList.add("completed");
      completeBtn.textContent = "✔";
      completeBtn.disabled = true;
      completedCount++;
      updateCount();
    }
  });
}

function updateCount() {
  taskCount.textContent = `${completedCount} tarefa${completedCount !== 1 ? "s" : ""} concluída${completedCount !== 1 ? "s" : ""}`;
}


addTaskBtn.addEventListener("click", () => {
  const name = taskNameInput.value.trim();
  const tag = taskTagInput.value.trim();

  if (name === "") {
    alert("Digite o nome da tarefa!");
    return;
  }

  createTask(name, tag);
  taskNameInput.value = "";
  taskTagInput.value = "";
});


