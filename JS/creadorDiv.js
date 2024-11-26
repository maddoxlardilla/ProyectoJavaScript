let boton=document.getElementById("boton");
boton.addEventListener("click",function(event){
    event.preventDefault();

    let nuevoid=document.createElement("div");
    nuevoid.innerHTML="Div Creado";
    
    let resultado=document.getElementById("resultadoDiv");
    resultado.appendChild(nuevoid);
    nuevoid.classList.add("bordeNegro");

    let contenido=document.getElementById("resultado")
    contenido.appendChild(nuevoid)

})