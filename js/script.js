//SELECTION do DOM
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

///EXCUTION EVENTS  
todoButton.addEventListener('click', addTodo)//Records the functions of the events that happen on the button
todoList.addEventListener('click', deleteAndCheck)

///FUNCTIONS 
function addTodo(event){
    event.preventDefault()

    const todoDiv = document.createElement('div')//1-criar'createElement'
    todoDiv.classList.add('todo')//2-garda as classes'classList'

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-list')
    todoLi.innerText = todoInput.value//'innerText' add texto na div
    
    todoInput.value = ''

    todoDiv.appendChild(todoLi)//'appendChild'add to the son

    ///criando Button e add na Div
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('completed-btn')
    todoDiv.appendChild(completedButton)
    
    ///button de deletar
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)///add elementos na ul na class
}

//delete
function deleteAndCheck(e) {

    const item = e.target
    const todo = item.parentElement //remove the closest relative
///
    if(item.classList[0] === 'trash-btn'){
        todo.classList.add('fall')
        todo.addEventListener('transitionend', () =>{ //transition event
            todo.remove()
        })
    }

    if(item.classList[0] === 'completed-btn') {
        todo.classList.toggle('completed')
    }
}