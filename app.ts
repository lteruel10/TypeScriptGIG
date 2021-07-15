(()=>{
    const sumar =(a:number, b:number):number=>{
        return a+b;
    }
///sin return xq es una sloa linea de codigo
    const sumar2 =(a:number, b:number):number=>a+b;

    const nombre=():string=>'Hola Luis';

    const obtenerSalario=():Promise<string>=>{
        return new Promise((resolve,reject)=>{
            resolve('Fernando'); 

        });
    }
    obtenerSalario().then(a=>console.log(a));

    })();//FUNCION AUTOINVOCADA CON FLECHA