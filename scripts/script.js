let toDoItems = [];

function renderToDo(toDo) {
    const list = document.querySelector('.js-todo-list');

    const isChecked = toDo.checked ? 'done' : '';
    const node = document.createElement("li");
    node.setAttribute('class', 'todo-item ${isChecked}');
    node.setAttribute('data-key', toDo.id);
    node.innerHTML = `
        <input id="${toDo.id}" type="checkbox"/>
        <label for="${toDo.id}" class="tick js-tick"></label>
        <span>${toDo.text}</span>
        <button class="delete-todo js-delete-todo" href="#delete-icon">
        <img src="./assets/svg/circle-x.svg" alt="Delete"/>        
        </button>
    `;

    list.append(node);
}

function addToDo(text) {
    const toDo = {
        text,
        checked: false,
        id: Date.now()
    };

    toDoItems.push(toDo);
    renderToDo(toDo);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input');

    const text = input.value.trim();
    if (text !== ''){
        addToDo(text);
        input.value = '';
        input.focus();
    }
});

//next to do Mark a task as completed

