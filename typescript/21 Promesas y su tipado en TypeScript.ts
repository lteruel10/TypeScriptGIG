(()=>{
    const retirarDinero=(montoRetirar:number):Promise<number> => {
        let dineroActual=1000;
        return new Promise((resolve,reject)=>{
            if (montoRetirar>dineroActual){
                reject('No hay fondos suficientesxxx');
             }else{
                 dineroActual-=montoRetirar;
                 resolve(dineroActual)
             }
        });
    };  
    retirarDinero(1500)
    .then(montoActual=>console.log(`me quedad ${montoActual}`))
   // .catch(err=>console.warn(err));
   .catch(console.warn);////mas reducido el codigo woooooooooo

  setTimeout(function() {
      location.reload()},30000 );
    })();//FUNCION AUTOINVOCADA CON FLECHA