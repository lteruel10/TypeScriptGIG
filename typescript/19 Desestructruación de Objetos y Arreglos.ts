(()=>{

 
     
  

    const AVENGER= {
        nombre:"Steve",
        clave:"Capitan America",
        poder:'Droga'
    }
    console.log(AVENGER.nombre);
    console.log(AVENGER.clave);
    console.log(AVENGER.poder);


    ///deserstruturacion de objetos
    const {nombre, clave,poder}=AVENGER;
    console.log(nombre);
    console.log(clave);
    console.log(poder);

//detnro de una funcion
    const extraer=(AVENGER:any)=>{
        const {nombre, clave,poder}=AVENGER;
        console.log('\n')
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    
    }
    extraer(AVENGER);

//detnro de una funcion
const extraer2=({nombe,poder, clave}:any)=>{//extraer el nombre y poder de lo que sea que estes mandando
    ////////woooooooow super interesante///[]son corchetes.... {}son llaves para otros objetos
    console.log('\n')
    console.log(nombre);
    console.log(poder);

}
extraer2(AVENGER);


///desestructuracion de arreglos
const avengerA:string[]=['Thor','ironMan','Spiderman']
console.log('\n')
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
const[,,s] =avengerA;//solo se agregan las comas de los elementos que se van a obviar
console.log('\n')
console.log(s);

const extraerArr = (avengerA: string[])=>{
    console.log('\n desestructurar arreglo en flecha')
    console.log(avengerA[0]);
    console.log(avengerA[1]);
    console.log(avengerA[2]);

}
extraerArr(avengerA);

const extraerA2=([thor,ironman,spiderman]:string[])=>{
    console.log('\n desestructurar arreglo en FLECHA')
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);

}
extraerA2(avengerA);



   // setTimeout(function() {location.reload()},5000// Interval time
   // );




})();//FUNCION AUTOINVOCADA CON FLECHA