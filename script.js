/*document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
      const taskText = taskInput.value.trim();
      
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';

      removeButton.onclick = function() {
          taskList.removeChild(listItem);
      };

      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);

      taskInput.value = '';
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});*/
document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  loadTasks();

  // Add event listener for adding tasks
  addButton.addEventListener('click', function() {
      addTask(taskInput.value);
  });

  // Add event listener for Enter key to add tasks
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask(taskInput.value);
      }
  });

  // Function to add a task
  function addTask(taskText, save = true) {
      if (taskText.trim() === '') {
          alert('Please enter a task');
          return;
      }

      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
      removeButton.onclick = function() {
          taskList.removeChild(li);
          removeTask(taskText);
      };

      // Append the remove button to the list item
      li.appendChild(removeButton);
      
      // Append the list item to the task list
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = '';

      // Save the task to Local Storage
      if (save) {
          saveTask(taskText);
      }
  }

  // Function to save a task to Local Storage
  function saveTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Function to load tasks from Local Storage
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Function to remove a task from Local Storage
  function removeTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
});

