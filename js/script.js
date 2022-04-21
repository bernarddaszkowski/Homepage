{
    function welcome() {
        console.log("Witam deweloperów zaglądających na moją pierwszą stronę.!");
    }
    welcome();

    const tableDisplayOn = () => {
        const buttonName = document.querySelector(".js-buttonName");
        const table = document.querySelector(".table");
        const button = document.querySelector(".table__button");
        table.classList.toggle("table--display");
        if (table.classList.contains("table--display")) {
            buttonName.innerText = "Wyłącz";
        }
        else {
            buttonName.innerText = "Włącz";
        };
    }
    const init = () => {
        const button = document.querySelector(".table__button");
        button.addEventListener("click", tableDisplayOn);
    }

    init();

}

