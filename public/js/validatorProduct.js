const nombre = document.querySelector("input.inputName")
const precio = document.querySelector("input.inputPrecio")
const promPrecio=document.querySelector("input.inputPromocional")
const stock =document.querySelector("input.inputstock")
const deporte = document.querySelector("[name = deporte]")
const talle = document.querySelector("[name = talle]")
const marca = document.querySelector("[name = marca]")
const publico = document.querySelector("[name = publico]")
const envio = document.querySelector("[name = envio]")
const categorias = document.querySelector("[name = categoria]")
let inputArchivo = document.querySelector('.inputarchivo')
let imagenProducto = document.querySelector('.product-edit')
const form = document.querySelector(".containerPrincipal")


let classNombre = "",
    classPrecio = "",
    classPromocional = "",
    classDeporte = "",
    classTalle = "",
    classMarca = "",
    classPublico = "",
    classEnvio = "",
    classCategorias = ""
    classStock = ""



    

form.addEventListener('submit', (e) => {
   
    
    if(nombre.value.length < 3 ||precio.value < 0 || precio.value ==""||promPrecio.value < 0 || promPrecio.value == ""||stock.value < 0 || stock.value == ""||deporte.value<=0 ||
    deporte.value == ""||marca.value<=0 ||  marca.value == ""||publico.value<=0 ||  publico.value == ""||envio.value<=0 ||  envio.value == ""||categorias.value<=0 ||
    categorias.value == ""){
        e.preventDefault()
       
          swal("Campos sin completar", "", "error")   
    
    }
      

      })

      



nombre.addEventListener("blur", () => {
    if (nombre.value.length < 3) {
        classNombre = document.querySelector("span.erroresName")
        classNombre.innerHTML = "El nombre no puede tener menos de tres letras."
    } else {
        classNombre.innerHTML = "";

    }

})

precio.addEventListener("blur", () => {
    if (precio.value < 0 || precio.value =="") {
        classPrecio = document.querySelector("span.erroresPrecio")
        classPrecio.innerHTML = "El precio debe ser positivo."
    } else {
        classPrecio.innerHTML = "";

    }

})


promPrecio.addEventListener("blur", () => {
    if (promPrecio.value < 0 || promPrecio.value == "") {
        classPromocional = document.querySelector("span.erroresPromocional")
        classPromocional.innerHTML = "El precio debe ser positivo."
    } else {
        classPromocional.innerHTML = "";

    }

})


stock.addEventListener("blur", () => {
    if (stock.value < 0 || stock.value == "") {
        classStock = document.querySelector("span.erroresStock")
        classStock.innerHTML = "El stock debe ser positivo."
    } else {
        classStock.innerHTML = "";

    }

})

deporte.addEventListener("blur", ()=>{
       if(deporte.value<=0 ||
        deporte.value == ""){
            classDeporte = document.querySelector("span.erroresDeporte")
            classDeporte.innerHTML = "Elija un deporte válido."
                }else{
                    classDeporte.innerHTML = "";

                }
   
})


talle.addEventListener("blur", ()=>{
    if(talle.value<=0 ||
     talle.value == ""){
         classTalle = document.querySelector("span.erroresTalle")
         classTalle.innerHTML = "Elija un talle válido."
             }else{
                 classTalle.innerHTML = "";

             }

})

marca.addEventListener("blur", ()=>{
    if(marca.value<=0 ||
     marca.value == ""){
         classMarca = document.querySelector("span.erroresMarca")
         classMarca.innerHTML = "Elija un Marca válida."
             }else{
                 classMarca.innerHTML = "";

             }

})


publico.addEventListener("blur", ()=>{
    if(publico.value<=0 ||
     publico.value == ""){
         classPublico = document.querySelector("span.erroresPublico")
         classPublico.innerHTML = "Elija un Público válido.!"
             }else{
                 classPublico.innerHTML = "";

             }

})


envio.addEventListener("blur", ()=>{
    if(envio.value<=0 ||
     envio.value == ""){
         classEnvio = document.querySelector("span.erroresEnvio")
         classEnvio.innerHTML = "Elija una forma de Envío válido."
             }else{
                 classEnvio.innerHTML = "";

             }

})

categorias.addEventListener("blur", ()=>{
    if(categorias.value<=0 ||
     categorias.value == ""){
         classCategorias = document.querySelector("span.erroresCategorias")
         classCategorias.innerHTML = "Elija un Categoría válida."
             }else{
                 classCategorias.innerHTML = "";
             }

})




inputArchivo.addEventListener('click', function() {
    imagenProducto.style.display = "none"
})




