let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// Завантаження з LocalStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Відображення
function renderTasks() {
    taskList.innerHTML = "";

    // сортування по даті (нові зверху)
    tasks.sort((a, b) => b.date - a.date);

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;

        checkbox.addEventListener("change", () => {
            task.done = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        let span = document.createElement("span");
        span.textContent = task.text;

        if (task.done) {
            span.classList.add("done");
        }

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

// Збереження
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Додавання
addBtn.addEventListener("click", () => {
    let text = taskInput.value.trim();

    if (text === "") {
        alert("Введіть завдання!");
        return;
    }

    let newTask = {
        text: text,
        done: false,
        date: Date.now()
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    taskInput.value = "";
});

// Завантаження при старті
renderTasks();