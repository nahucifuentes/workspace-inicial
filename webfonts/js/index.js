document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

let perfil = document.getElementById("perfil");


 perfil.innerHTML = localStorage.getItem("Usuario")


/*  Cerrar Sesion */

 var BorrarDatos = document.getElementById("CloseSession");

 BorrarDatos.addEventListener("click",function(){
    window.localStorage.clear("Usuario");
     
 })




/*  BorrarDatos.addEventListener("click",function(){
 window.localStorage.removeItem("Usuario")
});
 */