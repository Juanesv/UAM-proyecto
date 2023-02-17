console.log("Entramos");

var items= document.getElementsByClassName("item");

var cantidad= items.length; //-3

console.log(cantidad);

console.log("cantidad de listas "+ cantidad);

var div= document.createElement("div");

div;
div.innerText="aprendiendo JavaScript";

var divUno= document.getElementById("uno");

divUno.appendChild(div);


var lista=document.getElementById("lista");

var hijo=document.createElement("li")
hijo.innerText = "li nuevo";
lista.appendChild(hijo);

var par= document.getElementById("parrafo").style.color="red";

var list=document.getElementById("lista").style.color="green";

var parrafo=document.getElementById("dos");
var hij=document.createElement("p");
hij.innerText="parrafo nuevo nuevecito";
parrafo.appendChild(hij).style.backgroundColor;