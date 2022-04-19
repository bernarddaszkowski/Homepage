{
function welcome() {
    console.log("Witam deweloperów zaglądających na moją pierwszą stronę.!");    
}
welcome();

const button = document.querySelector(".table__button");
const table = document.querySelector(".table");
const buttonName = document.querySelector(".js-buttonName");

const tableDisplayOn = () => {
    table.classList.toggle("table--display");

    if (table.classList.contains("table--display")) {
        buttonName.innerText = "Wyłącz";
    }
    else {
        buttonName.innerText = "Włącz";
    };
}

button.addEventListener("click", tableDisplayOn);
}

