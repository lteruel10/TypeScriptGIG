(()=>{
///CLASES 
class Avenger{
  nombre:string='sin  nombre';// se deben inicializar en el constructor
  equipo:string;
  nombreReal:string;
  puedePelear:boolean;
  peleasGanadas:number;
}//Avenger

const antman=new Avenger();
console.log(antman);

  setTimeout(function() {location.reload()},30000 );
    })();//FUNCION AUTOINVOCADA CON FLECHA