"use strict";
(() => {
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
    class Avenger {
        //nombre:string='sin  nombre';// se deben inicializar en el constructor
        /*   nombre:string;
           equipo:string;
           nombreReal:string;
           puedePelear:boolean;
           peleasGanadas:number;*/
        //constructor
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    } //Avenger
    const antman = new Avenger('Batman', 'Salon de la Justicia');
    console.log(antman);
    setTimeout(function () { location.reload(); }, 30000);
})(); //FUNCION AUTOINVOCADA CON FLECHA
