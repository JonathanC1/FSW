// JavaScript Document
var user = [];
function adduser(userCedula, userNombre, userUsuario, userContrasenia, userEmail, userEstado){
	
	var newUser = {
		cedula : userCedula,
		nombre : userNombre,
		usuario : userUsuario,
		contrasenia : userContrasenia,
		email : userEmail,
        estado: userEstado
	};
	user.push(newUser);
}

function enviarFormulario() {
    if (cedulaValida() && nombreValido() && usuarioValido() && contraseñaValida() && conValida() && emailValido()) {
        var datosFormulario = leerDatosFormulario();
		adduser(datosFormulario.dni, datosFormulario.NombreCompleto, datosFormulario.nombreUsuario, datosFormulario.password, datosFormulario.email,datosFormulario.estado);
		
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
    document.getElementById("estado").value = "";
}
function leerDatosFormulario() {
    var datosFormulario = {};
    datosFormulario["dni"] = document.getElementById("dni").value;
    datosFormulario["NombreCompleto"] = document.getElementById("NombreCompleto").value;
    datosFormulario["nombreUsuario"] = document.getElementById("nombreUsuario").value;
    datosFormulario["password"] = document.getElementById("password").value;
    datosFormulario["email"] = document.getElementById("email").value;
    datosFormulario["estado"] = document.getElementById("estado").value;
    return datosFormulario;
}
function eliminarFilas(nomTab){
	
	var tableHeaderRowCount = 1;
	var table = document.getElementById(nomTab);
	var rowCount = table.rows.length;
	for (var i = tableHeaderRowCount; i < rowCount; i++) {
    	table.deleteRow(tableHeaderRowCount);
	}
}

function reporte(){
	for(let item of user){
		if (item.usuario != "admin")
			sendReport(item);
	}
}
function traerDatos(){
  	eliminarFilas("employeeList_report");
	reporte();
}
function sendReport(data) {
    var table2 = document.getElementById("employeeList_report").getElementsByTagName('tbody')[0];
    var newRow2 = table2.insertRow(table2.length);
    var cell1 = newRow2.insertCell(0);
    cell1.innerHTML = data.cedula;
    var cell2 = newRow2.insertCell(1);
    cell2.innerHTML = data.nombre;
    var cell3 = newRow2.insertCell(2);
    cell3.innerHTML = data.usuario;
    var cell4 = newRow2.insertCell(3);
    cell4.innerHTML = data.contrasenia;
    var cell5 = newRow2.insertCell(4);
    cell5.innerHTML = data.email;
    var cell6 = newRow2.insertCell(5);
    cell6.innerHTML = data.estado;

}