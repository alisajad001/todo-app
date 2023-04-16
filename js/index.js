let inputValue = document.querySelector('input');
const addBtn = document.querySelector('.addBtn');
let todos = document.querySelector('#todos');
const circleEl = document.querySelector('.circle');

function addTodo() {
    // Creates new (li) element
    let newTodoLi = document.createElement('li');
    newTodoLi.innerHTML = inputValue.value;
    newTodoLi.className = 'todo_item';

    // Creates new remove button element
    let newRemoveBtn = document.createElement('button');
    newRemoveBtn.innerHTML = 'Remove';
    newRemoveBtn.className = 'removeBtn';

    // Input validation
    if (inputValue.value) {
        newTodoLi.appendChild(newRemoveBtn);
        todos.append(newTodoLi);
        circleEl.style.display = 'block';
        todos.style.display = 'block';
    } else{
        alert('Add a title');
    }

    // Remove from todos
    newRemoveBtn.addEventListener('click',  (e) =>{
        e.target.parentElement.remove();
    });

    inputValue.value = '';
}

addBtn.addEventListener('click', addTodo)

inputValue.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter') {
        addTodo();
    }
});

