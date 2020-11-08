function select() {
    const select = document.querySelector(".select");
    const selectItem = document.querySelectorAll(".select__item");

    select.addEventListener("click", (event) => {
        selectToggle();
        selectItem.forEach(item => {
            if (item === event.target) {
                selectChoose(item);
            }
        })
    });

    function selectToggle() {
        select.classList.toggle("is-active")
    }

    function selectChoose(item) {
        const currentText = item.closest(".select").querySelector(".select__current");
        currentText.innerText = item.innerText;
    }
}

select();


