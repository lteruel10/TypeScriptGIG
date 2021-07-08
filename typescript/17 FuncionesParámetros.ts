(function () {
    "use strict";
    (function () {
           //function activar(quien:string, objeto:string){ objeto es obligatorio
           //los objetos deben ir agregados de la siguietne manera
               //1 obligatorios, 2 ?opcionales y3 valores por defecto
            function activar(quien:string, 
                             momento?:string,
                             objeto:string='batiseñal'){       //objeto ya no es obligatorio 
                if(momento){
                    console.log(`${quien} activó la ${objeto} en la ${momento}`);
                } else{
                    console.log(`${quien} activó la ${objeto}`);
                }

            }
            activar('Gordon','brithney señal','en la tarde');
        
    })(); //funcion autoinvocada   
    ///let apunta a un espacio en memoria.
    
})();//funcion autoinvocada   
///let apunta a un espacio en memoria.