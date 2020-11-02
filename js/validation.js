function validation(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error_message = document.getElementById("error_message");
    let error_message2 = document.getElementById("error_message2");
    let text;

    error_message.style.padding = "10px";
    error_message2.style.padding = "10px";

    if(name.length < 5){
        text = "Имя - 5-15 букв!";
        error_message2.innerHTML = text;
        return false;
    }

    if (email.indexOf("@")){
        text = "Введите Email используя - @";
        error_message.innerHTML = text;
        return false;
    }

}