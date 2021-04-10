const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


let email = document.querySelector("#email")


let form = document.querySelector('.section-form-register')





form.addEventListener('submit', (e) => {
    if(email.value.length == 0 || password.value.length == 0 ) {
        e.preventDefault()
        document.querySelector('.erroresFrontEmail').innerHTML = "Debe completar los campos de email y password."
    }   
})





email.addEventListener("blur", function(){

    if (regexEmail.test(email.value)) {
        document.querySelector('.erroresFrontEmail').innerHTML = "" 
    } else {
        document.querySelector('.erroresFrontEmail').innerHTML = "* El campo es obligatorio"
    }
    
})


let password = document.querySelector("#password");


password.addEventListener("blur", function(){

    if (password.value.length < 8) {
        document.querySelector('.erroresFrontPassword').innerHTML = "* La contraseña debera tener mínimo 8 caracteres"
    } else {
        document.querySelector('.erroresFrontPassword').innerHTML = ""
    }
    
})

    
    

