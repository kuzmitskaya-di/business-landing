$(".mobile-menu").on("click", function (e) {
   e.preventDefault();
   $(".menu-btn").toggleClass("burger-active");
   $(".nav").toggleClass("active");
});