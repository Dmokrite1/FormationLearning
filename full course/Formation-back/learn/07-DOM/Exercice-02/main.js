const taskInput = document.querySelector('#newTask input');
const pushButton = document.querySelector('#push');
const tasksContainer = document.querySelector('#tasks');
const taskForm = document.querySelector('#tasks');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
});

taskInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    
        if (taskText !== '') {
        
            const taskElement = document.createElement('form');
            taskElement.classList.add('task');
            taskElement.style.display = 'flex';
            taskElement.style.justifyContent = 'space-between';
            taskElement.style.backgroundColor = 'white';
            taskElement.style.width = '35%';
            taskElement.style.marginLeft = '500px';
            taskElement.style.border = '1px solid aqua';
            taskElement.style.padding = '10px';
            taskElement.style.borderRadius = '5px';

            taskElement.innerHTML = `
                <span class="taskName">
                    ${taskText}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt">X</i>
                </button>
            `;
        
            const deleteButton = taskElement.querySelector('.delete');
            deleteButton.addEventListener('click', function() {
                taskElement.remove();
            });
        
            tasksContainer.appendChild(taskElement);
            taskInput.value = '';
        }else {
            alert("Please Enter a Task");
    }
}
