(function () {

function getEdad(){
    return 100+100+300;
}    
const nombre="Luis";
const apellido="Teruel"
const edad=33;

//const salida=nombre+" "+apellido+" ("+edad+")";
//console.log(salida);

//templates literales 
//const salida=`${nombre} ${apellido} (${edad})`;//son apostorfes
const salida=`${nombre} 
${apellido} 
(${getEdad()})`;//son apostorfes
console.log(salida)  
})();//funcion autoinvocada   
///let apunta a un espacio en memoria.