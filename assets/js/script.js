// Ocultar menu en mobile al hacer clic en sección
$(".nav-link").click(
    function() {
        if ($("#navbarNav").hasClass("show")) {
            $("#boton-mobile").click();
        }
    }
);

// Ver más, ver menos
$(".ver-mas, .ver-menos").click(
    function() {
        $(".ver-mas").toggle();
        $(".ocultar").toggle("slow");
    }
);