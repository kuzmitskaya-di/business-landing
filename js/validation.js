let inputs = document.querySelectorAll("input[data-rule]");

for (input of inputs) {
        input.addEventListener("blur", function () {
                let rule = this.dataset.rule;
                console.log(rule);
        });
}
