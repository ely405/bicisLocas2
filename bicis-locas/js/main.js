function validateForm() {
  var errorNameLastname = document.getElementsByName("spanNameLastname");
  var errorEmail = document.getElementById("spnErrorEmail");
  var errorPass = document.getElementById("spnErrorPass");

  var name = document.getElementById("name");
  var lastNam = document.getElementById("lastname");
  var correo = document.getElementById("input-email");
  var pass = document.getElementById("input-password");

  errorNameLastname[0].innerHTML =  (name.value == "" || name.value == null || !/[A-Z]$/.test(name.value.charAt(0)) || !/[a-z\s]$/.test(name.value.substring(1,name.value.length)))?
                                    ("campo obligatorio <br> primera letra en mayúscula"/*, name.focus()*/): (""/*, lastNam.focus()*/);

  errorNameLastname[1].innerHTML =  (lastNam.value == "" || lastNam.value == null || !/[A-Z]$/.test(lastNam.value.charAt(0)) || !/[a-z\s]$/.test(lastNam.value.substring(1,lastNam.value.length)))?
                                    "campo obligatorio <br> primera letra en mayúscula" : (""/*, correo.focus()*/);

  errorEmail.innerHTML = (correo.value == "")? "Campo obligatorio <br> Ingresa un correo válido": (""/*, pass.focus()*/);

  errorPass.innerHTML = (pass.value == "" || !/\S{6}/.test(pass.value) || pass.value == "123456"||pass.value=="098754"||pass.value=="password")?
                        'Ingresa una contraseña <br> No válido "123456", "098754", "password"' : "";
}

window.addEventListener("load", function(){
  document.getElementById("btnRegistrar").addEventListener("click",validateForm);
});
