let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
};

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask)
};

const addNewTask = () => {
    if($todoInput !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = $todoInput.value;
        $ulList.appendChild(listItem);
    }
};

document.addEventListener('DOMContentLoaded', main); 