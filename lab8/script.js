const tableBody = document.getElementById("tableBody");
const refreshBtn = document.getElementById("refreshBtn");
const addBtn = document.getElementById("addBtn");

// 🔹 Завантаження даних
function loadTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => {
            if (!response.ok) {
                throw new Error("Помилка завантаження");
            }
            return response.json();
        })
        .then(data => {
            tableBody.innerHTML = "";

            data.forEach(todo => {
                let row = document.createElement("tr");

                row.innerHTML = `
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed ? "Виконано" : "Не виконано"}</td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            alert("Помилка: " + error.message);
        });
}

// 🔹 Кнопка оновлення
refreshBtn.addEventListener("click", loadTodos);

// 🔹 Додавання нового запису
addBtn.addEventListener("click", function() {
    let input = document.getElementById("todoInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Введіть текст!");
        return;
    }

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>-</td>
        <td>${value}</td>
        <td>Новий</td>
    `;

    tableBody.appendChild(row);

    input.value = "";
});

// 🔹 Автозавантаження при відкритті
loadTodos();