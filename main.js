//Stworzenie zmiennych globalnych do przechwycenia i edycji elementów HTML
let $todoInput;
let $alertInfo;//Powiadomienie o zdarzeniach na stronie
let $addBtn;
let $ulList;//Lista zadań
let $newTask;//Nowy wiersz zadania
let $notification;//Timer do znikającego powiadomienia o dodaniu zadania 
let $popup;
let $popupInfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;
let $idNumber = 0;

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
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
};

//Dodanie akcji do elementów na stronie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
};

const addNewTask = () => {
    //let notification; Tutaj nie można tego zadeklarować, bo jak dodam zadanie, a potem kliknę dodaj z pustym polem to ta zmienna zostanie zainicjowana na nowo więc nie będę mógł zatrzymać timera uruchomionego za pierwszym razem
    if($todoInput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.textContent = $todoInput.value;
        //$newTask.setAttribute = ('id', `todo-${$idNumber}`);//nie działa :(
        $newTask.id = `todo-${$idNumber}`;
        $ulList.appendChild($newTask);
        $todoInput.value = '';

        $alertInfo.classList.remove('hide');
        $alertInfo.style.color = 'green';
        $alertInfo.textContent = 'Dodano nowe zadanie';

        $notification = setTimeout(() => $alertInfo.classList.add('hide'), 4000);

        createToolsArea();
    } else {
        $alertInfo.classList.remove('hide');
        $alertInfo.style.color = 'red';
        $alertInfo.textContent = 'Najpierw wpisz treść zadania do wykonania';

        clearTimeout($notification);
    }
};

const createToolsArea = () => {
    //Stworzenie, dodanie klasy i podłączenie diva do nowego zadania
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);
    
    //Stworzenie buttonów
    const completeBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    
    //Przypisanie im odpowiednich klas, żeby później się do nich odwoływać
    completeBtn.classList.add('complete');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');
    
    //Wpisanie im wyglądu (tick, edit, cross)
    completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
    editBtn.innerText = `EDIT`;
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
    // innerHTML jest czuły na elementy HTML jak <i itd., a innerText interesuje sie tylko tekstem i omija elementy HTML
    
    //Dodanie wygenerowanych elementów do diva, który jest dodawany na końcu li
    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
};

//W chwili wywoałania addEventListener, event, który w tym przypadku jest 'click' zostaje przekazany jako argument do funkcji, w tym przypadku jest to funkcja checkClick, stąd wiadomo co kryje się za eventem
const checkClick = (event) => {
    //Target focusuje się na tym co kliknąłem i sprawdza gdzie jest najbliższy button, który zawiera klasę complete
    if (event.target.closest('button').classList.contains('complete')) {
        event.target.closest('li').classList.toggle('completed');
        event.target.closest('button').classList.toggle('completed');
    } else if (event.target.closest('button').classList.contains('edit'))  {
        editTask(e);
    } else {
        console.log("usuń");
    }
};

const editTask = () => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $
    $popup.style.display = 'flex';
};

const closePopup = () => {
    $popup.style.removeProperty('display');
};

document.addEventListener('DOMContentLoaded', main); 