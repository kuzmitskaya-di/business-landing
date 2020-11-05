let inputs = document.querySelectorAll("input[data-rule]");

for (input of inputs) {
        input.addEventListener("blur", function () {
                let rule = this.dataset.rule;
                let value = this.value;
                let check;

                switch (rule) {
                        case "email":

                        break;
                }

                if (check) {
                        document.getElementsByTagName("input").add.style.border = "1px solid green";
                }
        });
}
