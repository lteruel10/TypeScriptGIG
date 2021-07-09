"use strict";
(function () {
    var AVENGER = {
        nombre: "Steve",
        clave: "Capitan America",
        poder: 'Droga'
    };
    console.log(AVENGER.nombre);
    console.log(AVENGER.clave);
    console.log(AVENGER.poder);
    ///deserstruturacion de objetos
    var nombre = AVENGER.nombre, clave = AVENGER.clave, poder = AVENGER.poder;
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    //detnro de una funcion
    var extraer = function (AVENGER) {
        var nombre = AVENGER.nombre, clave = AVENGER.clave, poder = AVENGER.poder;
        console.log('\n');
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    };
    extraer(AVENGER);
    //detnro de una funcion
    var extraer2 = function (_a) {
        var nombe = _a.nombe, poder = _a.poder, clave = _a.clave;
        ////////woooooooow super interesante///[]son corchetes.... {}son llaves para otros objetos
        console.log('\n');
        console.log(nombre);
        console.log(poder);
    };
    extraer2(AVENGER);
    ///desestructuracion de arreglos
    var avengerA = ['Thor', 'ironMan', 'Spiderman'];
    console.log('\n');
    console.log(avengerA[0]);
    console.log(avengerA[1]);
    console.log(avengerA[2]);
    ///desestructurar arreglo
    //const[thor,ironman,spiderman] =avengerA;///[]son corchetes.... {}son llaves para otros objetos
    /*const[t,i,s] =avengerA;///[]son corchetes.... {}son llaves para otros objetos
    console.log('\n')
    console.log(t);
    console.log(i);
    console.log(s);*/
    //si solo interesa un elemento
    var s = avengerA[2]; //solo se agregan las comas de los elementos que se van a obviar
    console.log('\n');
    console.log(s);
    var extraerArr = function (avengerA) {
        console.log('\n desestructurar arreglo en flecha');
        console.log(avengerA[0]);
        console.log(avengerA[1]);
        console.log(avengerA[2]);
    };
    extraerArr(avengerA);
    var extraerA2 = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log('\n desestructurar arreglo en FLECHA');
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerA2(avengerA);
    // setTimeout(function() {location.reload()},5000// Interval time
    // );
})(); //FUNCION AUTOINVOCADA CON FLECHA
