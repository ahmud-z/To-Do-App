const todos = [
    {
        id: 1,
        todo: "Learn java",
        isCompleted: false
    },
    {
        id: 2,
        todo: "Learn php",
        isCompleted: true
    },
    {
        id: 3,
        todo: "Learn ruby",
        isCompleted: false
    }
]

const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')
const todosArea = document.getElementsByClassName('todo-items')[0]


function onDeleteTodo() {
    this.parentNode.remove()
}

function onStatusChange() {
    if(this.checked) {
        this.nextSibling.style.textDecoration = 'line-through';
    }else{
        this.nextSibling.style.textDecoration = 'none';
    }
}

function onTodoAdd() {
    if(todoInput.value == '') {
        return;
    }


    addNewTodo(todoInput.value, false)    
}

function addNewTodo(content, isCompleted) {
    const todoItem = document.createElement('div')
    todoItem.classList.add('todo-item')
    
    const todoItemLabel = document.createElement('label')
    todoItemLabel.innerText = content;

    if(isCompleted) {
        todoItemLabel.style.textDecoration = 'line-through'
    }

    const todoItemCheckbox = document.createElement('input')
    todoItemCheckbox.type = 'checkbox';
    todoItemCheckbox.checked = isCompleted;
    todoItemCheckbox.addEventListener('change', onStatusChange)


    const deleteButton = document.createElement('span')
    deleteButton.innerText = '❌'
    deleteButton.classList.add('pointer')

    deleteButton.addEventListener('click', onDeleteTodo)

    const groupDiv = document.createElement('div')
    groupDiv.appendChild(todoItemCheckbox)
    groupDiv.appendChild(todoItemLabel)

    todoItem.appendChild(groupDiv)
    todoItem.appendChild(deleteButton)

    todosArea.appendChild(todoItem);
}

addBtn.addEventListener('click', onTodoAdd)

for (let index = 0; index < todos.length; index++) {
    const todo = todos[index];
    
    addNewTodo(todo.todo, todo.isCompleted)
}