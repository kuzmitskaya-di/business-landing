let inputs = document.querySelectorAll("input[data-rule]");

for (let input of inputs) {
    input.addEventListener("blur", function () {
        let rule = this.dataset.rule;


        switch (rule) {
            case "email":
                let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                let address = document.forms["formNE"].elements["email"].value;
                if (reg.test(address) == false) {
                    alert("Выыедите корректный e-mail!");
                    return false;
                }
                break;
        }

    })
}
