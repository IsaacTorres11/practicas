users = [ { name: 'Daniela', email: 'daniela@academlo.com', }, 
        { name: 'Juan', email: 'juan@academlo.com', }, 
        { name: 'Luis', email: 'luis@academlo.com', }, 
        { name: 'Pedro', email: 'pedro@academlo.com', }];
page=2;

//if (users.length % 2 === 0){
  //  let suma =0;
   // for(let contador =0; contador <users.length; contador++ ){
    //    if(users[contador] %2 ===0){
     //       console.log('el indice es par');
      //  }

    //}
    
//}

var par;
var impar;
if(users.length %2 ===0){
    console.log('es par if');
    for (let contador=0; contador < users.length; contador++){
        var suma =contador+1;
        console.log(suma);
        
    }
}

//function paginateUsers(users, page) {
    

 //}

 //if (suma %2 ===0 || suma %2 !=0 ){
   // console.log(users[suma-1]);
//}