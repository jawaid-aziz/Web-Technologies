const addButton = document.getElementById('add');

const todoInput = document.getElementById('todo');

const toDoList = document.getElementById('toDoList');

addButton.addEventListener('click', () => {
    const li = document.createElement('li');

    li.textContent = todoInput.value;

    toDoList.appendChild(li);
})