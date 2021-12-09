const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const todofomr = document.querySelector("#todo-form")


const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KYE = "userName"

function paintGreetings(userName){
    greeting.innerText = `Hello ${userName} :)`
    greeting.classList.remove(HIDDEN_CLASSNAME)
    todofomr.classList.remove(HIDDEN_CLASSNAME)
}

function onLoginSubmit(event){
    event.preventDefault()
    const userName = loginInput.value
    localStorage.setItem(USERNAME_KYE, userName)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(userName)
}

const savedUserName = localStorage.getItem(USERNAME_KYE)
if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
}else{
    paintGreetings(savedUserName)
}