const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	Nombre: /^[A-Za-zÀ-ÿ]{3,15}$/, // Letras y espacio
	Apellido: /^[A-Za-zÀ-ÿ]{3,50}$/, // Letras y espacio
	Usuario: /^[a-zA-Z0-9\_\-]{8,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^[a-zA-Z0-9\_\-]{8,15}$/, // Letras, numeros, guion y guion_bajo
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //correo
	Cedula: /^.{10}$/, // 10 digitos.
}

const campos = {
	Nombre: false,
	Apellido: false,
	Usuario: false,
	password: false,
	correo: false,
	Cedula: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "Nombre":
			validarCampo(expresiones.Nombre, e.target, 'Nombre');
		break;
		case "Apellido":
			validarCampo(expresiones.Apellido, e.target, 'Apellido');
		break;
		case "Usuario":
			validarCampo(expresiones.Usuario, e.target, 'Usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "Cedula":
			validarCedula(expresiones.Cedula, e.target, 'Cedula');
		break;
	}
};
function validarCedula(expresion, input, campo) {
	var cad = document.getElementById("Cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    if (cad !== "" && longitud === 10  && expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
			document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
			document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
			document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
			document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
			campos[campo] = true;
		for(i = 0; i < longcheck; i++){
        	if (i%2 === 0) {
            	var aux = cad.charAt(i) * 2;
              	if (aux > 9) aux -= 9;
              	total += aux;
            } else {
            	total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
		}
        total = total % 10 ? 10 - total % 10 : 0;
        if (cad.charAt(longitud-1) == total && expresion.test(input.value)) {
			document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
			document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
			document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
			document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
			document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
			campos[campo] = true;
		} else {
			document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
			document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
			document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
			document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
			document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
			campos[campo] = false;
		}
    }
};

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const terminos = document.getElementById('terminos');
	if(campos.Nombre && campos.Apellido && campos.Usuario && campos.password && campos.correo && campos.Cedula){
		var usuario1 = new Usuario(Cedula.value.toString(), Apellido.value.toString(), Nombre.value.toString(), correo.value.toString(), Usuario.value.toString(), password.value.toString(),"activo");
		usuarios.push(usuario1);
		//tableToCSV();
		formulario.reset();
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
		document.getElementById('formulario__mensaje-exito').innerHTML="Enviado exitosamente!";
	}
});	
function eliminar(idUsuario){
	var tablaDatos = document.getElementById("tablaDeDatos");
	usuarios[idUsuario].estado="inactivo";
	cargarDatos();
}

function tableToCSV() {
            var csv_data = [];
		var csvrow = new Array();
			for(var i=0; i<usuarios.length; i++){
				
				csvrow.push(usuarios[i].Cedula);
				csvrow.push(usuarios[i].Apellido);
				csvrow.push(usuarios[i].Nombre);
				csvrow.push(usuarios[i].correo);
				csvrow.push(usuarios[i].Usuario);
				csvrow.push(usuarios[i].password);
				csvrow.push(usuarios[i].estado);
				
			}
            downloadCSVFile(csvrow);
        }
 
function downloadCSVFile(csv_data) {
            // Create CSV file object and feed
            // our csv_data into it
            CSVFile = new Blob([csv_data], {
                type: "text/csv"
            });
 
            // Create to temporary link to initiate
            // download process
            var temp_link = document.createElement('a');
 
            // Download csv file
            temp_link.download = "datos.txt";
            var url = window.URL.createObjectURL(CSVFile);
            temp_link.href = url;
 
            // This link should not be displayed
            temp_link.style.display = "none";
            document.body.appendChild(temp_link);
            // Automatically click the link to
            // trigger download
            temp_link.click();
            document.body.removeChild(temp_link);
}
 
var idAlumnoEditando;
function abrirPopUp(idUsuario){
	console.log(idUsuario);
	document.getElementById('editt').classList.add('active');
	document.getElementById('popUpEditar').classList.add('active');
	document.getElementById("editarNombre").value= usuarios[idUsuario].Nombre;
	document.getElementById("editarApellido").value= usuarios[idUsuario].Apellido;
	document.getElementById("editarUsuario").value= usuarios[idUsuario].Usuario;
	document.getElementById("editarPassword").value= usuarios[idUsuario].password;
	document.getElementById("editarCorreo").value=usuarios[idUsuario].correo;
	document.getElementById("editarCedula").value= usuarios[idUsuario].Cedula;
	idAlumnoEditando=idUsuario;
}

function guardarCambios(){
	usuarios[idAlumnoEditando-1].Nombre=document.getElementById("editarNombre").value.toString();
	usuarios[idAlumnoEditando-1].Apellido=document.getElementById("editarApellido").value.toString();
	usuarios[idAlumnoEditando-1].Usuario = document.getElementById("editarUsuario").value.toString();
	usuarios[idAlumnoEditando-1].password = document.getElementById("editarPassword").value.toString();
	usuarios[idAlumnoEditando-1].correo = document.getElementById("editarCorreo").value.toString();
	usuarios[idAlumnoEditando-1].Cedula = document.getElementById("editarCedula").value.toString();
	var tablaDatos = document.getElementById("tablaDeDatos");
	tablaDatos.rows[idAlumnoEditando+1].cells[0].textContent=usuarios[idAlumnoEditando-1].Cedula;
	tablaDatos.rows[idAlumnoEditando+1].cells[1].textContent=usuarios[idAlumnoEditando-1].Apellido;
	tablaDatos.rows[idAlumnoEditando+1].cells[2].textContent=usuarios[idAlumnoEditando-1].Nombre;
	tablaDatos.rows[idAlumnoEditando+1].cells[3].textContent=usuarios[idAlumnoEditando-1].correo;
	tablaDatos.rows[idAlumnoEditando+1].cells[4].textContent=usuarios[idAlumnoEditando-1].Usuario;
	tablaDatos.rows[idAlumnoEditando+1].cells[5].textContent=usuarios[idAlumnoEditando-1].password;
	tablaDatos.rows[idAlumnoEditando+1].cells[6].textContent='activo';
}

function cerrarPopUpEditar(){
	document.getElementById('editt').classList.remove('active')
	document.getElementById('popUpEditar').classList.remove('active');
}
