const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


window.addEventListener("load", function() {

    let form = document.querySelector("#formUserEditar")

    form.addEventListener("submit", function(e){

        if(email.value == "" || password.value == ""){
            
            e.preventDefault();

            swal("Campos sin completar", "", "error")   
        }

    })
    

})

email.addEventListener("blur", function(){

    if (regexEmail.test(email.value)) {
        document.querySelector('.erroresFrontEmail').innerHTML = "" 
    } else {
        document.querySelector('.erroresFrontEmail').innerHTML = "* Deberá ser un email válido"
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