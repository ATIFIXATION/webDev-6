function displayTasks() {

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {

    const li = document.createElement("li");

    li.classList.add("task");

    li.innerHTML = `
      <span>${task.text}</span>

      <div class="task-buttons">
        <button class="complete-btn">Done</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      displayTasks();
    });

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      displayTasks();
    });

    taskList.appendChild(li);
  });

  updateTaskCount();
}