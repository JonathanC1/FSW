// JavaScript Document
const expresiones = {
	validarNombre: /^[a-zA-ZÀ-ÿ\s]{1,120}$/, 
	validarCedula: /^\d{10}$/, 
	validarEmail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
}

//Validar Nombre Completo.
function nombreValido() {
    var nombre = document.getElementById("NombreCompleto");
	var valNombre = false;
	if(nombre.value == "")
		document.getElementById("NombreCompletoError").innerHTML = "*(Debe llenar el campo)*";
    else if(!expresiones.validarNombre.test(nombre.value)){
		document.getElementById("NombreCompletoError").innerHTML = "*(No se permiten números en este campo)*";
		valNombre = false;
	}
	else{
		document.getElementById("NombreCompletoError").innerHTML = "";
		valNombre = true;
	}
	return valNombre;
}

//Validar Numero de cedula.
function cedulaValida() {
    var NumCedula = document.getElementById("dni");
	var validarNumCd = false;
    if(NumCedula.value == "")
		document.getElementById("dniError").innerHTML = "*(Debe llenar el campo)*";
    else if(!expresiones.validarCedula.test(NumCedula.value)){
		document.getElementById("dniError").innerHTML = "*(Debe ingresar solo números (10 en total y sin guion))*";
		validarNumCd = false;
	}else if(!cedulaEcuatoriana(NumCedula.value)){
		document.getElementById("dniError").innerHTML = "*(Ingrese una cedula Ecuatoriana)*";
		validarNumCd = false;
	}else{
		document.getElementById("dniError").innerHTML = "";
		validarNumCd = true;
	}
	return validarNumCd;
}

//Validación completa del usuario
function usuarioValido() {
    var nombreUsuario = document.getElementById("nombreUsuario");
	var validarUsuario = false;
	if(nombreUsuario.value == ""){
		document.getElementById("nombreUsuarioError").innerHTML = "*(Debe llenar el campo)*";
	}else{
		document.getElementById("nombreUsuarioError").innerHTML = "";
		validarUsuario = true;
	}
	return validarUsuario;
}

//Valida la contraseña
function contraseñaValida() {
    var userPass = document.getElementById("password");
	var validarPass = false;
	if(userPass.value == "")
		document.getElementById("passwordError").innerHTML = "*(Debe llenar el campo)*";
	else if (userPass.value.length < 8){
		document.getElementById("passwordError").innerHTML = "*(Debe ingresar al menos 8 digitos)*";
	}
	else{
		document.getElementById("passwordError").innerHTML = "";
		validarPass = true;
	}
	return validarPass;
}
//Conforma que las contraseñas sean iguales
function conValida() {
	var userPass = document.getElementById("password");
	var userConfPass = document.getElementById("confirmarPass");
	var ValidarConPass = false;
	if(userConfPass.value == "")
		document.getElementById("confirmarPassError").innerHTML = "*(Debe llenar el campo)*";
	else if (userPass.value != userConfPass.value){
		document.getElementById("confirmarPassError").innerHTML = "*(Las contraseñas no coinciden)*";
	}
	else{
		document.getElementById("confirmarPassError").innerHTML = "";
		ValidarConPass = true;
	}
	return ValidarConPass;
}

//Valida el email
function emailValido() {
	var email = document.getElementById("email");
	var validarCorreo = false;
	if(email.value == "")
		document.getElementById("emailError").innerHTML = "*(Debe llenar el campo)*";
	else if (!expresiones.validarEmail.test(email.value)){
		document.getElementById("emailError").innerHTML = "*(Email no valido)*";
	}
	else{
		document.getElementById("emailError").innerHTML = "";
		validarCorreo = true;
	}
	return validarCorreo;
}

//Validación de una cédula ecuatoriana
function cedulaEcuatoriana(num){
	//Obtenemos el digito de la region que son los dos primeros digitos

	var digito_region = num.substring(0,2);
        
        //Pregunto si la region existe ecuador se divide en 24 regiones
	if( digito_region >= 1 && digito_region <=24 ){
          
          // Extraigo el ultimo digito
		var ultimo_digito   = num.substring(9,10);

          //Agrupo todos los pares y los sumo
		var pares = parseInt(num.substring(1,2)) + parseInt(num.substring(3,4)) + parseInt(num.substring(5,6)) + parseInt(num.substring(7,8));

          //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
		var numero1 = num.substring(0,1);
		numero1 = (numero1 * 2);
		if( numero1 > 9 ){ numero1 = (numero1 - 9); }

		var numero3 = num.substring(2,3);
		numero3 = (numero3 * 2);
		if( numero3 > 9 ){ numero3 = (numero3 - 9); }

		var numero5 = num.substring(4,5);
		numero5 = (numero5 * 2);
		if( numero5 > 9 ){ numero5 = (numero5 - 9); }

		var numero7 = num.substring(6,7);
		numero7 = (numero7 * 2);
		if( numero7 > 9 ){ numero7 = (numero7 - 9); }
		
		var numero9 = num.substring(8,9);
		numero9 = (numero9 * 2);
		if( numero9 > 9 ){ numero9 = (numero9 - 9); }

		var impares = numero1 + numero3 + numero5 + numero7 + numero9;

          //Suma total
		var suma_total = (pares + impares);

          //extraemos el primero digito
		var primer_digito_suma = String(suma_total).substring(0,1);

          //Obtenemos la decena inmediata
		var decena = (parseInt(primer_digito_suma) + 1)  * 10;

          //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
		var digito_validador = decena - suma_total;

          //Si el digito validador es = a 10 toma el valor de 0
		if(digito_validador == 10)
			digito_validador = 0;

          //Validamos que el digito validador sea igual al de la cedula
		if(digito_validador == ultimo_digito){
			return true;
		}else{
			return false;
		}
	}
}
