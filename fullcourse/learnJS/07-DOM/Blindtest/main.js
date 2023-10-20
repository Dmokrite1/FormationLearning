document.addEventListener('DOMContentLoaded', function () {
    const blindTestContainer = document.getElementById('blindTestContainer');
    const badPeoples = [
        {
            name: "Enzo",
            compter: 0
        },
        {
            name: "Amand",
            compter: 0
        },
        {
            name: "Greg",
            compter: 0
        },
        {
            name: "Amaury",
            compter: 0
        },
        {
            name: "Max",
            compter: 0
        },
        {
            name: "Denis",
            compter: 0,
        },
        {
            name: "Adrien",
            compter: 0,
        },
        {
            name: "Franck",
            compter: 0,
        },
        {
            name: "Steve",
            compter: 0,
        },
        {
            name: "Bruno",
            compter: 0,
        },
        {
            name: "Audrey",
            compter: 0,
        },
    ];

    function createPerson(person) {
        const personDiv = document.createElement('div');
        personDiv.classList.add('person');

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('person-name');
        nameDiv.textContent = person.name;

        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('person-score');
        scoreDiv.textContent = person.compter;

        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.addEventListener('click', () => {
            person.compter++;
            scoreDiv.textContent = person.compter;
        });

        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.addEventListener('click', () => {
            if (person.compter > 0) {
                person.compter--;
                scoreDiv.textContent = person.compter;
            }
        });

        personDiv.appendChild(nameDiv);
        personDiv.appendChild(decrementButton);
        personDiv.appendChild(scoreDiv);
        personDiv.appendChild(incrementButton);
        blindTestContainer.appendChild(personDiv);
    }

    badPeoples.forEach(person => {
        createPerson(person);
    });
});


/* créer une div badPeoples
document.getelementbyid('badPeoples')
for(let dude of badPeoples){
    cont markup = `
    <ul>
    ${badPeoples.map(dude => `
    <li>
    ${dude.name}<button onclick="minus(${index}">-</button> <button onclick="plus(${index}">+</button>
    </li>`).join("")}
    </ul>`;

    function minus(id){
        badPeoples[id].compter --;
        document.querySelector("#compter"+id).innerHTML = badPeoples[id].compter;
    }
    function plus(id){
        badPeoples[id].compter ++;
        document.querySelector("#compter"+id).innerHTML = badPeoples[id].compter;
    }
}

badPeoples.innerHTML = markup;

*/