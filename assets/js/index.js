// esta sección hacer cambiar el fondo header al hacer scroll, quitar también la propriedad 'text-light' (color blanco) de los enlaces
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
        $("header").addClass("scrolled");
        $(".nav-link").removeClass("text-light");
        $(".navbar-brand").removeClass("text-light");

    } else {
        $("header").removeClass("scrolled");
        $(".nav-link").addClass("text-light");
        $(".navbar-brand").addClass("text-light");
        $(".navbar-brand").css("color", "#2EA5AF");
    };
});