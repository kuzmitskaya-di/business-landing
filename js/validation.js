window.onload = function validation() {

    const inputs = document.querySelectorAll("input[data-rule]");

    function valid(param) {
        return document.forms["form-input"].elements[param].value;
    }

    for (let input of inputs) {
        input.addEventListener("blur", function () {
            const rule = this.dataset.rule;

            switch (rule) {

                case "email":
                    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if (regEmail.test(valid("email")) === false) {
                        alert("Введите корректный e-mail!");
                        return false;
                    }
                    break;
                case "name":
                    const regName = /^[A-Za-zА-Яа-я-ё]+$/u;
                    let nameValue = valid("name");
                    if (regName.test(nameValue) === false || nameValue.length <= 5 || nameValue.length >= 15) {
                        alert("Введите корректное имя!");
                        return false;
                    }
                    break;
            }

        })
    }
}