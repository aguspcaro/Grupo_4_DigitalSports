const nombre = document.querySelector("input.inputName")
const precio = document.querySelector("input.inputPrecio")
const promPrecio=document.querySelector("input.inputPromocional")
const deporte = document.querySelector("[name = deporte]")
const talle = document.querySelector("[name = talle]")



nombre.addEventListener("blur", () => {
    if (nombre.value.length < 3) {
        classNombre = document.querySelector("span.erroresName")
        classNombre.innerHTML = "El nombre no puede tener menos de tres letras!!!"
    } else {
        classNombre.innerHTML = "";

    }

})

precio.addEventListener("blur", () => {
    if (precio.value < 0) {
        classPrecio = document.querySelector("span.erroresPrecio")
        classPrecio.innerHTML = "El precio no puede ser negativo!!!"
    } else {
        classPrecio.innerHTML = "";

    }

})


promPrecio.addEventListener("blur", () => {
    if (promPrecio.value < 0) {
        classPromocional = document.querySelector("span.erroresPromocional")
        classPromocional.innerHTML = "El precio promocional no puede ser negativo!!!"
    } else {
        classPromocional.innerHTML = "";

    }

})

deporte.addEventListener("blur", ()=>{
       if(deporte.value<=0 ||
        deporte.value == ""){
            classDeporte = document.querySelector("span.erroresDeporte")
            classDeporte.innerHTML = "Elija un deporte válido!!"
                }else{
                    classDeporte.innerHTML = "";

                }
   
})


talle.addEventListener("blur", ()=>{
    if(talle.value<=0 ||
     talle.value == ""){
         classDeporte = document.querySelector("span.erroresDeporte")
         classDeporte.innerHTML = "Elija un deporte válido!!"
             }else{
                 classDeporte.innerHTML = "";

             }

})