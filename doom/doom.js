// vamos a traer todos los elementos con la etiqueta div
var cajas = document.getElementsByTagName('div');

// Creando un nuevo Elemento
var cajaNueva = document.createElement ('div');

//Creando un contenido para el elemento creado
var contenidoElemento = document.createTextNode('Caja Nueva');

//Uniendo el elemento creado con el contenido creado
cajaNueva.appendChild(contenidoElemento);

// Agregando atributos al elemento creado
cajaNueva.setAttribute('class','caja');

// Posicionando el elemento dento del documento
var contenedorPadre = document.getElementById(contenido);
contenedorPadre.appendChild(cajaNueva);



// cambiamos el texto interno de un elemento 
// cajas[1].textContent ='Soy Isaac';

//Inyectamos codigo html en un elemento 
// cajas[2].innerHTML = '<p> souy un parrafo</p>';



