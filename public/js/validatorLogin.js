const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

let form = document.querySelector('.section-form-login')


let inputEmail = document.querySelector('.section-login__inputEmail')
let inputPassword = document.querySelector('.section-login__inputPassword')


form.addEventListener('submit', (e) => {
    if(inputEmail.value.length ==0 || inputPassword.value.length ==0 ) {
        e.preventDefault()
        document.querySelector('.errores-front-password').innerHTML = "Debe completar los campos de email y password."
    }   
})


inputEmail.addEventListener('blur', function () {
    if (regexEmail.test(inputEmail.value)) {
        document.querySelector('.errores-front-correo').innerHTML = ""
    } else {
        document.querySelector('.errores-front-correo').innerHTML = "El campo debe ser un email."
    }
})


/* validacion front Password */

inputPassword.addEventListener('blur', function () {
    if (inputPassword.value.length < 8) {
        document.querySelector('.errores-front-password').innerHTML = "El campo debe tener más de 8 carácteres."
    } else {
        document.querySelector('.errores-front-password').innerHTML = ""
    }
})