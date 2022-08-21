var fs = require('fs');

function Ingresar(Data){
  fs.appendFile('Usuarios.txt', Data, function (err) {
    if (err) throw err;
    console.log('Se a creado con exito');
  });

}

   

