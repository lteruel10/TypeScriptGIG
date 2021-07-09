(function () {
    function mifuncion2(a:string){
        return a;
    }
////son la misma funcion
// la ventaja de esta forma es que tambien se pueden hacer fuciones const y asi no reescribir
//el contenido la funcion
    const miFuncionNormal=function(a:string){
        return a.toUpperCase();
    }

    //FUNCION DE FLECHA
    const miFuncionF=(a:string)=>{
        return a.toUpperCase();
    }
    //SI SOLO HAY UNA LINEA VEAMOS => 
    const miFuncionFlecha=(a:string)=> a.toUpperCase();

    console.log(miFuncionNormal('normal'));
    console.log(miFuncionFlecha('flecha'));


    const sumarNormal=function (a:number,b:number){
        return a+b;
    }
    const sumarFlecha=(a:number,b:number)=>a+b;
    console.log(sumarNormal(10,10));
    console.log(sumarFlecha(10,10));

   ///otro mas FUNCIONES DE FLEFCHA NO MODIFICAN A LAS FUNCIONES DE THIS
   const hulk={
        nombre: 'Hulk',
        smash(){
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);             
            }, 1000);
        }
    }
    hulk.smash();


})();//funcion autoinvocada   
///let apunta a un espacio en memoria.