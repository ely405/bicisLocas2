//window.addEventListener("load", function())
function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var correo = document.getElementById("input-email").value;
  var contrasena = document.getElementById("input-password").value;
  var escogeBici = document.getElementById("selecBici");
//  var regNombre = /[^a-zA-Z]+/;
  //if(nombre.length == "") alert("completa");}
//  (nombre.length == "")? alert("completa nombre "):alert("completa apellido");
  (correo.length == "")? alert("Ingresa un correo válido"):
  (nombre.length == "" || !/[a-z\s]$/.test(nombre.substring(1,nombre.length)) || !/[A-Z]$/.test(nombre.charAt(0)))? alert("Ingresa nombre \n La primera letra en mayúscula"):
  (apellido.length == "" || !/[a-z\s]$/.test(apellido.substring(1,apellido.length)) || !/[A-Z]$/.test(apellido.charAt(0)))? alert("Ingresa apellido \n La primera letra en mayúscula"):
  (contrasena.length == "" || !/\S{6}/.test(contrasena) || contrasena == "123456"||contrasena=="098754"||contrasena=="password")? alert('Ingresa una contraseña \n No válido "123456", "098754", "password"'):
  (escogeBici.value == 0)? alert("Elige una opción"): ""
}
validateForm();
//^\S\d[a-zA-Z]
