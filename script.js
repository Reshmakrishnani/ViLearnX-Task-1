let todos = [];

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'checked' : ''}`;
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="${todo.completed ? 'checked' : ''}" onclick="toggleTodo(${index})">${todo.completed ? 'Uncheck' : 'Check'}</button>
            <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const newTodo = {
            text: todoText,
            completed: false
        };
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
}

function editTodo(index) {
    const newTodo = prompt('Edit the todo:', todos[index].text);
    
    if (newTodo !== null) {
        todos[index].text = newTodo.trim();
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Initial rendering
renderTodos();
