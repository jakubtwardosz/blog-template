let toDoItems = [];

function addToDo(text)  {
    const toDo = {
        text,
        checked: false,
        id: Date.now()
    };

    toDoItems.push(toDo);
    console.log(toDoItems);
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
