// Todas las personas que crean una cuenta en Academlo vienen de algún canal, por ejemplo, algunos vienen de youtube, otros de facebook, otros más de twitter, etc.
// Este ejercicio consiste en contar cuantos usuarios han enviado su aplicación y desde que canal vienen, así que tenemos que tomar en cuenta 2 factores.

//El canal del que vienen
//Que hayan enviado su aplicación


const users = [ { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null }, 
{ name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, 
{ name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } }, 
{ name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } } ];

var usuariosConAplicacion =[];
var usuariosYoutube =[];
var usuariosTwitter =[];
const aplicacion1 ='youtube';
const aplicacion2 ='twitter';

for (let contador =0; contador < users.length; contador++){

    if(users[contador].application != null){
        usuariosConAplicacion.push(users[contador]);
    }

}
for (let contador2 =0; contador2 < usuariosConAplicacion.length; contador2 ++){

    if(usuariosConAplicacion[contador2].channel == 'youtube'){
        usuariosYoutube.push(usuariosConAplicacion[contador2]);
    }
    else if (usuariosConAplicacion[contador2].channel == 'twitter'){
        usuariosTwitter.push(usuariosConAplicacion[contador2]);
    }
}

console.log('Los usuarios que aplicaron por youtube son: '+ usuariosYoutube.length);
console.log('Los usuarios que aplicaron por twitter son: '+ usuariosTwitter.length);
