document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
      // Retrieve and trim the value from the input field
      const taskText = taskInput.value.trim();
      
      // Check if the input is empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      // Create a new list item and set its text content
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a new remove button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';

      // Assign an event listener to the remove button to delete the task
      removeButton.onclick = function() {
          taskList.removeChild(listItem);
      };

      // Append the remove button to the list item
      listItem.appendChild(removeButton);
      // Append the list item to the task list
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';
  }

  // Attach an event listener to the add button
  addButton.addEventListener('click', addTask);

  // Attach an event listener to the input field to add tasks with the "Enter" key
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});
