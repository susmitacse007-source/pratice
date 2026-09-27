// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const noTasksMessage = document.getElementById('noTasksMessage');

// Function to update the visibility of the "No tasks" message
function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        noTasksMessage.classList.remove('hidden');
    } else {
        noTasksMessage.classList.add('hidden');
    }
}

// Function to create a new task element
function createTaskElement(taskText) {
    // Create the list item container
    const li = document.createElement('li');
    li.className = 'task-item';

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    
    // Toggle completed style when checkbox is clicked
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    // Create the text span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    
    // Remove the task when delete button is clicked
    deleteBtn.addEventListener('click', function() {
        li.remove();
        updateEmptyMessage();
    });

    // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// Function to add a task
function addTask() {
    const text = taskInput.value.trim();
    
    // Don't add empty tasks
    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    // Create and append the new task
    const taskElement = createTaskElement(text);
    taskList.appendChild(taskElement);
    
    // Clear the input and update the empty message
    taskInput.value = '';
    updateEmptyMessage();
}

// Event listener for the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing Enter in the input field
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Initial check to show the empty message if needed
updateEmptyMessage();
