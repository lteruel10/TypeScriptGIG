(()=>{



///sin inteface si hay mil funciones mil cambios.... horores
/*    const enviarMision=(xmen:{nombre:string})=>{
        console.log(`enviando a ${xmen.nombre} a la mision`);
    }
    const regresarCuartel=(xmen:{nombre:string})=>{
        console.log(`enviando a ${xmen.nombre} a la mision`);
    }
    
    const wolverine={
        nombrex:'Logan',
        edad:60
    }
    
    */
//con interface 
interface Xmen{ //reglas que cumpla un bojeto apra que use un tipo
    nombre:string;
    edad:number;
    poder?:string;//el simbolo ? lo hace opcional
}
const enviarMision=(xmen:Xmen)=>{
    console.log(`enviando a ${xmen.nombre} a la mision`);
}
const regresarCuartel=(xmen:Xmen)=>{
    console.log(`traer a ${xmen.nombre} al cuartel`);
}    
    const wolverine:Xmen={
        nombre:'Logan',
        edad:60
        
    }

    enviarMision(wolverine);
    regresarCuartel(wolverine);


  setTimeout(function() {location.reload()},30000 );
    })();//FUNCION AUTOINVOCADA CON FLECHA