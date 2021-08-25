//Este ejercicio consiste en encontrar y devolver el primer usuario en un arreglo que tenga 
//el el valor que recibimos de una función. 
//La función recibirá la clave que usaremos para la búsqueda y el valor 
//que usaremos para buscar al usuario

const usuarios = [ { name: 'Georg', email: 'georg@academlo.com', age: 22 }, 
{ name: 'Andrea', email: 'andrea@gmail.com', age: 30 } ];

function findUser(users, key, value) {
    var imprimir;
   if (users[0].name == value || users[0].email == value || users[0].age == value){
       imprimir =console.log(users[0]);
   }
   else if(users[1].name == value || users[1].email == value || users[1].age == value){
        imprimir =console.log(users[1]);
   }
   return imprimir;
}
findUser (usuarios,'age',22);
