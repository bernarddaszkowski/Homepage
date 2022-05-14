{
    function welcome() {
        console.log("Witam deweloperów zaglądających na moją pierwszą stronę.!");
    }
    welcome();

    const tableDisplayOn = () => {
        const buttonName = document.querySelector(".js-buttonName");
        const table = document.querySelector(".js-table");
        const button = document.querySelector(".js-table__button");
        table.classList.toggle("table-visible");
        if (table.classList.contains("table-visible")) {
            buttonName.innerText = "Wyłącz";
        }
        else {
            buttonName.innerText = "Włącz";
        };
    }
    const init = () => {
        const button = document.querySelector(".js-table__button");
        button.addEventListener("click", tableDisplayOn);
    }

    init();

}

