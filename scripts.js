document.getElementById('add-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const task = taskInput.value.trim();
    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('todo-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${task}</td>
        <td class="task-actions">
            <button class="complete-button" onclick="completeTask(this)">Complete</button>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        </td>
    `;
    taskList.appendChild(row);
    taskInput.value = '';
}

function completeTask(button) {
    const task = button.parentElement.parentElement.querySelector('td');
    task.classList.toggle('completed');
}

function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
