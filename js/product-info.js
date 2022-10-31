/* Menu desplegable del perfil */

let perfil = document.getElementById("perfil");
 perfil.innerHTML = localStorage.getItem("Usuario")

 /*  Cerrar Sesion */

 var BorrarDatos = document.getElementById("CloseSession");

 BorrarDatos.addEventListener("click",function(){
    window.localStorage.clear("Usuario");
     
 })

let currentCommentsArray = [];
let currentProductsArray = [];
let estrellaCompleta = `<i class="fa fa-star checked"></i> `;
let estrellaIncompleta =  `<i class="fa fa-star"></i>`;
let currentProductoRelacionadosArray = []

/* Productos */

function MostrasProductos(){
    let Datos = currentProductsArray;
    let htmlContentToAppend = "";
    htmlContentToAppend += `
    <div ${Datos.id}>
    <div class="drow">
    <div class = "d-flex justify-content-center ">
    <h1><strong>${Datos.name}</strong> </h1>
    </div>
    <div class ="d-flex justify-content-center">
    <h6>(${Datos.category})</h6>
    </div>
    <br>
    <br>
    <div class "d-flex justify-content-start">
    <h5><strong>Imagenes ilustrativas del artículo:</strong></h5>
    </div>
    <br>

    <div class = "d-flex justify-content-center ">
    <div id="carouselExampleCaptions" class="carousel slide border  " data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${Datos.images[0]}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-light bg-dark ">
          <h5>${Datos.name}</h5>
          <p >${Datos.description}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="${Datos.images[1]}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-light bg-dark">
          <h5>${Datos.name}</h5>
          <p>${Datos.description}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="${Datos.images[2]}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-light bg-dark">
          <h5>${Datos.name}</h5>
          <p>${Datos.description}</p>
        </div>
      </div>
      <div class="carousel-item">
      <img src="${Datos.images[3]}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block text-light bg-dark">
        <h5>${Datos.name}</h5>
        <p>${Datos.description}</p>
      </div>
    </div>
    </div>
    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon " aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button " data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon " aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>

                    <br>
                    <div class "d-flex justify-content-start">
                    <h5><strong>Precio de Venta:</strong> <em>${Datos.currency}${Datos.cost}</em></h5>
                    </div>
                    <div class="d-flex justify-content-end">
                    <h6>Cantidad de unidades vendidas:${Datos.soldCount}.</h6>
                    </div>
                    </div>
</div>
                    `
                    document.getElementById("InfoProduct").innerHTML = htmlContentToAppend;
                }


 document.addEventListener("DOMContentLoaded", function(e){
getJSONData(Products).then(function(resultObj){
  if (resultObj.status === "ok"){
 currentProductsArray = resultObj.data
  MostrasProductos();
  }
  })}); 
          
  /* Comentarios */

  function MostrarComentarios(){ 
      let htmlContentToComment= "";
      
      for(let i = 0; i < currentCommentsArray.length; i++){
          let Comentarios = currentCommentsArray[i];
          
 let star = "";

 for( let i = 0 ; i < 5; i++){
   if( i < Comentarios.score ){ 
   star += estrellaCompleta;
   }else{
star += estrellaIncompleta;
   }
}
      htmlContentToComment +=
        `<div ${Comentarios.id} class="list-group-item-action cursor-active">
        <div class="drow">
        <div class="d-flex justify-content-start">
          <h5><strong>${Comentarios.user}</strong>-${star}</h5>
        </div>
        <div class="$d-flex justify-content-start">
        <p><em>${Comentarios.description}</em></p>
        </div>
        <div class="d-flex justify-content-end">
      <p>${Comentarios.dateTime}</p>
        </div>
        </div>
      </div>
    </div>
    `
}
    document.getElementById("Coment").innerHTML =  htmlContentToComment;  
  }

       document.addEventListener("DOMContentLoaded", function(e){
            getJSONData(ProductComment).then(function(resultObj){
                if (resultObj.status === "ok"){
                    currentCommentsArray = resultObj.data
                    MostrarComentarios();
                }
            })});    
 
 


           /*  Productos Relacionados */



           function MostrarProductosRelacionados(){ 
            let htmlContentToComment= "";

          for(let i = 0; i < currentProductoRelacionadosArray.relatedProducts.length; i++){
              let Relacionados = currentProductoRelacionadosArray.relatedProducts[i];  

            htmlContentToComment +=
            `
            <div onclick="setCatID(${Relacionados.id})" class ="col-2">
            <div class="drow">
            <div class = "d-flex justify-content-center ">
            <div class="">
            <div class="d-flex flex-row list-group-item-action cursor-active">
            <img src="${Relacionados.image}" class="img-thumbnail">
            </div>
            <div class = "d-flex justify-content-center ">
            <h6><strong>${Relacionados.name}</strong> </h6>
            </div>
            </div>
            </div>
        </div>
        </div>
                            `
          }
          document.getElementById("ProductRelac").innerHTML =  htmlContentToComment;  
        }
      
             document.addEventListener("DOMContentLoaded", function(e){
                  getJSONData(Products).then(function(resultObj){
                      if (resultObj.status === "ok"){
                        currentProductoRelacionadosArray = resultObj.data
                          MostrarProductosRelacionados();
                      }
                  })});    

               function setCatID(id) {
                    localStorage.setItem("Items", id);
                    window.location = "product-info.html"
                 }  


                 




/* original */
{/* <div class="col-3">
<div class="d-flex flex-row list-group-item-action cursor-active">
<img src="${Datos.images[0]}" alt="${Datos.description}" class="img-thumbnail">
<img src="${Datos.images[1]}" alt="${Datos.description}" class="img-thumbnail">
<img src="${Datos.images[2]}" alt="${Datos.description}" class="img-thumbnail">
<img src="${Datos.images[3]}" alt="${Datos.description}" class="img-thumbnail">
                </div>
                </div> */}



     /*       */


{/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="${Datos.images[0]}" class="d-block w-100" alt="${Datos.description}">
  </div>
  <div class="carousel-item">
    <img src="${Datos.images[1]}" class="d-block w-100" alt="${Datos.description}">
  </div>
  <div class="carousel-item">
    <img src="${Datos.images[2]}" class="d-block w-100" alt="${Datos.description}">
  </div>
   <div class="carousel-item">
    <img src="${Datos.images[3]}" class="d-block w-100" alt="${Datos.description}">
  </div>
</div>
</div> */}