"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = "Luis";
    var apellido = "Teruel";
    var edad = 33;
    //const salida=nombre+" "+apellido+" ("+edad+")";
    //console.log(salida);
    //templates literales 
    //const salida=`${nombre} ${apellido} (${edad})`;//son apostorfes
    var salida = nombre + " \n" + apellido + " \n(" + getEdad() + ")"; //son apostorfes
    console.log(salida);
})(); //funcion autoinvocada   
///let apunta a un espacio en memoria.
