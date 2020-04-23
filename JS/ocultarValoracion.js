$(function(){
    var boton = $("#accionPuntuacion");
    var elemento = $("#rating");

    function ocultarValoracion (){
        if (elemento.is(":visible")){
            elemento.hide();
            boton.html("Mostrar valoracion");
        } else {
            elemento.show();
            boton.html("Ocultar valoracion");
        }
    }
    boton.click(ocultarValoracion);
});