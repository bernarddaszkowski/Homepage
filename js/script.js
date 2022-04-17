console.log("Cześć!");

let button = document.querySelector(".article__buttonTable");
let table = document.querySelector(".article__table");
let buttonName = document.querySelector(".article__buttonName");

button.addEventListener("click", () => {
    table.classList.toggle("article__div");

    if (table.classList.contains("article__div")) {
        buttonName.innerText = "Wyłącz";
    }
    else {
        buttonName.innerText = "Włącz";
    }
});