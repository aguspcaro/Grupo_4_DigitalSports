window.addEventListener("load", function(){


    let form = document.querySelector("form.section-form-register")

  

    form.addEventListener("submit", function(e){
        let email = document.querySelector("#email")
        let errores = []
        let password = document.querySelector("#password")

        if(email.value == "") {
            errores.push("* El campo es obligatorio")
        } 
        
        if(password.value.length < 8) {
            errores.push("* La contraseña deberá tener como mínimo 8 caracteres")

        }
        
        if(errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector("[class=erroresFront]")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
            }
        }
        
    })

    

})