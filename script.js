const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

const tareasTotal = document.getElementById('item-count')
const tareasNoResueltas = document.getElementById('unchecked-count')
const lista = document.getElementById("todo-list");
let conteoNoRealizadas = 0;
let conteoTotal = 0;


function addTodo() {
  const li = document.createElement('li');
  li.className = classNames.TODO_ITEM;
  lista.appendChild(li);
  let tarea = prompt('Ingresar nombre de la tarea');
  const span = document.createElement('span');
  span.className = classNames.TODO_TEXT;
  span.innerHTML = tarea;
  const checkbox = document.createElement('input');
  checkbox.onchange = cambioCheckBox
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.type = 'checkbox';
  li.appendChild(span);
  li.appendChild(checkbox);
  conteoTotal++;
  conteoNoRealizadas++;
  renderContadores();
}

function cambioCheckBox(){
  if(this.checked){
    conteoNoRealizadas--;
  }else{
    conteoNoRealizadas++;
  }
  renderContadores();
}

function renderContadores(){
  tareasTotal.innerHTML = conteoTotal;
  tareasNoResueltas.innerHTML = conteoNoRealizadas;
}