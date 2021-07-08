"use strict";
(function () {
    "use strict";
    (function () {
        //function activar(quien:string, objeto:string){ objeto es obligatorio
        //los objetos deben ir agregados de la siguietne manera
        //1 obligatorios, 2 ?opcionales y3 valores por defecto
        function activar(quien, momento, objeto) {
            if (objeto === void 0) { objeto = 'batiseñal'; }
            if (momento) {
                console.log(quien + " activ\u00F3 la " + objeto + " en la " + momento);
            }
            else {
                console.log(quien + " activ\u00F3 la " + objeto);
            }
        }
        activar('Gordon', 'brithney señal', 'en la tarde');
    })(); //funcion autoinvocada   
    ///let apunta a un espacio en memoria.
})(); //funcion autoinvocada   
///let apunta a un espacio en memoria.
