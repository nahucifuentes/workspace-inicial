function showAlertemail(){
    document.getElementById("Nombre").classList.add("is-invalid");
}

function showAlertpassword(){
    document.getElementById("Contraseña").classList.add("is-invalid")
}


const boton = document.getElementById ("boton");
let password = document.getElementById("Contraseña");
let email = document.getElementById("Nombre");

boton.addEventListener("click", ()=> {
    if (email.value == "" ){
        showAlertemail();
    }
if (password.value == ""){
    showAlertpassword();
}
if(email.value != "" && password.value !="" ) {
    window.location.href = "index.html";
}
})