(function () {
     let mensaje ='hola';//este mensaje vive ene este scope....function(){}
     if (true){
         let mensaje ='mundo';//este mensaje vive dentro de este otro if(){}
     }
    console.log(mensaje);

    const MENSAJE2 ='hola2';//esi nunca vale cambiar... entonces logico const
    
   console.log(MENSAJE2);

})();//funcion autoinvocada   
///let apunta a un espacio en memoria.