function validateForm(){
  var name = document.getElementById("name").value;
  var lastNam = document.getElementById("lastname").value;
  var correo = document.getElementById("input-email").value;
  var pass = document.getElementById("input-password").value;
  var escogeBici = document.getElementById("selecBici");
  (correo.length == "")?
  alert("Ingresa un correo válido"):
  (name.length == "" || !/[a-z\s]$/.test(name.substring(1,name.length)) || !/[A-Z]$/.test(name.charAt(0)))?
  alert("Ingresa nombre \n La primera letra en mayúscula"):
  (lastNam.length == "" || !/[a-z\s]$/.test(lastNam.substring(1,lastNam.length)) || !/[A-Z]$/.test(lastNam.charAt(0)))?
  alert("Ingresa apellido \n La primera letra en mayúscula"):
  (pass.length == "" || !/\S{6}/.test(pass) || pass == "123456"||pass=="098754"||pass=="password")?
  alert('Ingresa una contraseña \n No válido "123456", "098754", "password"'):
  (escogeBici.value == 0)?
  alert("Elige una opción"): ""
}
