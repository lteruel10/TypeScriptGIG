(()=>{

 /* ///CLASES 
class Avenger{
  //nombre:string='sin  nombre';// se deben inicializar en el constructor
  nombre:string;
  equipo:string;
  nombreReal:string;
  puedePelear:boolean;
  peleasGanadas:number;
//constructor
  constructor(nombre:string,equipo:string){
    this.nombre=nombre;
    this.equipo=equipo;
    this.nombre=nombre;
    this.nombre=nombre;
  }
}//Avenger*/

  ///CLASES 
  class Avenger{
    //nombre:string='sin  nombre';// se deben inicializar en el constructor
 /*   nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean;
    peleasGanadas:number;*/

  //constructor
  constructor(public nombre:string,
    public equipo:string,
      public nombreReal?:string,
      public puedePelear?:boolean,
      public peleasGanadas:number=0 ){
   
    }
  }//Avenger

const antman=new Avenger('Batman','Salon de la Justicia');
console.log(antman);

  setTimeout(function() {location.reload()},30000 );
    })();//FUNCION AUTOINVOCADA CON FLECHA