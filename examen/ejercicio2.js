const usuarios = [{ name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null},
    {name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } },
    {name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }];
function getStudentsApplications(users) {
    const alumnos =[];
    for(let contador=0; contador < users.length; contador ++){
        if(users[contador].application != null){
            alumnos.push(users[contador]);
        }
    }
    console.log(alumnos);
    return alumnos;
}
getStudentsApplications (usuarios);




































//const users = [ { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null},
//{name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } },
//{name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }];
//const alumnos =[];
//for(let contador=0; contador < users.length; contador ++){  
    
//    if(users[contador].application != null){
//        alumnos.push(users[contador]);
//    }
//}
// console.log(alumnos);