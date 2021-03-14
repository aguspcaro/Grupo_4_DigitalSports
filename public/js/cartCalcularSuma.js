const cantidad = document.querySelector("[name = cantidad]")
const precio = document.querySelector(".productPrecio")


let precioNumerico = Number(precio.innerText.replace("$",""))




cantidad.addEventListener("click", () => {
         

        
        let total = cantidad.value * precioNumerico
        console.log(total)
        let classTotal = document.querySelector(".spanTotal")
        classTotal.innerHTML = "$"+  total
   
})