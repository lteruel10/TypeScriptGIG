"use strict";
(function () {
    var mensaje = 'hola'; //este mensaje vive ene este scope....function(){}
    var numero = 123;
    var booleano = true;
    var hoy = new Date();
    var cualquiercosa; //evitar trabajar con any
    cualquiercosa = mensaje;
    cualquiercosa = booleano;
    cualquiercosa = numero;
    cualquiercosa = hoy;
    var cualquiercosa2; //una variable con dos tipos... interesante
    cualquiercosa2 = mensaje;
    //cualquiercosa2=booleano;
    cualquiercosa2 = numero;
    cualquiercosa2 = hoy;
    var spiderman = {
        nombre: 'Peter',
        edad: 35
    };
    spiderman = {
        nombre: 'Juan',
        edad: 30
    };
})(); //funcion autoinvocada   
///let apunta a un espacio en memoria.
