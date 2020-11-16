let inputs = document.querySelectorAll("input[data-rule]");

for (let input of inputs) {
    input.addEventListener("blur", function () {
        let rule = this.dataset.rule;



        switch (rule) {

            case "email":
            case "name":
                function valid(param) {
                    return document.forms["form-input"].elements[param].value;
                }
                const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if (regEmail.test(valid("email")) === false) {
                    alert("Введите корректный e-mail!");
                    return false;
                }
                const regName = /^[A-Za-z]+$/;
                if (regName.test(valid("name")) === false && valid("name").length >=5 && valid("name").length <=15 ) {
                    alert("Введите корректное имя!");
                    return false;
                }
                break;
        }

    })
}