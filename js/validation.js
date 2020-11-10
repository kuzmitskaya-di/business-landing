let inputs = document.querySelectorAll("input[data-rule]");

for (let input of inputs) {
    input.addEventListener("blur", function () {
        let rule = this.dataset.rule;


        switch (rule) {
            case "email":
                let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                let addressE = document.forms["formNE"].elements["email"].value;
                if (regEmail.test(addressE) == false) {
                    alert("Выыедите корректный e-mail!");
                    return false;
                }
                break;
            case "name":
                let regName = /^[A-Za-z]+$/;
                let addressN = document.forms["formNE"].elements["name"].value;
                if (regName.test(addressN) == false) {
                    alert("Выыедите корректное имя!");
                    return false;
                }
                if(addressN.length <=5 || addressN.length >=15) {
                    alert("Выыедите корректное имя!");
                    return false;
                }
                break;
        }

    })
}
