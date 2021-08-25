//4. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento 
//que se encuentra en la mitad
//- En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, 
//del arreglo [1, 3, 4] devolvemos el 3
//- En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, 
//en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]


//yo se que si la longitud del arreglo es impar
// mientras que si la longitd del arreglo es par hay dos numero en medio
function findMiddle (array){
    //saber si la longitud es par o impar
    if (array.lenght % 2 ===1 ){

        // el metodo parseInt nos ayuda a convertir un numero decimal a un numero entero 
        const moiddleIndex = parseInt (array.lenght /2);
        console.log(moiddleIndex);
        // va el codigo que devuelve un numero si la longitud es impar
    }

    else{
        const secondIndex = array.lenght /2;
        const firstIndex = secondIndex -1;
        const result =[array[firstIndex], array[secondIndex]];
        console.log(result);
        // va el codigo que devuelve un arreglo con 2 numero si la longitud es par 
    }
}