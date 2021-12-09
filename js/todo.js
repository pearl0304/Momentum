const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

let toDos = []
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos()
  
}

function paintToDo (newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText="✔"
    button.addEventListener("click", deleteToDo)
    
    li.appendChild(button)
    li.appendChild(span)
    toDoList.appendChild(li)
}

function handleToDoSubmit(e){
    e.preventDefault()
    const newTodo =  toDoInput.value
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    if(toDos.length > 4 ){
        alert('You can write 5 important task')
        return false
    } 
    else{
        toDos.push(newTodoObj)
        paintToDo(newTodoObj)
        saveToDos()
    }
}
toDoForm.addEventListener("submit", handleToDoSubmit)


// 함수 실행
const savedToDos = localStorage.getItem(TODOS_KEY) 

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}



