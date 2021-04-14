//Stworzenie zmiennych globalnych do przechwycenia i edycji elementów HTML
let $todoInput;
let $alertInfo;//Powiadomienie o zdarzeniach na stronie
let $addBtn;
let $ulList;//Lista zadań
let $newTask;//Nowy wiersz zadania
let $notification;//Znikające powiadomienie o dodaniu zadania 

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

//Pobranie elementów ze strony
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
};

//Dodanie akcji do elementów na stronie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask)
    
};

const addNewTask = () => {
    //let notification; Tutaj nie można tego zadeklarować, bo jak dodam zadanie, a potem kliknę dodaj z pustym polem to ta zmienna zostanie zainicjowana na nowo więc nie będę mógł zatrzymać timera uruchomionego za pierwszym razem
    if($todoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.textContent = $todoInput.value;
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.classList.remove('hide');
        $alertInfo.style.color = 'green';
        $alertInfo.textContent = 'Dodano nowe zadanie';
        $notification = setTimeout(() => $alertInfo.classList.add('hide'), 2000);
    } else {
        $alertInfo.classList.remove('hide');
        $alertInfo.style.color = 'red';
        $alertInfo.textContent = 'Najpierw wpisz treść zadania do wykonania';
        clearTimeout($notification);
    }
};

document.addEventListener('DOMContentLoaded', main); 