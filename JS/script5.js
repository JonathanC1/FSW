// JavaScript Document
var usuarios= new Array();
class Usuario{
	constructor(Cedula, Apellido, Nombre, correo, Usuario, password,estado){
		this.Cedula = Cedula;
		this.Apellido = Apellido;
		this.Nombre = Nombre;
		this.correo = correo;
		this.Usuario = Usuario;
		this.password = password;
		this.estado = estado;
  	}
};
function cargarDatos(){
	var tabla = document.getElementById("tablaDeDatos").rows.length;
	if(tabla>1){
		for(var i=1; i<tabla ; i++ ){
			document.getElementById("tablaDeDatos").deleteRow(1)
		}
	}
	for(var i=0; i<usuarios.length ; i++){
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
		newFiladeTabla.insertCell(7).innerHTML = '<input style="background-color:green; color:white; border-color:white" type="submit" id="editar" value="Editar" onclick="abrirPopUp('+(i) +')"> <br> <input style="background-color:red; color:white; border-color:white" color="danger" type="submit" id="eliminar" value="Eliminar" onclick="eliminar('+(i) +')">';
	}
}