const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

function paintToDo (newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    
    li.appendChild(span);
    span.innerText = newTodo;
    
    toDoList.appendChild(li);

}



function hadleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",hadleToDoSubmit);