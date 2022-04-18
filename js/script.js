console.log("Cześć!");

let button = document.querySelector(".table__button");
let table = document.querySelector(".table");
let buttonName = document.querySelector(".js-buttonName");

button.addEventListener("click", () => {
    table.classList.toggle("table--display");

    if (table.classList.contains("table--display")) {
        buttonName.innerText = "Wyłącz";
    }
    else {
        buttonName.innerText = "Włącz";
    }
});