document.getElementById("form").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Заповніть всі поля!");
        event.preventDefault();
        return;
    }

    alert("Дякую, " + name + "! Повідомлення відправлено.");

    console.log("Ім'я:", name);
    console.log("Email:", email);
    console.log("Повідомлення:", message);
});