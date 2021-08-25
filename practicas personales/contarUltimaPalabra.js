const frase1='hola tengo 8 años';

// Le ponemos el valor de nuestra expresion regular /\d+/g a nuestra variable sentencia
let sentencia = /\d+/g;
// posteriormente hacemos un match de nuestra frase con nuestra variable sentencia 
// de la siguiente manera y lo almacenamos dentro de una variable llamada numero1
let numero1 =frase1.match(sentencia);
// mostramos en pantalla el valor de la variable numero1
console.log(numero1);
// el valor se guarda como un arreglo
[ '8' ]
// Procedemos a convertir el valor de numero1 a numero entero y lo guardamos en 
// la variable edad1
let edad1 = parseInt(numero1);
console.log(edad1);
8