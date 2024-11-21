function Sumar(){
    let datoSuma1=document.getElementById("Numero1").value;
    let datoSuma2=document.getElementById("Numero2").value;
    let ResultadoTotal=document.getElementById("Resultado");
    let ResultadoSuma=parseFloat(datoSuma1) + parseFloat(datoSuma2);

    
    if(datoSuma1=="" || datoSuma2==""){alert("el campo esta vacio")}
    else{ResultadoTotal.innerHTML="el resultado es: " + ResultadoSuma}
}


function Restar(){
    let datoSuma1=document.getElementById("Numero1").value;
    let datoSuma2=document.getElementById("Numero2").value;
    let ResultadoTotal=document.getElementById("Resultado");
    let ResultadoSuma=parseFloat(datoSuma1) - parseFloat(datoSuma2);

    
    if(datoSuma1=="" || datoSuma2==""){alert("el campo esta vacio")}
    else{ResultadoTotal.innerHTML="el resultado es: " + ResultadoSuma}
}


function Multiplicar(){
    let datoSuma1=document.getElementById("Numero1").value;
    let datoSuma2=document.getElementById("Numero2").value;
    let ResultadoTotal=document.getElementById("Resultado");
    let ResultadoSuma=parseFloat(datoSuma1) * parseFloat(datoSuma2);

    
    if(datoSuma1=="" || datoSuma2==""){alert("el campo esta vacio")}
    else{ResultadoTotal.innerHTML="el resultado es: " + ResultadoSuma}
}


function Dividir(){
    let datoSuma1=document.getElementById("Numero1").value;
    let datoSuma2=document.getElementById("Numero2").value;
    let ResultadoTotal=document.getElementById("Resultado");
    let ResultadoSuma=parseFloat(datoSuma1) / parseFloat(datoSuma2);

    
    if(datoSuma1=="" || datoSuma2==""){alert("el campo esta vacio")}
    else{ResultadoTotal.innerHTML="el resultado es: " + ResultadoSuma}
}


