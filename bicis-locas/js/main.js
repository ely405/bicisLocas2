/*function validateForm(){
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

valor = document.getElementById("campo").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  return false;
}*/

function validateForm() {
  //validateName();
  validateLastName();
  validateEmail();
  validatePass();
}

var errorNameLastname = document.getElementsByName("spanNameLastname");
var lastNam = document.getElementById("lastname");

function validateName(){
  var name = document.getElementById("name");
  //var errorName = document.getElementById("spnErrorName");
  (name.value = "" || name.value == null || !/[A-Z]$/.test(name.value.charAt(0)) || !/[a-z\s]$/.test(name.value.substring(1,name.value.length)))?
    (errorNameLastname[0].innerHTML = "campo obligatorio <br> primera letra en mayúscula" /*name.focus()*/):
    (errorNameLastname[0].innerHTML = ""/*, lastNam.focus()*/);
}

function validateLastName(){
  (lastNam.value == "" || lastNam.value == null || !/[A-Z]$/.test(lastNam.value.charAt(0)) || !/[a-z\s]$/.test(lastNam.value.substring(1,lastNam.value.length)))?
    errorNameLastname[1].innerHTML = "campo obligatorio <br> primera letra en mayúscula" :
    (errorNameLastname[1].innerHTML = ""/*, correo.focus()*/);
}

function validateEmail(){
  var correo = document.getElementById("input-email");
  var errorEmail = document.getElementById("spnErrorEmail");
  errorEmail.innerHTML = (correo.value == "")? "Campo obligatorio <br> Ingresa un correo válido": (""/*, pass.focus()*/);
}

function validatePass(){
  var pass = document.getElementById("input-password");
  var errorPass = document.getElementById("spnErrorPass");
  errorPass.innerHTML = (pass.value == "" || !/\S{6}/.test(pass.value) || pass.value == "123456"||pass.value=="098754"||pass.value=="password")?
    'Ingresa una contraseña <br> No válido "123456", "098754", "password"' : "";
}

window.addEventListener("load", function(){
  document.getElementById("btnRegistrar").addEventListener("click",validateForm);
});
