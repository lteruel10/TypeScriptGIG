(()=>{
    console.log('inicio');
    const prom1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject('se termino el time'),10000});

    });
    prom1
    .then(mensaje=>console.log(mensaje))
    .catch(err=>console.warn(err));
    console.log('fin');
    
    
   // setTimeout(function() {location.reload()},10000 );
    })();//FUNCION AUTOINVOCADA CON FLECHA