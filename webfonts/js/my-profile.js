/* Menu desplegable del perfil */

let perfil = document.getElementById("perfil");
 perfil.innerHTML = localStorage.getItem("Usuario")

 /*  Cerrar Sesion */

 var BorrarDatos = document.getElementById("CloseSession");

 BorrarDatos.addEventListener("click",function(){
    window.localStorage.clear("Usuario");
     
 })