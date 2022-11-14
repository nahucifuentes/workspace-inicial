/* Menu desplegable del perfil */

let perfil = document.getElementById("perfil");
 perfil.innerHTML = localStorage.getItem("Usuario")

 /*  Cerrar Sesion */

 var BorrarDatos = document.getElementById("CloseSession");

 BorrarDatos.addEventListener("click",function(){
    window.localStorage.clear("Usuario");
     
 })


//Entrega 7

let apellidoPerfil = document.getElementById("apellidoPerfil");
let NombrePrincipal = document.getElementById("nombrePerfil");
let botonPerfil = document.getElementById("botonPerfil");
let direccionPerfil = document.getElementById("direccionPerfil");
let segundoApellido = document.getElementById("segundoApellido");
let segundoNombre = document.getElementById("segundoNombre");
let numeroTelefono = document.getElementById("numeroTelefono");
let fotoPerfil = document.getElementById("fotoPerfil");
let Foto = document.getElementById("Foto");


let formulario = document.getElementById("formularioPerfil");

//lugar donde va nombre de usuario 
let nombreUsuarioLugar = document.getElementById("nombreUsuarioAqui");
let correoElectronicoUsuario = document.getElementById("correoElectronicoUsuario");

//VERIFICA

 formulario.addEventListener('submit', function (event) {
   if (!formulario.checkValidity() ) {
     event.preventDefault();
     event.stopPropagation();
   }
   formulario.classList.add('was-validated')

   if(formulario.checkValidity() ){


   localStorage.setItem("CorreoElectronico",direccionPerfil.value)
   localStorage.setItem("Apellido",apellidoPerfil.value)
   localStorage.setItem("Nombre",NombrePrincipal.value)

   localStorage.setItem("SegundoApellido",segundoApellido.value)
   localStorage.setItem("SegundoNombre",segundoNombre.value)
   localStorage.setItem("Telefono",numeroTelefono.value)
   localStorage.setItem("FotoDePerfil",fotoPerfil.result)
 }
}) 


//MUESTRA EN PANTALLA LO GUARDADO EN EL LS

//Te deja entrar a la pagina solo si estas logeado

document.addEventListener("DOMContentLoaded", function(e){
  let valorUsuarioLS = localStorage.getItem("Usuario")

  if(valorUsuarioLS === null ){
  window.stop()
  window.location.href = "login.html";
}else 
NombrePrincipal.value = localStorage.getItem("Nombre")
apellidoPerfil.value = localStorage.getItem("Apellido")
segundoNombre.value = localStorage.getItem("SegundoNombre")
numeroTelefono.value = localStorage.getItem("Telefono")
direccionPerfil.value= localStorage.getItem("Usuario")
segundoApellido.value = localStorage.getItem("SegundoApellido")
})

nombreUsuarioLugar.innerHTML = localStorage.getItem("Nombre") + "_" + localStorage.getItem("Apellido")
correoElectronicoUsuario.innerHTML = localStorage.getItem("Usuario")



//Inputs con valor de Ls
/* NombrePrincipal.value = localStorage.getItem("Nombre")
apellidoPerfil.value = localStorage.getItem("Apellido")
segundoNombre.value = localStorage.getItem("SegundoNombre")
numeroTelefono.value = localStorage.getItem("Telefono")
direccionPerfil.value= localStorage.getItem("Usuario")
segundoApellido.value = localStorage.getItem("SegundoApellido")
 */



//Desafiate7
Foto.innerHTML = localStorage.getItem("FotoDePerfil")


