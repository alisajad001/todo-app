let inputValue = document.querySelector('input');
const addBtn = document.querySelector('.addBtn');
let todos = document.querySelector('#todos');

function addTodo() {
    // Creates new (li) element
    let newTodoLi = document.createElement('li');
    newTodoLi.innerHTML = inputValue.value;

    // Creates new remove button element
    let newRemoveBtn = document.createElement('i');
    newRemoveBtn.className = 'fa-solid fa-trash';

    // Input validation
    if (inputValue.value) {
        newTodoLi.appendChild(newRemoveBtn);
        todos.append(newTodoLi);
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

