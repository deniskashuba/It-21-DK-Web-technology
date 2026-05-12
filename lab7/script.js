// Кнопка (клік)
document.getElementById("btn").addEventListener("click", function() {
    alert("Кнопка натиснута!");
});

// Коло
let circle = document.getElementById("circle");
let startBtn = document.getElementById("start");

// запуск анімації
startBtn.addEventListener("click", function() {
    circle.classList.add("animate");
});

// зміна кольору кожні 13 секунд
setInterval(function() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    circle.style.backgroundColor = randomColor;
}, 13000);