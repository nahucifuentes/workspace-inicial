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
 let precioUni =[];


    function Articulos(){ 
      let htmlContentToAppend = "";

let x =currentCarritoArray

      precioUni.push(x.articles[0].unitCost)

      console.log(x.articles[0].unitCost)
    for(let i = 0; i < currentCarritoArray.articles.length; i++){
      let atriculos = currentCarritoArray.articles[i];

   
           htmlContentToAppend += `
           <div id="${atriculos.id}" class=" ">
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
                         
                         <input id="cantidadUnidades" min="0" name="quantity" oninput="calcular()" value="${atriculos.count}" type="number"
                           class="form-control form-control-sm" />
                         
                         <button id="sumar"class="btn btn-link px-2"
                           onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                           <i class="fas fa-plus"></i>
                         </button>
                         </div>
                         </div>
                         </div>
                    
                     <div class="col-md-2 d-flex justify-content-center">
                       <div>
                         <p class="small text-muted mb-4 pb-2">Subtotal</p>
                         <input id="Subtotal"  class=" lead fw-normal card mb-0" oninput="calcular()" value="${atriculos.currency} ${atriculos.unitCost}"  readonly>
                       </div>
                     </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
                   </div>      
                
                   </div>
                   </div>
                   <div class="mb-5">
                   <div class="card-body p-4">
                   
                         <div class="float-end  ">
                           <p class="mb-0 me-5 d-flex align-items-center">
                             <span  class="small text-muted me-2">Total de la compra:</span> <input
                               class="lead fw-normal card" id="total" oninput="calcular()" value="${atriculos.unitCost}" readonly>
                           </p>
                         </div>
             
                       </div>
                     </div>
                
           </div>

           `

       document.getElementById("Carrito").innerHTML = htmlContentToAppend;
   
      }
    
    }


     

  document.addEventListener("DOMContentLoaded", function(e){
   getJSONData(Peugeot).then(function(resultObj){
       if (resultObj.status === "ok"){
         currentCarritoArray = resultObj.data
         Articulos()
         }
      })});   

          
    function calcular(){
      let cantidaxdUnidades = parseInt(document.getElementById("cantidadUnidades").value) || 0;
     
      document.getElementById("Subtotal").value = precioUni * cantidaxdUnidades;
     /*  document.getElementById("total").innerHTML = precioUni * cantidaxdUnidades; */
      }

