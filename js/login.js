function showAlertemail(){
    document.getElementById("Nombre").classList.add("is-invalid");
}

function showAlertpassword(){
    document.getElementById("Contraseña").classList.add("is-invalid")
}


const boton = document.getElementById ("boton");
let password = document.getElementById("Contraseña");
let email = document.getElementById("Nombre");
let FormLogin = document.getElementById("FormLogin");

//validacion de contraseñas y email vacio
/* boton.addEventListener("click", ()=> {
    if (email.value == "" ){
        showAlertemail();
    }
if (password.value == ""){
    showAlertpassword();
}
if(email.value != "" && password.value !="" ) {
    localStorage.setItem("Usuario",email.value)
    window.location.href = "index.html";
}
})
 */


//validacion formulario (para que valide el mail con @)
boton.addEventListener("click", ()=> {
    if (!FormLogin.checkValidity() ) {
      event.preventDefault();
      event.stopPropagation();
    }
    FormLogin.classList.add('was-validated')
 if(FormLogin.checkValidity()){
     window.location.href = "index.html";   
    localStorage.setItem("Usuario",email.value)
}
  }) 
 