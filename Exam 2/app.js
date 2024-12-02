console.log("JavaScript loaded and running");

const tasks = [
    {
        name: "Take the dog for a walk",
        description: "You should take your doggie for a walk everyday, so that it can be healthy and happy!",
        image: "assets/img/dogWalking.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString() 
    },
    {
        name: "Read a Book Chapter",
        description: "Spend 30 minutes reading a chapter of your favorite book or a new one you've been wanting to start.",
        image: "assets/img/readBook.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString()
    },
    {
        name: "Grocery Shopping",
        description: "Buy essentials like fruits, vegetables, and pantry staples for the week.",
        image: "assets/img/groceryShopping.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString() 
    },
    {
        name: "Workout Session",
        description: "Get active for at least 30 minutes with a workout of your choice.",
        image: "assets/img/workout.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString()
    },
    {
        name: "Meal Prep",
        description: "Prepare meals in advance to save time during the week.",
        image: "assets/img/mealPrep.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString() 
    },
    {
        name: "Meditate",
        description: "Take 10 minutes to meditate and clear your mind for a fresh start to the day.",
        image: "assets/img/meditate.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString()
    },
    {
        name: "Call a Friend or Family Member",
        description: "Catch up with a friend or family member to strengthen connections.",
        image: "assets/img/family.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString()
    },
    {
        name: "Water the Plants",
        description: "Take care of your plants by giving them some water and checking on their health.",
        image: "assets/img/plants.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString()
    },
    {
        name: "Organize Desk/Workspace",
        description: "Spend 15 minutes organizing your workspace for a more productive environment.",
        image: "assets/img/desk.jpg",
        priorityLevel: 0,
        date: new Date().toLocaleDateString()
    },
];


function loopThroughTasks() {
    const taskGrid = document.getElementById('taskGrid');
    taskGrid.innerHTML = "";

    tasks.forEach(task => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        colDiv.innerHTML = `
            <div class="card shadow-lg">
                <img src="${task.image}" class="card-img-top" alt="${task.name}">
                <div class="card-body">
                    <h5 class="card-title">${task.name}</h5>
                    <p class="card-text">${task.description}</p>

                    <button class="myPriorityBtn btn btn-light">
                        <i class="bi bi-exclamation-triangle"></i> 
                        Priority level: ${task.priorityLevel}
                    </button>

                    <p class="card-text">
                        <i class="bi bi-calendar3"></i> Deadline: ${task.date}
                    </p>

                    <button class="btn btn-danger">
                        <i class="bi bi-trash3"></i> Delete
                    </button>
                    <button class="btn btn-success">
                        <i class="bi bi-check-circle"></i> Done
                    </button>

                </div>
            </div>
        `;  

        taskGrid.appendChild(colDiv);

        const priorityButton = colDiv.querySelector('.myPriorityBtn');
        priorityButton.addEventListener('click', () => {
            if (task.priorityLevel < 5) {
                task.priorityLevel += 1;
            }

            changeColorOfPriorityButton(priorityButton, task.priorityLevel);

            
        })
    });
}

function changeColorOfPriorityButton(button, priorityLevel) {
    if (priorityLevel <= 1) {
        button.className = 'myPriorityBtn btn btn-success';
    } else if (priorityLevel <= 3) {
        button.className = 'myPriorityBtn btn btn-warning';
    } else {
        button.className = 'myPriorityBtn btn btn-danger';
    }
    

    button.innerHTML = `
        <i class="bi bi-exclamation-triangle"></i> 
        Priority level: ${priorityLevel}
    `;
}

function sortTaskByPriority() {
    tasks.sort((a, b) => a.priorityLevel - b.priorityLevel);
    
    loopThroughTasks();

    changeColorOfPriorityButton(button, priorityLevel);
}

document.getElementById('sortButton').addEventListener('click', sortTaskByPriority);

loopThroughTasks();