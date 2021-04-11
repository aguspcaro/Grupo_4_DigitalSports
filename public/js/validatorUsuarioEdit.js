const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


window.addEventListener("load", function() {

    let form = document.querySelector("#formUserEditar")

    form.addEventListener("submit", function(e){

        // VALIDACION EMAIL
        let errorEmail = [];
    
        let email = document.querySelector("#email");
    
        if(email.value == ""){
            
            //alert("* Deberá ser un email válido")
            errorEmail.push("* Deberá ser un email válido")
        }

        //console.log(errorEmail);
    
        let erroresFrontEmail = document.querySelector("#erroresFrontEmail ul");
    
        for(let i = 0; i < errorEmail.length; i++){
    
            erroresFrontEmail.innerHTML += "<li>" + errorEmail[i] + "</li>";
    
        }
    
        // VALIDACION PASSWORD
        let errorPassword = [];
    
        let password = document.querySelector("#password");
    
        if(password.value == ""){
    
            errorPassword.push("* La contraseña debera tener mínimo 8 caracteres")
    
        }   

        //console.log(errorPassword);
    
        let erroresFrontPassword = document.querySelector("#erroresFrontPassword ul");
    
        for(let i = 0; i < errorPassword.length; i++){
    
            erroresFrontPassword.innerHTML += "<li>" + errorPassword[i] + "</li>";
    
        }
        
        if(errorEmail.length > 0 || errorPassword.length > 0){
    
            e.preventDefault();
        }
    
    })
    

})





/*
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
*/