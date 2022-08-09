$("#formulario").submit(function () {  
    if($("#nombreform").val().length < 1) {  
        alert("El Nombre es obligatorio");  
        return false;  
    }  
    return false;  
});  

$("#formulario").submit(function () {  
    if($("#apellidoform").val().length < 1) {  
        alert("El Apellido es obligatorio");  
        return false;  
    }  
    return false;  
});

$("#formulario").submit(function () {  
    if($("#mailform").val().length < 1) {  
        alert("El Correo es obligatorio");  
        return false;  
    }  
    return false;  
});

$("#formulario").submit(function () {  
    if($("#mensajeform").val().length < 1) {  
        alert("Debe escribir un mensaje");  
        return false;  
    }  
    return false;  
});  