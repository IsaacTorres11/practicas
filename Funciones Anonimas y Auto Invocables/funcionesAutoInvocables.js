// Funcion Anonima Auto Invocable (cuerpo)

(function(){
    console.log('Soy una funcion anonima');
})();

(function(nombre){
    console.log('Yo soy una funcion anonima que recibe un parametro: '+ nombre);
})('isaac');

// Funcion Auto Invocable 

(function Saludo(){
    console.log('soy una funcion auto invocada');
})();

(function Saludos(nombre){
    console.log('soy una funcion auto invocada con parametro '+ nombre);
})('prros');

//  Funciones Flecha Auto Invocables.

(saludo=()=>{
    console.log('soy una funcion flecha auto invocada');
})();

(saludos=(nombre)=>{
    console.log('soy una funcion flecha auto invocada con parametro' + nombre);
})('hugo');