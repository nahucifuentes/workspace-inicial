/* menu desplegable del perfil */
let perfil = document.getElementById("perfil");
 perfil.innerHTML = localStorage.getItem("Usuario")

 /*  cerrar sesion */
 var BorrarDatos = document.getElementById("CloseSession");

 BorrarDatos.addEventListener("click",function(){
    window.localStorage.clear("Usuario");
     
 })




 /* Entregable 5 */
 let currentCarritoArray = [];
 let precioUni = [];
 let mostrarCostoenvio = [];
 let mostrareleccion = [];


    function Articulos(){ 
      let htmlContentToAppend = "";

let x =currentCarritoArray

      precioUni.push(x.articles[0].unitCost)


  
    for(let i = 0; i < currentCarritoArray.articles.length; i++){
      let atriculos = currentCarritoArray.articles[i];

   
           htmlContentToAppend += `
           <div id="${atriculos.id}" class=" ">
           <form class="needs-validation" id="formularioCarrito" novalidate>
             <div class="row d-flex  justify-content-end align-items-center h-100">
              
                     <p id="ordenar" class="mb-0 d-flex justify-content-end "><span class="text-muted">Ordenar por:</span> <a  class="text-body  cursor-active">Precio <i
                           class="fas fa-angle-down mt-1"></i></a></p>
                 </div>
                 <div class="card rounded-3 mb-4 ">
                   <div class="card-body p-4">
                     <div class="row d-flex justify-content-between align-items-center">
                       <div class="col-md-2 col-lg-2 col-xl-2">
                       <img src="${atriculos.image}"  class="img-thumbnail">
                       </div>
                       <div class="col-md-2 d-flex justify-content-center">
                       <div>
                         <p class="small text-muted mb-4 pb-2">Nombre</p>
                         <p class="lead fw-normal mb-0">${atriculos.name}</p>
                       </div>
                     </div>
                     <div class="col-md-2 d-flex justify-content-center">
                     <div>
                       <p class="small text-muted mb-4 pb-2">Costo por unidad</p>
                       <p id="precioUnidad" class="lead fw-normal mb-0"> ${atriculos.currency}  ${atriculos.unitCost}</p>
                     </div>
                   </div>
                     <div class="col-md-2 d-flex justify-content-center">
                       <div>
                         <p id="cantidad" class="small text-muted mb-4 pb-2">Cantidad</p>
                         
                         
                         <div class="d-flex">
                         <button id="restar" class="btn btn-link px-2"
                           onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                           <i class="fas fa-minus"></i>
                           
                         </button>
                         
                         <input id="cantidadUnidades" min="1" name="quantity" oninput="calcular()"  value="${atriculos.count}" type="number"
                           class="form-control form-control-sm" />
                           <div id="alerta23"class="invalid-feedback">
                             La cantidad de artículos no puede ser 0.
                           </div>
                         <button id="sumar"class="btn btn-link px-2"
                           onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                           <i class="fas fa-plus"></i>
                         </button>
                         </div>
                         </div>
                         </div>
                    
                     <div class="col-md-2 d-flex justify-content-center">
                       <div>
                         <p class="small text-muted mb-4 pb-2">Subtotal en ${atriculos.currency} </p>
                         <input id="Subtotal"  class=" lead fw-normal card mb-0" oninput="calcular()" value=" ${atriculos.unitCost}" readonly> 
                       </div>
                     </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
                   </div>      
                   </div>
                   </div>
                       </div>
                     </div>
                </form>
           </div>

           `

       document.getElementById("Carrito").innerHTML = htmlContentToAppend;
   
      }
    
    }
       
/* entrega 6 */

/*  Alerta */

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}



function calcular(){

      let cantidaxdUnidades = parseInt(document.getElementById("cantidadUnidades").value) || 0;
      document.getElementById("Subtotal").value = precioUni * cantidaxdUnidades;
      document.getElementById("productCostText").innerHTML = precioUni * cantidaxdUnidades;

 if(mostrarCostoenvio === 1){
  premiumm()
 }else if(mostrarCostoenvio === 2){
  expres()
 }else{
  standard()
 }
    
      }

function subTotal(){
  let quinceMil =  "15200";
  document.getElementById("productCostText").innerHTML = quinceMil;
}
/* tipo de envio */
function premiumm(){
  mostrarCostoenvio = 1
 let comissionText = document.getElementById("comissionText");
 let cantidaxdUnidades = parseInt(document.getElementById("cantidadUnidades").value) || 0;
 let porcentaje =((precioUni * cantidaxdUnidades) * 0.15);
 comissionText.innerHTML = porcentaje;

 document.getElementById("totalCostText").innerHTML = porcentaje + (precioUni * cantidaxdUnidades);
}

function expres(){
  mostrarCostoenvio = 2
  let comissionText = document.getElementById("comissionText");
 let cantidaxdUnidades = parseInt(document.getElementById("cantidadUnidades").value) || 0;
 let porcentaje =((precioUni * cantidaxdUnidades) * 0.07);
 comissionText.innerHTML = porcentaje;

 document.getElementById("totalCostText").innerHTML = porcentaje + (precioUni * cantidaxdUnidades);


}

function standard(){
  mostrarCostoenvio = 3
  let comissionText = document.getElementById("comissionText");
 let cantidaxdUnidades = parseInt(document.getElementById("cantidadUnidades").value) || 0;
 let porcentaje =((precioUni * cantidaxdUnidades) * 0.05);
 comissionText.innerHTML = porcentaje;

 document.getElementById("totalCostText").innerHTML = porcentaje + (precioUni * cantidaxdUnidades);


}



/* validacion */
const boton = document.getElementById('finalizarComprar');
let formulario = document.getElementById("formulario");
let formaDePago = document.getElementById("formaPago");
let TarjetaCrédito = document.getElementById("TarjetadeCrédito");
let TranferenciaBancaria = document.getElementById("TranferenciaBancaria");
let modalForm = document.getElementById("modalForm");
let seleccionar = document.getElementById("seleccionar");


formaDePago.style.display = "none";

     //REVISA TODO

  formulario.addEventListener('submit', function (event)  {
   
  if (!formulario.checkValidity()){
    event.preventDefault();
    event.stopPropagation();
  }else if (document.getElementById("cantidadUnidades").value < 1 ) {
    event.preventDefault();
    event.stopPropagation();
  }
  else {
    event.preventDefault()
    showAlertSuccess()
  }
  formulario.classList.add('was-validated')
  event.preventDefault();
})


/* plasmar eleccion */
function eleccion(){
  if(!TranferenciaBancaria.checked && !TarjetaCrédito.checked){
    seleccionar.innerHTML = "No ha seleccionado método de pago."
  }
 else if(TranferenciaBancaria.checked ){
  seleccionar.innerHTML = `Ha seleccionado "Transferencia bancaria"  como método de pago.`
  }
 else if(TarjetaCrédito.checked ){
  seleccionar.innerHTML = `Ha seleccionado "Tarjeta de crédito"  como método de pago.`
    }

}


//REVISA TIPO DE ENVIO

  boton.onclick = function(){
    if (TarjetaCrédito.checked === false  && TranferenciaBancaria.checked === false ){
      formaDePago.style.display = "block";
    }};

 
  TarjetaCrédito.addEventListener('click', function(){
    if (TarjetaCrédito.checked === false ){
      formaDePago.style.display = "block";
    } else 
      formaDePago.style.display = "none";
    });

    
    TranferenciaBancaria.addEventListener('click', function(){
      if (TranferenciaBancaria.checked === false ){
        formaDePago.style.display = "block";
      } else 
        formaDePago.style.display = "none";
      });
   

   /* deshabilitar */

function habilitar (){

  document.getElementById("TarjetadeCrédito").addEventListener("click", () =>{
  
    document.getElementById("numTarjeta").disabled = false;
    document.getElementById("codigoSeguridad").disabled = false;
    document.getElementById("vencimientoTarjeta").disabled = false;
    document.getElementById("numCuenta").disabled = true;
    document.getElementById("numCuenta").value = "";
  })
  
  document.getElementById("TranferenciaBancaria").addEventListener("click", () =>{
  
    document.getElementById("numTarjeta").disabled = true;
    document.getElementById("numTarjeta").value = "";
    document.getElementById("codigoSeguridad").disabled = true;
    document.getElementById("codigoSeguridad").value = "";
    document.getElementById("vencimientoTarjeta").disabled = true;
    document.getElementById("vencimientoTarjeta").value = "";
    document.getElementById("numCuenta").disabled = false;
   
  })
  }

/*  tipo de envio SEGUNDA FORMA */
 /*  function porcentaje(){
    document.getElementById("premium").addEventListener("click", () =>{  mostrarCostoenvio = 1
      let comissionText = document.getElementById("comissionText");
      let cantidaxdUnidades = parseInt(document.getElementById("cantidadUnidades").value) || 0;
      let porcentaje =((precioUni * cantidaxdUnidades) * 0.15);
      comissionText.innerHTML = porcentaje;
      document.getElementById("totalCostText").innerHTML = porcentaje + (precioUni * cantidaxdUnidades);})



    document.getElementById("express").addEventListener("click", () =>{  mostrarCostoenvio = 2
      let comissionText = document.getElementById("comissionText");
     let cantidaxdUnidades = parseInt(document.getElementById("cantidadUnidades").value) || 0;
     let porcentaje =((precioUni * cantidaxdUnidades) * 0.07);
     comissionText.innerHTML = porcentaje;
     document.getElementById("totalCostText").innerHTML = porcentaje + (precioUni * cantidaxdUnidades);})



    document.getElementById("standar").addEventListener("click", () =>{  mostrarCostoenvio = 3
      let comissionText = document.getElementById("comissionText");
     let cantidaxdUnidades = parseInt(document.getElementById("cantidadUnidades").value) || 0;
     let porcentaje =((precioUni * cantidaxdUnidades) * 0.05);
     comissionText.innerHTML = porcentaje;
     document.getElementById("totalCostText").innerHTML = porcentaje + (precioUni * cantidaxdUnidades);})

  } */

/* Costos */
document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(Peugeot).then(function(resultObj){
      if (resultObj.status === "ok"){
        currentCarritoArray = resultObj.data
        Articulos()
        subTotal()
        calcular()
        habilitar()
        eleccion()
        premiumm()
        /*   porcentaje() */

        }
     })});   







    