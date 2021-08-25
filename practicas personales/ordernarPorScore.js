// Este ejercicio consiste en ordenar por 'score' de menor a mayor un arreglo de usuarios.

const users = [ { name: 'Georg', email: 'georg@academlo.com', score: 100 }, 
{ name: 'Andrea', email: 'andrea@gmail.com', score: 70 }, 
{ name: 'Andrés', email: 'andres@gmail.com', score: 34 } ];

function orderUsersByScore(users){
    var nuevoArray =[];
    if(users[2].score < users[0].score && users[2].score < users[1].score){
        nuevoArray.push(users[2]);
        if(users[0].score < users[1].score){
         nuevoArray.push(users[0]);
            nuevoArray.push(users[1]);
        }   
        else {
            nuevoArray.push(users[1]);
            nuevoArray.push(users[0]);
        }
    }
    return console.log(nuevoArray);
}

orderUsersByScore(users);

