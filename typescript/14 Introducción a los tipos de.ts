(function () {
    let mensaje:string ='hola';//este mensaje vive ene este scope....function(){}
    let numero:number=123;
    let booleano:boolean=true;
    let hoy:Date=new Date();
    

    let cualquiercosa;//evitar trabajar con any
    cualquiercosa=mensaje;
    cualquiercosa=booleano;
    cualquiercosa=numero;
    cualquiercosa=hoy;

    let cualquiercosa2:string | number |Date;//una variable con dos tipos... interesante
    cualquiercosa2=mensaje;
    //cualquiercosa2=booleano;
    cualquiercosa2=numero;
    cualquiercosa2=hoy;


    let spiderman={
        nombre:'Peter',
        edad:30
    };

    spiderman={
        nombre:'Juan',
        edad:30
    };
})();//funcion autoinvocada   
///let apunta a un espacio en memoria.