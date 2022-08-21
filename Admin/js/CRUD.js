// JavaScript Document
function Ingreso() {
  let usuario = {
    Cedula: document.getElementById("dni").value,
    Nombres: document.getElementById("NombreCompleto").value,
    Usuario: document.getElementById("nombreUsuario").value,
    Contrasena: document.getElementById("confirmarPass").value,
    Email: document.getElementById("email").value,
    Estado: 1,
  };
    
    const obj = JSON.stringify(usuario);
    //Ingresar(obj);
    window.alert(obj);
}

function enviarFormulario() {
    if (cedulaValida() && nombreValido() && usuarioValido() && contraseñaValida() && conValida() && emailValido()) {
        Ingreso();
		
        alert("Usuario registrado correctamente")
        resetForm();
    }
}

function resetForm() {
    document.getElementById("dni").value = "";
    document.getElementById("NombreCompleto").value = "";
    document.getElementById("nombreUsuario").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmarPass").value = "";
    document.getElementById("email").value = "";
}
