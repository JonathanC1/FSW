// JavaScript Document

var buscar = document.getElementById("buscarr");

function buscarUsuario(){
	for(var i=0; i<usuarios.length; i++){
		if(buscar.value.toString() == usuarios[i].Cedula){
			imprimirResultado(i);
			break;
		}else if(buscar.value.toString() == usuarios[i].Apellido){
			imprimirResultado(i);
			break;
		}
		if(i == usuarios.length-1){
			alert("el apellido o cedula no existe");
		}
	}
}


function imprimirResultado(i){
	var tabla = document.getElementById("tablaDeDatos").rows.length;
	if(tabla>1){
		for(var i=1; i<tabla ; i++ ){
			document.getElementById("tablaDeDatos").deleteRow(1)
		}
	}
		var tablaDatos = document.getElementById("tablaDeDatos");
		var newFiladeTabla = tablaDatos.insertRow(-1);
		newFiladeTabla.id = usuarios.length - 1 ;
		newFiladeTabla.insertCell(0).textContent = usuarios[i].Cedula.toString();
		newFiladeTabla.insertCell(1).textContent = usuarios[i].Apellido.toString();
		newFiladeTabla.insertCell(2).textContent = usuarios[i].Nombre.toString();
		newFiladeTabla.insertCell(3).textContent = usuarios[i].correo.toString();
		newFiladeTabla.insertCell(4).textContent = usuarios[i].Usuario.toString();
		newFiladeTabla.insertCell(5).textContent = usuarios[i].password.toString();
		newFiladeTabla.insertCell(6).textContent = usuarios[i].estado;
}