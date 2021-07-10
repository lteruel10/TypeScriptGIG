"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`enviando a ${xmen.nombre} a la mision`);
    };
    const regresarCuartel = (xmen) => {
        console.log(`traer a ${xmen.nombre} al cuartel`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarCuartel(wolverine);
    setTimeout(function () { location.reload(); }, 30000);
})(); //FUNCION AUTOINVOCADA CON FLECHA
