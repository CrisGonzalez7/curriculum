(document).ready(function() {

    $('.ver-mas').toggle(

        // Primer click
        function(e) {
            $('#respuesta-ej5').slideDown();
            $(this).text('Ocultar respuesta');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma

        // Segundo click
        function(e) {
            $('#respuesta-ej5').slideUp();
            $(this).text('Ver respuesta');
            e.preventDefault();
        }

    );

});