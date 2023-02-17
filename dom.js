console.log("Entramos");

var itemas = document.getElementsByClassName("item");

var cantidad = itemas.length; 

console.log("cantidad de listas" + cantidad);

var div = document.createElement("div");

div;

div.innerText = "aprendiendo javaScript";

var divUno = document.getElementById("uno");

divUno.appendChild(div);

var lista=document.getElementById("lista");

var hijo =document.createElement("li");
hijo.innerText = "li nuevo";
lista.appendChild(hijo);

var par=document.getElementById('tres').style.color = '#FF0033';

var par=document.getElementById('lista').style.color = '#00FF33';


document.getElementById("cuatro").style.backgroundColor = "blue";



