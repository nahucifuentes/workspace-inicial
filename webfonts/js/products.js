/* Menu deplegable del perfil */

let perfil = document.getElementById("perfil");
 perfil.innerHTML = localStorage.getItem("Usuario")

 /*  Cerrar Sesion */

 var BorrarDatos = document.getElementById("CloseSession");

 BorrarDatos.addEventListener("click",function(){
    window.localStorage.clear("Usuario");
     
 })

const ORDER_ASC_BY_NAME = "ascendete";
const ORDER_DESC_BY_NAME = "descendente";
const ORDER_BY_PROD_COUNT = "Rel.";
let currentCategoriesArray = [];
/* let currentBuscadorsArray = []; */
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;




function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);
            
            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }
    return result;
}

function setCatID(id) {
   localStorage.setItem("Items", id);
   window.location = "product-info.html"
}  


function showCategoriesList(){
   

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.products.length; i++){
        let category = currentCategoriesArray.products[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(category.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.cost) <= maxCount))){

            htmlContentToAppend += `
            <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${category.image}" alt="${category.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${category.name} - ${category.currency} ${category.cost}</h4>
                            <small class="text-muted">${category.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${category.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("Productos").innerHTML = htmlContentToAppend;
    };
            }

/* bucsador */

document.addEventListener("DOMContentLoaded", async function(){
    const articulos = await fetch(Autos);
    const buscarArticulos = await articulos.json();
    currentBuscadorsArray = buscarArticulos;
    
});
document.getElementById('btnBuscar').addEventListener('click',()=>{
    let Buscardor = ''; 
    let buscando = document.getElementById('BuscarProducto').value;
    if(buscando == ""){
        return;
    }
    

    for (const productos of currentBuscadorsArray.products) {
  if(productos.name.toLowerCase().includes(buscando)||productos.description.toLowerCase().includes(buscando)){

   console.log(currentBuscadorsArray)
   Buscardor += `
            <div onclick="setCatID(${productos.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${productos.image}" alt="${productos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${productos.name} - ${productos.currency} ${productos.cost}</h4>
                            <small class="text-muted">${productos.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${productos.description}</p>
                    </div>
                </div>
            </div>
            `
        

        document.getElementById("Productos").innerHTML = Buscardor;
                 };
                }
            }
            
); 

/* fin del buscaror */

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray.products = categoriesArray;
    }

    currentCategoriesArray.products = sortCategories(currentSortCriteria, currentCategoriesArray.products);


    showCategoriesList();
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(Autos).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data
            showCategoriesList()
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){

        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showCategoriesList();
    });
});
