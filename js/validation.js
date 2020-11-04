(function() {
        (".validateBtn").on("click", validate);

        // Validate email
        function validateEmail(email) {
                let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                return re.test(String(email).toLowerCase());
        }
        function sendForm() {
                (".error_email").text("Данные введены верно").fadeIn();
        }
        function validate() {
                let email = (".form_email").val();
                let error = (".error_email");
                error.text("");

                if (validateEmail(email)) {
                        error.fade();
                        sendForm();
                } else {
                        error.fadeIn();
                        error.text(" Email введён не верно!");
                }
                return false;
        }
});

