function add(){ /*almacenando valores*/
  var comments = document.getElementById("comment").value;/*rescatando el valor del id tengo q almacenar y luego rescatar el valor*/
  document.getElementById("comment").value =""; /*agrega el valor y despues lo limpia lo deja vacio*/
  var newComments = document.createElement("div");/*crear elemento comentarios*/
  var cont = document.getElementById("cont"); /*creando contenerdor para rescatar informacion*/

  var check = document.createElement("input");/*creando un imput*/
  check.type ="checkbox"; /*imput de tipo check-bok*/

 var paragraph = document.createElement("p");/*creando solo la etiqueta p, no el contenido*/
 paragraph.classList.add("color");/*creando clase del elemento p*/

 var nodoText =document.createTextNode(comments)/*creando el nodo de texto*/
 paragraph.appendChild(nodoText); /*se llama al padre y traspasa la informacion al p*/


  var heart = document.createElement("i");/*creando el corazon*/
  heart.classList.add("fa", "fa-heart","heart");/*agregando valor al corazon-add agrega la clase*/

  var trash = document.createElement("i");/*creando el basurero*/
  trash.classList.add("fa", "fa-trash","trash");/*agrando valor al basurero*/

 newComments.appendChild(check);/*guardando los elementos en un contenedor creado en un principio-creando papas con hijos*/
 newComments.appendChild(trash);/*emparejando hermanos*/
 newComments.appendChild(heart);
 newComments.appendChild(paragraph);
 cont.appendChild(newComments); /*algo tiene que contener a newComments*/

check.addEventListener("click", function(){ /*cuando haga click se ejecute una acción-escucha lo q se debe hacer*/
 paragraph.classList.toggle("strike-out"); /*busca algo y lo inserta*/

})
trash.addEventListener("click",function(){/*remover el comentario*/
cont.removeChild(newComments);/*cont es el padra y el newComments el hij0*/

})
heart.addEventListener("click",function(){/*remover el comentario*/
heart.classList.toggle("red");/*cont es el padra y el newComments el hij0*/

})

}
