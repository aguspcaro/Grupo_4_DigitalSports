const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


//validación front Email

let inputEmail = document.querySelector('.section-login__inputEmail')

inputEmail.addEventListener('blur', function() {
    if (regexEmail.test(inputEmail.value)) {
        document.querySelector('.errores-front-correo').innerHTML = "" 
    } else {
        document.querySelector('.errores-front-correo').innerHTML = "El campo debe ser un email." 
    }


})


/* validacion front Password */

let inputPassword = document.querySelector('.section-login__inputPassword')


inputPassword.addEventListener('blur', function() {
    if (inputPassword.value.length < 8) {
        document.querySelector('.errores-front-password').innerHTML = "El campo debe tener más de 8 carácteres." 
    } else {
        document.querySelector('.errores-front-password').innerHTML = "" 
    }
})