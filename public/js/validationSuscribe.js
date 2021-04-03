const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

let botonSuscribirse = document.querySelector('.section-suscribeFormButton') 


let mailSuscribe = document.querySelector('.section-suscribeFormInput')


botonSuscribirse.addEventListener('click', function(e) {
    e.preventDefault()
    swal("Debe ingresar un email", "", "error")
}) 


mailSuscribe.addEventListener('blur', function() {
    if (regexEmail.test(mailSuscribe.value)) {
        document.querySelector('.errores-front-suscribe').innerHTML = "" 
        botonSuscribirse.addEventListener('click', function() {
            swal("Suscripción exitosa", "", "success")
        }) 
       
    } else {
        document.querySelector('.errores-front-suscribe').innerHTML = "El campo debe ser un email." 
        botonSuscribirse.addEventListener('click', function(e) {
            e.preventDefault()
            swal("Debe ingresar un email", "", "error")
        }) 
    }
})


