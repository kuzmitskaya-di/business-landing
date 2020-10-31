function validation(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error_message = document.getElementById("error_message");
    let text;

    error_message.style.padding = "10px";

    if(name.length < 5){
        text = "Имя - 5-15 букв!";
        error_message.innerHTML = text;
        return false;
    }
    if(name.length > 15){
        text = "Имя - 5-15 букв!";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@")){
        text = "Введите Email используя - @";
        error_message.innerHTML = text;
        return false;
    }

}