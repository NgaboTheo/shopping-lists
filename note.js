
//const addTaskBtn = document.getElementById('addTaskBtn')
const list = document.getElementById('list')
list.textContent = 'TO DO LIST'
list.style.color = 'green'
//list.style.backgroundColor = 'skyblue'
list.style.borderRadius = '10px'
list.style.padding = '2px'
console.log(document.getElementById('taskInput'))

//addTaskBtn.textContent='+ Add Task'
//addTaskBtn.style.fontSize = '20px'
//addTaskBtn.style.background = 'rgba(114, 208, 231, 0.1)';
//document.querySelector

console.log(document.querySelector('h1'))
console.log(document.querySelector('#addTaskBtn'))

console.log(document.querySelectorAll('.container'))

/*
const taskList = document.getElementById('taskList')
addEventListener('click', ()=>{
    const taskInput = document.getElementById('taskInput')
    const taskList = document.getElementById('taskList')


    if(taskInput.value.trim() !== ''){
        
        const li = document.createElement('LI')
        li.textContent = taskInput.value
        taskList.appendChild(li)
        taskInput.value = ''
    }else{
        alert('please enter a task')
    }
})

*/

const addTaskBtn = document.getElementById('addTaskBtn')
addEventListener('click', ()=>{
    const taskInput = document.getElementById('taskInput')
    const taskList = document.getElementById('taskList')
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li')
        li.textContent = taskInput.value
        taskList.appendChild(li)
        taskInput.value=''
    }else{

        alert('please enter a task')
    }
})




