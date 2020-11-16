let inputs = document.querySelectorAll("input[data-rule]");

for (let input of inputs) {
    input.addEventListener("blur", function () {
        let rule = this.dataset.rule;



        switch (rule) {
            case "email":
                const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                let addressE = document.forms["form-input"].elements["email"].value;
                if (regEmail.test(addressE) == false) {
                    alert("Введите корректный e-mail!");
                    return false;
                }
                break;
            case "name":
                const regName = /^[A-Za-z]+$/;
                let addressN = document.forms["form-input"].elements["name"].value;
                if (regName.test(addressN) == false) {
                    alert("Введите корректное имя!");
                    return false;
                }
                if(addressN.length <=5 || addressN.length >=15) {
                    alert("Введите корректное имя!");
                    return false;
                }
                break;
        }

    })
}