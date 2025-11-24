document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedTasks) {
        tasks = storedTasks; // ✅ directly assign
        updateTasksList();
        updateStats();
    }
});

let tasks = [];

const saveTask = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    updateTasksList();
    updateStats();
    saveTask();
  }
};

const updateTasksList = () => {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div class="taskItem">
        <div class="task ${task.completed ? 'completed' : ''}">
          <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
          <p>${task.text}</p>
        </div>
        <div class="icons">
          <i class="fa-solid fa-pen-to-square edit"></i>
          <i class="fa-solid fa-trash delete"></i>
        </div>
      </div>
    `;

    // Checkbox
    listItem.querySelector('.checkbox').addEventListener('change', () => toggleTaskComplete(index));

    // Edit
    listItem.querySelector('.edit').addEventListener('click', () => editTask(index));

    // Delete
    listItem.querySelector('.delete').addEventListener('click', () => deleteTask(index));

    taskList.append(listItem);
  });
};

const deleteTask = (index) => {
  // Remove the task from the array
  tasks.splice(index, 1);

  // Update the displayed list
  updateTasksList();

  // Update progress bar and stats
  updateStats();

  // Save the updated tasks array to localStorage
  saveTask();
};

const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList();
  updateStats();
  saveTask();
};

const editTask = (index) => {
  const taskInput = document.getElementById("taskInput");
  taskInput.value = tasks[index].text;

  tasks.splice(index, 1);
  updateTasksList();
  updateStats();
  saveTask();
};

const updateStats = () => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  document.getElementById("progress").style.width = `${progress}%`;

  document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;

  // Trigger confetti when all tasks completed
  if (tasks.length && completedTasks === totalTasks) {
    triggerConfetti();
  }
};

// Correct function to trigger confetti
const triggerConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
};

document.getElementById('newTask').addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});