// Este ejercicio consiste en recibir 2 números y crear un arreglo con los los
// múltiplos del primero siempre y cuando sean menores al segundo.


function populateArray(number, limit) {
    var numero1 = number;
    var limitador =limit;
    var imprimir;
    for(let contador2=numero1; contador2 < limitador; contador2 +=numero1){
       imprimir= console.log(contador2);   
    }
    return imprimir;
}
populateArray (10,55);
