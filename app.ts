(function () {
    function saludar(nombre:string) {
        console.table('Hola ' + nombre+ ', como esta papa?'); // Hola Logan
    }
    
    
    const wolverine = {
        nombre: "Logan"
    };
    
    
    saludar(wolverine.nombre);
})();//funcion autoinvocada
