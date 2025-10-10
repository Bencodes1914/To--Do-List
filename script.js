const input = document.getElementById("task-input"); // Get the input field where user types a new task
const addBtn = document.getElementById("add-task"); // Get the "Add" button element
const taskList = document.getElementById("task-list"); // Get the <ul> element that will hold all tasks

addBtn.addEventListener("click", () => { // Add a click event listener to the Add button
  const taskText = input.value.trim(); // Get the user's input and remove extra spaces

  if (taskText === "") { // Check if the input is empty
    alert("Please enter a task!"); // Alert the user to type something
    return; // Stop the code from continuing if the input is empty
  }

  const li = document.createElement("li"); // Create a new <li> element for the task
  li.textContent = taskText; // Set the text of the <li> to the user's input

  li.addEventListener("click", () => { // Add a click event to mark task as completed
    li.classList.toggle("completed"); // Toggle (add/remove) the "completed" CSS class
  });

  const deleteBtn = document.createElement("button"); // Create a Delete button element
  deleteBtn.textContent = "Delete"; // Set the button text to "Delete"
  deleteBtn.style.marginLeft = "10px"; // Add a small margin to separate it from the text
  deleteBtn.addEventListener("click", (e) => { // Add a click event to delete the task
    e.stopPropagation(); // Stop the click from triggering the "completed" toggle
    li.remove(); // Remove the entire <li> (delete the task)
  });

  deleteBtn.classList.add("delete-btn"); // Add a class name for styling in CSS

  const editBtn = document.createElement("button"); // Create an Edit button element
  editBtn.textContent = "Edit"; // Set the button text to "Edit"
  editBtn.style.marginLeft = "5px"; // Add a small margin between text and button
  editBtn.addEventListener("click", (e) => { // Add a click event to edit the task text
    e.stopPropagation(); // Prevent it from toggling the completed class
    const newTaskText = prompt("Edit your task:", li.firstChild.textContent); // Open a prompt box to edit text
    if (newTaskText !== null && newTaskText.trim() !== "") { // Check if user didn’t cancel or leave it blank
        li.firstChild.textContent = newTaskText.trim(); // Update the task text with the new input
    }
  });

  editBtn.classList.add("edit-btn"); // Add a class name for styling the Edit button

  li.appendChild(editBtn); // Add the Edit button inside the list item
  li.appendChild(deleteBtn); // Add the Delete button inside the list item
  taskList.appendChild(li); // Add the complete <li> (task) into the main <ul> list
  input.value = ""; // Clear the input field for the next task
});

