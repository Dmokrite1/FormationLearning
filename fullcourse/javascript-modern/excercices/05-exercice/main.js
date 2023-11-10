/*
const todoListElement = document.getElementById('todoList');
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        console.log('https://jsonplaceholder.typicode.com/todos', todos)
        //todos.map(todo => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${todo.userId} - ${todo.id} - ${todo.title} - ${todo.completed === true? 'fait' : 'pas fait'}`;
            //todoListElement.appendChild(listItem);
        });
    })
*/

    /*
    *version corrigé
    const list = document.querySelector("ul");
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
    .then(result => result.map(todo => `<li>${todo.title} - ${todo.completed ? "Fait" : "Pas Fait"}</li>`))
    .then(todos => list.innerHTML = todos.join(''))
    .catch(err => console.error(err));
    */

    /*
    *version élégante avec async
    */
const list = document.querySelector("ul")
async function getTodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    const todo = data.map(t => `<li>${t.userId} - ${t.id} - ${t.title} - ${t.completed? "fait" : "pas fait"}</li>`)
    list.innerHTML = todo.join("")
}

getTodos()