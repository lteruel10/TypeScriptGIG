"use strict";
(function () {
    var mensaje = 'hola'; //este mensaje vive ene este scope....function(){}
    if (true) {
        var mensaje_1 = 'mundo'; //este mensaje vive dentro de este otro if(){}
    }
    console.log(mensaje);
    var MENSAJE2 = 'hola2'; //esi nunca vale cambiar... entonces logico const
    console.log(MENSAJE2);
})(); //funcion autoinvocada   
///let apunta a un espacio en memoria.
