"use strict";
(() => {
    ///CLASES 
    class Avenger {
        constructor() {
            this.nombre = 'sin  nombre'; // se deben inicializar en el constructor
        }
    } //Avenger
    const antman = new Avenger();
    console.log(antman);
    setTimeout(function () { location.reload(); }, 30000);
})(); //FUNCION AUTOINVOCADA CON FLECHA
