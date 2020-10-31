

//открытие селекта
document.getElementById("active").addEventListener("click", function (){
    document.querySelector(".select__body").style.display = "block";



});

//меняем стили
document.getElementById("active").addEventListener("click", function (){
    document.getElementById("active").classList.remove("select__header");
    document.getElementById("active").classList.add("click");
    document.getElementById("icon1").classList.remove("select__icon");
    document.getElementById("icon1").classList.add("icon");

});


//клик по элементам и закрытие селекта
document.getElementById("item").addEventListener("click", function (){
    document.querySelector(".select__body").style.display = "none";
});
document.getElementById("item1").addEventListener("click", function (){
    document.querySelector(".select__body").style.display = "none";
});
document.getElementById("item2").addEventListener("click", function (){
    document.querySelector(".select__body").style.display = "none";
});
document.getElementById("item3").addEventListener("click", function (){
    document.querySelector(".select__body").style.display = "none";
});
document.getElementById("item4").addEventListener("click", function (){
    document.querySelector(".select__body").style.display = "none";
});


//выбираем элемент
document.getElementById("active").addEventListener("click", function (){
   document.getElementById("item").addEventListener("click", function () {
       document.getElementById("active").innerHTML = "Set ut perspiciatis"
   });

});

document.getElementById("active").addEventListener("click", function (){
    document.getElementById("item1").addEventListener("click", function () {
        document.getElementById("active").innerHTML = "Nemo enim ipsam"
    });

});

document.getElementById("active").addEventListener("click", function (){
    document.getElementById("item2").addEventListener("click", function () {
        document.getElementById("active").innerHTML = "Et harum quidem"
    });
});

document.getElementById("active").addEventListener("click", function (){
    document.getElementById("item3").addEventListener("click", function () {
        document.getElementById("active").innerHTML = "Temporibus autem"
    });
});

document.getElementById("active").addEventListener("click", function (){
    document.getElementById("item4").addEventListener("click", function () {
        document.getElementById("active").innerHTML = "Itaque earum rerum"
    });

});



